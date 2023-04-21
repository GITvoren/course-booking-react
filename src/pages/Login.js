import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import login from '../assets/css/login.css'
import {Link} from 'react-router-dom';




function Login(){
     return(
          <Container>
               <Form className="account-container mx-auto mt-5 pt-5">
                    <div className="d-flex flex-column">
                         <h1 className="align-self-center h2 account-head mb-5">Member Login</h1>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email"/>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                         </Form.Group>
                         <Button variant="outline-light" className="custom-bg4 align-self-center">Log in</Button>
                         <Form.Text className="text-muted align-self-center reg-txt">
                                   Don't have an account yet? &nbsp; <Link className="router-links" to="/account/register"><span className="reg-btn">Register</span></Link>
                              </Form.Text>
                    </div>
                    
               </Form>
          </Container>
     )
}



export default Login;