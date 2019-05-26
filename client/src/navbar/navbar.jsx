import logo from '../img/logo_project.png';
import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import AuthService from '../content/AuthService';



const navBarStyle = {
    background: "rgba(15, 132, 102, 1)",
   // marginBottom: "50px",
   // height: '70px'
};

const textColor = {
    color: "#ffffff",
};


const imgDimension = {
    width: '147px',
    height: '61px'

};




export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthService();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    handleLogout(){
        if(this.Auth.loggedIn()){
            this.Auth.logout();
            alert("wylogowano");
           // this.props.history.replace('/main');
        }
        else{
            alert("nie jesteś zalogowany");
        }
     }
  


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
            <Navbar style={navBarStyle} light expand="md">
             
                    <NavLink href="/main" >  <img src={logo}  alt={"logo"} style={imgDimension}/></NavLink>

                <Nav  className="ml-auto" navbar>
                    
                    <NavItem>
                        <NavLink href="" style={textColor} onClick={this.handleLogout.bind(this)} >Logout</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={textColor}href="/login" >Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={textColor}href="/library" >Biblioteka</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

        </div>
        );
    }
}

