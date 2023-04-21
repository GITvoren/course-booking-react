import navbar from '../assets/css/navbar.css'
import Button from 'react-bootstrap/Button';
import brand2 from '../assets/images/brand2.png'


function AppNavbar() {

  return (
      <nav className="custom-bg d-flex justify-content-between p-lg-3 p-2 text-light align-items-center">
        <img src={brand2} alt="brand-logo" className="img-fix"/>
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