import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Footer from './Footer';
import { withRouter } from 'react-router';

class Login extends React.Component {
    constructor(props){
        super(props);
    }
    onSubmit(event){
     event.preventDefault();
     console.log("login submit is clicked");
    this.props.history.push({pathname:"/dashboard"});
    }
    render() {
        return (
            <div style={{marginTop:"50px"}} class="container-fluid">
                <div class="row">
                    <div class="col-sm-8"></div>
                    <div class="col-sm-4">
                        <div>
                            <h1 style={{ color: "blue" }}><i style={{color:"green"}} class="fa fa-handshake" aria-hidden="true"></i>Cognizant <span style={{ color: "green" }}>Outreach</span></h1>
                            <p>feedback management system</p>
                        </div>
                        <div>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                
                                <Button variant="primary" type="submit" onClick={(event)=>{this.onSubmit(event)}}>
                                    SIGN ME IN
  </Button>
                            </Form>
                        </div>

                <section>
                    <Footer/>
                </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)