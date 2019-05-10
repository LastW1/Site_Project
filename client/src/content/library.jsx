import React, { Component } from 'react';
import "./library.css";
import { Button,Row,Col,Container,Dropdown } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';



class Library extends Component {

state = {
    text: [
        {
        }
    ],
    category:"",
    rating:"",
    rateData: [
        {
        }
    ],


   

}



/*handleDataChange = () =>{
    console.log("boom");
    fetch("http://localhost:3001/products")
    .then(res => res.json())
   // .then(data => console.log(data))
    .then(data => this.setState({text:data}))
    .catch(err => console.log(err))
}*/


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
    //this.state({category:change});
    this.state.category = change;
    console.log(this.state.category);
    this.componentDidMount();
}


 onStarClick(event) {
    event.preventDefault();
      
    fetch('http://localhost:3001/users', {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({login:this.state.login, email:this.state.email , password:this.state.password})
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
          name="rate1" 
          starCount={10}
          editing="true"
          value={dynamicData.rate}
          onStarClick={this.onStarClick.bind(this)}
        />

       </Row>
       )
   }
       
</Container>


        )};
}




export default Library;