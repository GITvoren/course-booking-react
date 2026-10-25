import { Link } from 'react-router-dom';
import '../assets/css/footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="codelab-footer">
      <div className="codelab-footer__inner">
        <div className="codelab-footer__top">
          <div className="codelab-footer__brand">
            <Link to="/" className="codelab-footer__logo-link" aria-label="CodeLab home">
              <img
                src="/images/brand-logo.png"
                alt="CodeLab"
                className="codelab-footer__logo"
              />
            </Link>
            <p>Learn at your pace. Build something real.</p>
          </div>

          <nav className="codelab-footer__nav" aria-label="Footer navigation">
            <span className="codelab-footer__heading">Explore</span>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="codelab-footer__note">
            <span className="codelab-footer__heading">About this project</span>
            <p>
              A personal project built to explore full-stack web development
              with the MERN stack.
            </p>
          </div>
        </div>

        <div className="codelab-footer__bottom">
          <span>© {currentYear} CodeLab. All rights reserved.</span>
          <a href="#top" className="codelab-footer__back-to-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
