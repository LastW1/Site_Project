import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

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


class Admin extends Component {
    constructor() {
        super();
        this.state = {name:"", category:"",price:""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleName(event){
        this.setState({name: event.target.value})
    }
    handleCategory(event){
        this.setState({category: event.target.value})
    }
    handlePrice(event){
        this.setState({price: event.target.value})
    }


    handleSubmit(event){ 
        event.preventDefault();
      
        fetch('http://localhost:3001/products', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //body:JSON.stringify({name:this.state.name, price:this.state.price , category:this.state.category , rate:"10" , rate_count:"1"})
            body:JSON.stringify({name:this.state.name, price:this.state.price , category:this.state.category , rate:"10" , rate_count:"1"}) 
        })
          .then(res => {
              if(res.ok){
               alert("pomyślnie dodano produkt");
               this.props.history.push('/admin')
              }
             else{
                 alert("coś poszło nie tak");
             }

          })
          .then(function(res){ console.log(res) })
          .catch(function(res){ console.log(res) })
       
       };


render() {
        return (
<Container style = {centerStyle}>
                    <Form onSubmit={this.handleSubmit} >
                        <Col>
                            <FormGroup>
                                <Label style = {textStyle}>Nazwa Produktu</Label>
                                <Input
                                    onChange = {this.handleName.bind(this)}
                                    style = {inputStyle}
                                    type="text"
                                    name="name"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style = {textStyle}>Kategoria</Label>
                                <Input
                                    onChange = {this.handleCategory.bind(this)}
                                    style = {inputStyle}
                                    type="text"
                                    name="category"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style = {textStyle}>Cena</Label>
                                <Input
                                    onChange = {this.handlePrice.bind(this)}
                                    style = {inputStyle}
                                    type="text"
                                    name="price"
                                />
                            </FormGroup>
                        </Col>

                         <Button style = {buttonStyle}>Dodaj</Button>

                    </Form>
                   
</Container>


        )};
}
export default Admin;

