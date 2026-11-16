import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 className="footer-logo">
            Drive<span>Easy</span>
          </h3>
          <p>Affordable, reliable car rentals. Find your car, contact us and drive.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Beirut, Lebanon</li>
            <li>+961 1 234 567</li>
            <li>info@driveeasy.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} DriveEasy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
