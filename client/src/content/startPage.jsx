import React, { Component } from 'react';
import { Col,Container,Alert} from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaTwitch, FaYoutube, FaInstagram} from 'react-icons/fa';

const helloStyle = {
        color: "white",
        //position: "center"

      }

function facebookClick(e) {
        e.preventDefault();
        window.location = 'https://www.facebook.com/';
}

function youtubeClick(e) {
        e.preventDefault();
        window.location = 'https://www.youtube.com/';
}

function twitterClick(e) {
        e.preventDefault();
        window.location = 'https://www.twitter.com/';
}

function instagramClick(e) {
        e.preventDefault();
        window.location = 'https://www.instagram.com/';
}

function twitchClick(e) {
        e.preventDefault();
        window.location = 'https://www.twitch.com/';
}






class StartPage extends Component {

render() {
        return (
<Col xs={12}>
                <Container style = {{margin: '100px', textAlign: 'center'}}>

                        <Alert variant="dark">
                         <h2>Witaj na stronie GameNation !!!</h2>
                         <h5>
                          Zapraszamy do najlepszych zakupów w sieci!
                          Czekają na Ciebie najpopularniejsze gry w najkorzystniejszych cenach.
                          Nie czekaj i kup już teraz!
                     
                        </h5>
                        <hr />
                        <p className="mb-0">
                          W razie pytań skorzystaj z formularza kontaktowego poniżej
                        </p>
                        </Alert>

                        <Alert variant="dark" style={{margin:"20px"}}>
                         <Alert.Heading>Zajrzyj też na nasze media społecznościowe</Alert.Heading>

                        <hr />
                         <h1><FaFacebook onClick={facebookClick}/>   <FaTwitter onClick={twitterClick}/>   <FaTwitch onClick={twitchClick}/>   <FaYoutube onClick={youtubeClick}/>   <FaInstagram onClick={instagramClick}/></h1>
                        </Alert>

                </Container>
</Col>                
                


        )};
}
export default StartPage;

