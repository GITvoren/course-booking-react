import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import login from '../assets/css/login.css'
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';




function Register(){

     const [email, setEmail] = useState("");
     const [password1, setPassword1] = useState("");
     const [password2, setPassword2] = useState("");
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [mobileNumber, setMobileNumber] = useState("");

     const [isActive, setIsActive] = useState(true);
     const navigate= useNavigate()

     useEffect(() => {

          if((email !== "" && password1 !== "" && password2 !== "" && firstName !== "" && lastName !== "" && mobileNumber !== "" && ( password1 === password2) && (password1.length > 7) && (mobileNumber.length >= 11) && (email.length >= 10)))
          {
               setIsActive(true);
          } else {
               setIsActive(false);
          }

     }, [email, password1, password2, firstName, lastName, mobileNumber])

     function registerUser(e){
          e.preventDefault()

          fetch(`${process.env.REACT_APP_API_URL}/users/checkEmail`, {
               method: 'POST',
               headers: {
                    'Content-type': 'application/json'
               },
               body: JSON.stringify({
                    email:email
               })

          })
          .then(res => res.json())
          .then(data => {
               if(data === true){
                    Swal.fire({
                         title: "Registration failed!",
                         icon: "error",
                         text: "Email already exists!"
                    })
               } else {
                    
                    next()  
               
               }
          })
     }

     function next(){

                    fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
                    method: 'POST',
                    headers: {
                         'Content-type': 'application/json'
                    },
                    body: JSON.stringify({

                         email:email,
                         password: password1,
                         mobileNo: mobileNumber,
                         firstName: firstName,
                         lastName: lastName
                     })
                 })
                 .then(res => res.json())
                 .then(data => {
                    if(data === true){
                         Swal.fire({
                              title: "Registration successful!",
                              icon: "success",
                              text: "You have successfully registered! You can log in now"
                         })
                    
                    navigate('/account/login');

                    } else {
                         Swal.fire({
                              title: "Registration failed!",
                              icon: "error",
                              text: "Oh no, an error has occured. Please try again later."
                         })
                    }
                 })
                 
          }


     return(
          <Container>
               <Form className="account-container mx-auto mt-4 pt-4">
                    <div className="d-flex flex-column gap-1">
                         <h1 className="align-self-center h2 account-head mb-5">Member Registration</h1>
                         <Form.Group>
                              <Form.Label>First Name</Form.Label>
                              <Form.Control
                              type="text"
                              value={firstName}
                              onChange= {e => setFirstName(e.target.value)}
                              required />
                              
                         </Form.Group>
                         <Form.Group>
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control
                              type="text"
                              value={lastName}
                              onChange= {e => setLastName(e.target.value)}
                              required />
                         </Form.Group>
                         <Form.Group className="mb-2" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control 
                              type="email" 
                              placeholder="name@example.com"
                              value={email}
                              onChange= {e => setEmail(e.target.value)}
                              required />
                              <Form.Text className="text-muted">
                                   We'll never share your email with anyone else.
                              </Form.Text>
                         </Form.Group>
                         <Form.Group>
                              <Form.Label>Mobile Number</Form.Label>
                              <Form.Control
                              type="number"
                              placeholder="0909-808-7070"
                              value={mobileNumber}
                              onChange= {e => setMobileNumber(e.target.value)}
                              required />
                         </Form.Group>

                         <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control 
                              type="password"
                              placeholder="Enter a minimum of 8 characters" 
                              value={password1}
                              onChange= {e => setPassword1(e.target.value)}
                              required />
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control 
                              type="password" 
                              value={password2}
                              onChange= {e => setPassword2(e.target.value)}
                              required />
                         </Form.Group>
                         {
                         isActive
                         ?
                         <Button onClick={registerUser} variant="outline-light" className="custom-bg4 align-self-center">Create Account</Button>
                         :
                         <Button variant="outline-light" className="custom-bg4 align-self-center disabled-btn">Create Account</Button>
                         
                         }
                         
                         <Form.Text className="text-muted align-self-center reg-txt">
                                   Already have an account? &nbsp; <Link className="router-links" to="/account/login"><span className="reg-btn">Log in</span></Link>
                              </Form.Text>
                    </div>
                    
               </Form>
          </Container>
     )
}



export default Register;