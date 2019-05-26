import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import AuthService from './AuthService';

//http basic out do logowania
const textStyle = {
  color: "white"
}

const buttonStyle = {
  width: '200px',
  marginLeft: '17%',
  marginBottom: '10px'
 
}

const inputStyle = {
  width:'300px',
 
}

const centerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

class Login extends Component {

    constructor() {
        super();
        this.state = {login:"", password:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Auth = new AuthService();
    }

  handleLogin(event){
      this.setState({login: event.target.value})
  }

  handlePassword(event){
      this.setState({password: event.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.Auth.login(this.state.login, this.state.password)
      .then(res => {
        this.props.history.replace('/main');
      })
      .catch(err =>{
        alert(err);
      })
  }

  componentWillMount(){
    if(this.Auth.loggedIn()){
   // console.log("jesteś już zalogowany");
    this.props.history.replace('/alreadyLoged')
    }
  }


  render() {
    return (
        <div>

          {this.state.res && (
              <div>
                  {alert(this.state.res)}
              </div>
          )}
            <Container style={centerStyle}>
        <Form onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Label style = {textStyle}>Login</Label>
              <Input
              style = {inputStyle}
                onChange = {this.handleLogin.bind(this)}
                type="text"
                name="login"
                id="exampleLogin"
                placeholder="login"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword" style = {textStyle}>Password</Label>
              <Input
                onChange = {this.handlePassword.bind(this)}
                style = {inputStyle}
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
         
             <Button style ={buttonStyle} >Zaloguj</Button>
             <Button style ={buttonStyle}  href="/register">Rejestracja</Button>
            
        </Form>
       
      </Container>
        </div>
    );
  }
}


export default Login;