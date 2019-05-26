import React, { Component } from 'react';
import { Col,Button, Container, Alert} from 'react-bootstrap';




class NotLoged extends Component {



render() {
        return (
         
             
             
             <Col xs={12}>
                <Container style = {{margin: '100px', textAlign: 'center'}}>

                        <Alert variant="dark">
                         <h5>
                          Musisz być zalogowany żeby wykonać tę czynność!
                     
                        </h5>
                        <hr />
                       <Button href='/login'> Zaloguj</Button>
                        </Alert>

                

                </Container>
</Col>                


        )};
}
export default NotLoged;

