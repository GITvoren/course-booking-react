import navbar from '../assets/css/navbar.css'
import Button from 'react-bootstrap/Button';
import brand from '../assets/images/brand.png'


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
        <div>
          <Button variant="outline-light btn-lg" className="custom-bg3">Member</Button>{' '}
        </div>
      </nav>
  );
}

export default AppNavbar;