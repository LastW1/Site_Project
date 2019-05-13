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
import {BrowserRouter, Route, Switch} from "react-router-dom";


class App extends Component {

    

    render() {

        const style = {
           backgroundImage: `url(${ Background })`,
           height: '100vh',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover',
          };

        return (
            <BrowserRouter>
                <div style={style}>
                    <Navbar/>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/main" component={StartPage}/>
                        <Route path="/library" component={Library}/>
                        <Route component={Error}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
