import logo from '../img/logo_project.png';
import React from 'react';


import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';

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

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
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
                <NavbarBrand onClick={this.toggle} className="container-fluid" href="/main"><img src={logo} alt={"logo"}
               style={imgDimension}/>
                </NavbarBrand >
                <NavbarToggler />


                <Nav  className="ml-auto" navbar>
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

