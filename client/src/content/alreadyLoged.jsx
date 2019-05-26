import React, { Component } from 'react';
import { Col,Button, Container, Alert} from 'react-bootstrap';
import AuthService from './AuthService';
const Auth = new AuthService();


class AlreadyLoged extends Component {


    handleLogout(){
        Auth.logout()
        this.props.history.replace('/login');
     }


render() {
        return (
         
             
             
             <Col xs={12}>
                <Container style = {{margin: '100px', textAlign: 'center'}}>

                        <Alert variant="dark">
                         <h5>
                          Już jesteś zalogowany!
                     
                        </h5>
                        <hr />
                       <Button onClick={this.handleLogout.bind(this)}> wyloguj</Button>
                        </Alert>

                

                </Container>
</Col>                


        )};
}
export default AlreadyLoged;

