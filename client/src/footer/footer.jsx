import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

const footerStyle = {
    width: "100%",
    height: "5%",
    background: "rgba(15, 132, 102, 1)",
    color: "white",
    marginBottom: '0px',
    marginTop: '30px',
    position: 'fixed',
    left: 0,
    bottom: 0,
};
const contactStyle = {  //wyśrodkowanie tego gówna
  position: 'absolute',
  margin: 'auto',
  right: '0',
  left: '0',
  width: '100px',
  height: '100px'
}


class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalContactForm: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleContactForm = this.toggleContactForm.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);


        this.setState({
            res: stringifyFormData(data),
        });
        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });


    }

    toggleContactForm() {
        this.setState({
            modalContactForm: !this.state.modalContactForm
        });
    }


    render() {
        return (
            <footer className="footer" style={footerStyle}>

                {this.state.res && (
                    <div>
                        {alert(this.state.res)}
                    </div>
                )}
                <span style ={contactStyle} onClick={this.toggleContactForm}>Kontakt</span>

                <Modal isOpen={this.state.modalContactForm} toggle={this.toggleContactForm} className={this.props.className}>
                    <ModalHeader toggle={this.toggleContactForm}>Formularz kontaktowy</ModalHeader>
                    <ModalBody>
                        <Container>
                            <div className="text-center">
                                <form onSubmit={this.handleSubmit}>
                                    <Row >
                                        <Col>
                                           
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label htmlFor="username">Nazwa użytkownika</label>
                                            <input id="username" name="username" type="text" />
                                        </Col>
                                        <Col>
                                            <label htmlFor="email">E-mail</label>
                                            <input id="email" name="email" type="email" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label htmlFor="message">Wiadomość</label>
                                            <input style={{height:'200px', width: '400px'
                                            }

                                            } id="message" name="message" type="text" /> <br />
                                            <button style={{
                                                margin:'20px'
                                            }} className="btn-outline-primary">Wyślij wiadomość</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Container>

                    </ModalBody>
                    
                </Modal>

            </footer>
        );
    }
}

function

    stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}


export default Footer;
