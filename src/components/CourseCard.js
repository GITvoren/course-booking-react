import coursecard from '../assets/css/coursecard.css';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'


function CourseCard({coursedata}){
     const { name, description, price, _id } = coursedata
     return(
               <div className="card-container d-flex flex-column p-5 mx-auto my-4">
                    <h3>{name}</h3>
                    <p className="card-desc">{description}</p>
                    <h6>Price:</h6>
                    <p className="card-price">&#8369;{price}</p>
                    <Link className="router-links align-self-center mt-3" to={`/${_id}/details`}><Button variant="outline-light" className="custom-bg4 align-self-center">View Schedule</Button></Link>
               </div>
     )
}

CourseCard.propTypes = {
     course: PropTypes.shape({
         name: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired
     })
 }
 

export default CourseCard;

