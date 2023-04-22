import CourseCard from '../components/CourseCard.js'
import Container from 'react-bootstrap/Container';
import courses from '../assets/css/courses.css'
import undraw2 from '../assets/images/undraw2.png'
import {useEffect, useState} from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Courses(){

     const [ courses, setCourses] = useState([]);
     const [isLoading, setIsLoading] = useState(true)

     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/courses/active`)
          .then(res => res.json())
          .then(data => {
               setCourses(data.map(course => {
                    return(
                         <CourseCard key={course._id} coursedata={course}/>
                    )
               }))
               
               setIsLoading(false)
          })
     }, [])


     return(
          <div>
               <Container className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <div className="courses-banner d-flex flex-column flex-lg-row justify-content-center align-items-center">
                         <img src={undraw2} className="col-lg-3 img-fluid" alt="img" />
                         <p className="h3 col-lg-6">Kickstart your Web Developer Journey with our Courses!</p>
                    </div>
                         {
                         (isLoading)?
                         <Spinner animation="border" variant="secondary" />

                         :
                         <>
                              {courses}
                         </>
                         
                         }
               </Container>
               
          </div>
     )
}


export default Courses;