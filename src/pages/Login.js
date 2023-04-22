import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import login from '../assets/css/login.css'
import {Link, useNavigate, Navigate} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import UserContext from '../utilities/UserContext.js';




function Login(){

     const {user, setUser} = useContext(UserContext);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [isActive, setIsActive] = useState(false);
     const navigate = useNavigate();

     function loginUser(e){
          e.preventDefault();
          fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                    email: email,
                    password: password
               })
          })
          .then(res => res.json())
          .then(data=>{
               if(typeof data.access !== "undefined"){
                    localStorage.setItem('token', data.access)
                    retrieveUserDetails(data.access)

                    Swal.fire({
                         title: 'Logged in Successful',
                         icon: 'success',
                         text: 'Welcome to <CodeLab />'
                    })

                    navigate('/')
                    
               } else {
                    Swal.fire({
                         title: 'Login Failed',
                         icon: 'error',
                         text: 'Email or Password is incorrect. Try again!'
                    })
               }
          })


          setEmail("");
          setPassword("");

    
     };

     const retrieveUserDetails = (token) => {

          fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          })
          .then(res => res.json())
          .then(data => {
               console.log(data);
               
       
               setUser({
                    id: data._id,
                    isAdmin: data.isAdmin
               })
          })
     }


     useEffect(() => {

          if(email !== "" && password !== ""){
               setIsActive(true);
          } else {
               setIsActive(false);
          }

     }, [email, password])

     return(
          <Container>
               <Form className="account-container mx-auto mt-5 pt-5">
                    <div className="d-flex flex-column">
                         <h1 className="align-self-center h2 account-head mb-5">Member Login</h1>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control 
                              type="email"
                              value={email}
                              onChange= {e => setEmail(e.target.value)}
                              required />
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control 
                              type="password" 
                              value={password}
                              onChange= {e => setPassword(e.target.value)}
                              required />
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                         </Form.Group>
                         {
                              isActive
                              ?
                              <Button variant="outline-light" onClick={loginUser} className="custom-bg4 align-self-center">Log in</Button>
                              :
                              <Button variant="outline-light" className="custom-bg4 align-self-center disabled-btn">Log in</Button>

                         }
                        
                         <Form.Text className="text-muted align-self-center reg-txt">
                                   Don't have an account yet? &nbsp; <Link className="router-links" to="/account/register"><span className="reg-btn">Register</span></Link>
                              </Form.Text>
                    </div>
                    
               </Form>
          </Container>
     )
}



export default Login;