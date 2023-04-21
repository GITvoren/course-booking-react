import Container from 'react-bootstrap/Container';
import undraw3 from '../assets/images/undraw3.png'
import courses from '../assets/css/courses.css'

function UnderConstruction(){
     return(
          <div>
               <Container className="mt-3">
                    <div className="courses-banner d-flex flex-column flex-lg-row justify-content-center align-items-center mx-auto">
                         <img src={undraw3} className="col-lg-3 img-fluid" alt="img" />
                         <p className="h3 col-lg-6">Page Under Construction</p>
                    </div>          
               </Container>
               
          </div>
     )
}


export default UnderConstruction;