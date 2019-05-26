import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Error from './error/Error';
import Background from './img/background.png';
//import SearchEngine from './content/searchEngine';
import Login from './content/login';
import Library from './content/library';
import Register from './content/register';
import StartPage from './content/startPage';
import AlreadyLoged from './content/alreadyLoged';
import NotLoged from './content/notLoged';
import Admin from './content/admin';
import {BrowserRouter, Route, Switch} from "react-router-dom";



const style = {
           backgroundImage: `url(${ Background })`,
           height: '100vh',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover',
          };


class App extends Component {

    

    render() {

        

        return (
            <BrowserRouter>
                <div style={style}>
                    <Navbar/>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/main" component={StartPage}/>
                        <Route path="/library" component={Library}/>
                        <Route path="/alreadyLoged" component={AlreadyLoged}/>
                        <Route path="/notLoged" component={NotLoged}/>
                        <Route path="/admin" component={Admin}/>
                        <Route component={Error}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
