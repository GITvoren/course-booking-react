import coursecard from '../assets/css/coursecard.css';
import Button from 'react-bootstrap/Button';
import {useParams, useNavigate, Link} from 'react-router-dom';
import UserContext from '../utilities/UserContext.js';
import Swal from 'sweetalert2'
import {useContext, useEffect, useState} from 'react'


function CourseView(){

     const { user } = useContext(UserContext);
     const navigate = useNavigate();
     const {courseId}= useParams();
     const [name, setName] = useState("")
     const [description, setDescription] = useState("");
     const [price, setPrice] = useState(0);
     const [enrollees, setEnrollees] = useState(0);

     const enroll=()=>{
          fetch(`${process.env.REACT_APP_API_URL}/users/enroll`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
               },
               body: JSON.stringify({
                    courseId: courseId
     
               })
          })
          .then(res => res.json())
          .then(data => {
               if(data === true){
                    Swal.fire({
                         title: "Successfully Enrolled",
                         icon: "success",
                         text: "You have successfully enrolled for this course."
                    })
                    navigate("/courses");
               } else{
                    Swal.fire({
                         title: "Something went wrong",
                         icon: "error",
                         text: "Please try again"
                    })
               }
          })
       }

       useEffect(()=>{
          fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}/details`)
          .then(res => res.json())
          .then(data => {
     
               setName(data.name);
               setDescription(data.description);
               setPrice(data.price);
               setEnrollees(data.enrollees.length)
          })
       }, [courseId])
     

     return(
               <div className="card-container d-flex flex-column p-5 mx-auto my-4">
                    <h3>{name}</h3>
                    <p className="card-desc">{description}</p>
                    <h6>Price:</h6>
                    <p className="card-price">&#8369;{price}</p>
                    <h6>Class Schedule:</h6>
                    <p className="card-price">8:00 AM - 5:00 PM</p>

                    {
					        	(user.id !== null) ?
					        		<>
                                        <h6>Current Number of Enrollees:</h6>
                                        <p className="card-price">{enrollees}</p>
                                       <Button onClick={enroll} variant="outline-light" className="custom-bg4 align-self-center mt-3">Enroll</Button>
                                        </>
					        		
					        		
					        		:
					        		<Link className="router-links align-self-center mt-3" to="/account/login"><Button variant="outline-light" className="custom-bg4 align-self-center">Login to Enroll</Button></Link>
				}
                    
               </div>
     )
}

export default CourseView;