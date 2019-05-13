import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import "./register.css";

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


class Register extends Component {

    constructor() {
        super();
        this.state = {login:"",email:"", password:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handlEmail = this.handlEmail.bind(this);
      
    }
    handleLogin(event){
        this.setState({login: event.target.value})
    }
    handleEmail(event){
        this.setState({email: event.target.value})
    }
    handlePassword(event){
        this.setState({password: event.target.value})
    }


    handleSubmit(event){ 
        event.preventDefault();
      
        fetch('http://localhost:3001/users', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({login:this.state.login, email:this.state.email , password:this.state.password})
          })
          .then(res => {
              if(res.ok){
               alert("pomyślnie zarejestrowano");
               this.props.history.push('login')
              }
             else{
                 alert("błąd rejestracji");
             }

          })
          .then(function(res){ console.log(res) })
          .catch(function(res){ console.log(res) })
        
       
       };
    
    /*handleSubmit() {

    fetch('http://localhost:3001/users', {
            method: "post",
            body:  {
                "login": this.state.login,
                "email": this.state.email,
                "password": this.state.password
               }
        })
    .then(body =>body.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))

    }*/

    render() {
        return (
            <div>
                {this.state.res && (
                    <div>
                        {alert(this.state.res)}
                    </div>
                )}
                <Container style = {centerStyle}>
                    <Form onSubmit={this.handleSubmit} >
                        <Col>
                            <FormGroup>
                                <Label style = {textStyle}>Nazwa Użytkownika</Label>
                                <Input
                                    onChange = {this.handleLogin.bind(this)}
                                    style = {inputStyle}
                                    type="text"
                                    name="login"
                                    id="exampleUserName"
                                    placeholder="Twoja Nazwa Użytkownika"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style = {textStyle}>Email</Label>
                                <Input
                                    onChange = {this.handleEmail.bind(this)}
                                    style = {inputStyle}
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="email@email.com"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword" style = {textStyle}>Hasło</Label>
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

                         <Button style = {buttonStyle}>Rejestracja</Button>
                        <Button style = {buttonStyle}  href="/login">Cofnij</Button>

                    </Form>
                   
                </Container>
                 
            </div>
        );
    }


}



export default Register;