import React, { Component } from 'react';
import "./library.css";
import { Button,Row,Col,Container,Dropdown } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';



class Library extends Component {
    constructor() {
        super();
        this.state = {
            text: [
                {
                }
            ],
            category:""
        
        };
       // this.handleSubmit = this.handleSubmit.bind(this);
        //this.handlEmail = this.handlEmail.bind(this);
      
    }





componentDidMount(){
    console.log("http://localhost:3001/products"+this.state.category);
    fetch("http://localhost:3001/products"+this.state.category)
    .then(res => res.json())
   // .then(data => console.log(data))
    .then(data => this.setState({text:data}))
    .catch(err => console.log(err))
}

handleClick(change){
    
    console.log("zmiana kategorii");
   // this.setState({category:change});
    this.state.category = change;
    console.log(this.state.category);
    this.componentDidMount();
}


 onStarClick(nextValue, prevValue, name) {

      console.log(this.state.count);
      console.log(nextValue);
      console.log(prevValue);
      console.log(name);
    fetch('http://localhost:3001/products/'+name, {
        method:'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({rate:nextValue+prevValue})
      })

      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })
  }


render()
 {

        return (
     
<Container >
    
   <Row>
   <Dropdown>
       <Col xs={12}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Kategorie
  </Dropdown.Toggle>
      </Col>
  <Dropdown.Menu>
    <Dropdown.Item  onClick={() => this.handleClick("/category/Action")}>Akcja</Dropdown.Item>
    <Dropdown.Item onClick={() => this.handleClick("/category/Races")}>Wyścigi</Dropdown.Item>
    <Dropdown.Item onClick={() => this.handleClick("/category/FPS")}>FPS</Dropdown.Item>
    <Dropdown.Item onClick={() => this.handleClick("/category/RTS")}>RTS</Dropdown.Item>
    <Dropdown.Item onClick={() => this.handleClick("/category/RPG")}>RPG</Dropdown.Item>
    <Dropdown.Item onClick={() => this.handleClick("/category/Symulators")}>Symulatory</Dropdown.Item>
    <Dropdown.Item onClick={() => this.handleClick("/category/Others")}>Inne</Dropdown.Item>
    <Dropdown.Item onClick={() => this.handleClick("")}>Wszystkie</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
   </Row>
   {
       this.state.text.map((dynamicData, i) =>
     
       <Row key={i}>
       <Col xs={3}>{dynamicData.name}</Col>
       <Button 
       onClick={()=>{ alert('dokonano zakupu\nkod aktywacyjny: ' +(dynamicData._id)); }}
       xs={6}>
       {dynamicData.price}zł
       </Button>

       <StarRatingComponent 
          name= {dynamicData._id}
          starCount={10}
          editing={true}
          value={dynamicData.rate}
         // onChange={this.setState({count:dynamicData.rate_count})} 
          onStarClick={this.onStarClick.bind(this)}
        />

       </Row>
       )
   }
       
</Container>


        )};
}




export default Library;