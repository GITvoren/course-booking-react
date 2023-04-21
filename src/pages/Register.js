import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import login from '../assets/css/login.css'
import {Link} from 'react-router-dom';




function Register(){
     return(
          <Container>
               <Form className="account-container mx-auto mt-5 pt-5">
                    <div className="d-flex flex-column gap-1">
                         <h1 className="align-self-center h2 account-head mb-5">Member Registration</h1>
                         <Form.Group>
                              <Form.Label>First Name</Form.Label>
                              <Form.Control
                              type="text"
                              />
                              {/* value={firstName}
                              onChange= {e => setFirstName(e.target.value)}
                              required /> */}
                         </Form.Group>
                         <Form.Group>
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control
                              type="text"
                              />
                         </Form.Group>
                         <Form.Group className="mb-2" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control 
                              type="email" 
                              placeholder="name@example.com"/>
                              <Form.Text className="text-muted">
                                   We'll never share your email with anyone else.
                              </Form.Text>
                         </Form.Group>
                         <Form.Group>
                              <Form.Label>Mobile Number</Form.Label>
                              <Form.Control
                              type="number"
                              placeholder="0909-808-7070"
                              />
                         </Form.Group>

                         <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control 
                              type="password"
                              placeholder="Enter a minimum of 8 characters" />
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control type="password" />
                         </Form.Group>
                         <Button variant="outline-light" className="custom-bg4 align-self-center">Create Account</Button>
                         <Form.Text className="text-muted align-self-center reg-txt">
                                   Already have an account? &nbsp; <Link className="router-links" to="/account/login"><span className="reg-btn">Log in</span></Link>
                              </Form.Text>
                    </div>
                    
               </Form>
          </Container>
     )
}



export default Register;