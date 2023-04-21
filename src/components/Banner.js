import banner from '../assets/css/banner.css';
import Container from 'react-bootstrap/Container';
import undraw from '../assets/images/undraw.png';
import Button from 'react-bootstrap/Button';
import AppNavbar from './AppNavbar.js';

function Banner(){
     return(
          <div className="wave-banner">
               <AppNavbar />
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,256L48,256C96,256,192,256,288,240C384,224,480,192,576,165.3C672,139,768,117,864,117.3C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
               </svg>
               <Container>
                    <div className="d-flex flex-lg-row flex-column-reverse gap-lg-5 gap-2 justify-content-center mt-5 align-items-center">
                         <div className="d-flex flex-column align-items-center gap-4">
                              <img src={undraw} alt="bannerimg" className="img-fluid col-lg-9 col-xxl-10 col-md-8 banner-img" />
                              <Button variant="outline-light btn-lg" className="banner-btn">Start Learning</Button>{' '}
                         </div>
                         <div>
                              <div className="banner-txt">
                                   <h1 className="text-light banner-one">Want to Become a Web Developer?</h1><br />
                               
                                   <h3 className="banner-sub">We Offer Online Coding Courses!</h3>
                                   <h3 className="banner-sub"> Learn at your own pace!</h3> 
                               
                                  
                              </div>
                              <h1 className="brand-name mt-5">&lt;Code <span className="text-light">Lab </span>/&gt;</h1>
                         </div>
                    </div>
               </Container>
               
          </div>
     )
}


export default Banner;