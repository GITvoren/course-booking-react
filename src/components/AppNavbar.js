import navbar from '../assets/css/navbar.css'
import Button from 'react-bootstrap/Button';
import brand from '../assets/images/brand.png'
import { useRef } from 'react-router-dom'


function AppNavbar() {

  return (
      <nav className="custom-bg d-flex justify-content-between p-lg-3 p-2 text-light align-items-center">
        <img src={brand} alt="brand-logo" className="img-fix"/>
        <ul className="nav-list d-flex gap-5">
            <li>Home</li>
            <li>Courses</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <i className="fa fa-user h2 mb-0"></i>
          <Button variant="outline-light btn-lg" className="custom-bg3 member-btn">Member</Button>{' '}
          <i className="fa fa-bars h1 pe-2 mb-0"></i>
        </div>
      </nav>
  );
}

export default AppNavbar;