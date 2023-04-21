import navbar from '../assets/css/navbar.css'
import Button from 'react-bootstrap/Button';
import brand from '../assets/images/brand.png'
import { useRef } from 'react';
import { Link } from 'react-router-dom';


function AppNavbar() {

  const ref = useRef(null);
  const ref2 = useRef(null);

  let Toggled = false
     const toggle = (e) =>{
          e.preventDefault()
          const navList = ref.current
          const toggleBtn = ref2.current
          if(Toggled){
               navList.style.top= '-400%'
               toggleBtn.classList.toggle('fa-bars')
               Toggled= false;
               toggleBtn.classList.toggle('fa-times')
     
          } else{
               navList.style.top= '90%';
               toggleBtn.classList.toggle('fa-times')
               Toggled= true
               toggleBtn.classList.toggle('fa-bars')
          }
     };

  return (
      <nav className="custom-bg d-flex justify-content-between p-lg-3 p-2 text-light align-items-center">
        <Link className="router-links" to="/"><img src={brand} alt="brand-logo" className="img-fix"/></Link>
        <ul ref={ref} className="nav-list d-flex gap-5">
          <Link className="router-links" to="/"><li>Home</li></Link>
          <Link className="router-links" to="/courses"><li>Courses</li></Link>
          <Link className="router-links" to="/"><li>About</li></Link>
          <Link className="router-links" to="/"><li>Contact</li></Link>
           
        </ul>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <Link className="router-links" to="/account/login"><i className="fa fa-user h2 mb-0"></i></Link>
          <Link className="router-links" to="/account/login"><Button variant="outline-light btn-lg" className="custom-bg3 member-btn">Member</Button></Link>{' '}
          <i ref={ref2} onClick={toggle} className="fa fa-bars h1 pe-2 mb-0"></i>
        </div>
      </nav>
  );
}

export default AppNavbar;