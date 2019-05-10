import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


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
    }

  handleLogin(event){
      this.setState({login: event.target.value})
  }

  handlePassword(event){
      this.setState({password: event.target.value})
  }

  handleSubmit(event){ 
    event.preventDefault();
  
    fetch('http://localhost:3001/login', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({login:this.state.login, password:this.state.password})
      })
      .then(res => {
          if(res.ok){
           alert("pomyślnie zalogowano");
          }
         else{
             alert("błąd logowania");
         }

      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })
    
   
   };

  render() {
    return (
        <div >

          {this.state.res && (
              <div>
                  {alert(this.state.res)}
              </div>
          )}
            <Container style={centerStyle}>
        <Form onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Login</Label>
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
              <Label for="examplePassword">Password</Label>
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