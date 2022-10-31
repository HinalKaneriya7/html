import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";

function Footer() {
    return (
      <footer className='footer'>
        <Container>
        {/* <Link to="/" className="footer-logo"><img src="/images/logo.png" alt="Logo" /></Link> */}
          <Row>
            <Col className="col-lg-6 left-footer">
                <h4 className="location"><i className="fa fa-home" aria-hidden="true"></i>The Ocean Lakes</h4>
                <p  className="location-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. </p>
                <Link to="#0" className="phone"><i className="fa fa-phone" aria-hidden="true"></i>+1 01234 08699</Link>
                <Link to="#0" className="email"><i className="fa fa-envelope" aria-hidden="true"></i>theloremmail.com</Link>
            </Col>
            <Col className="col-lg-6 right-footer">
              <ul className='footer-links'>
                <h4>Navigation</h4>
                <li className='footer-link'>
                  <NavLink exact to="/" className="nav-link f-link">Home</NavLink>
                </li>
                <li className='footer-link'>
                  <NavLink exact to="/about" className="nav-link f-link">About us</NavLink>
                </li>
                <li className='footer-link'>
                  <NavLink to="/blog" className="nav-link f-link">Blog</NavLink>
                </li>
                <li className='footer-link'>
                  <NavLink to="/freatured-properties" className="nav-link f-link">Featured Properties</NavLink>
                </li>
                <li className='footer-link'>
                  <NavLink to="/contact-us" className="nav-link f-link">Contact Us</NavLink>
                </li>
              </ul>
              <ul className='footer-links'>
                <h4>Service</h4>
                <li className='footer-link'>
                  <NavLink exact to="/about" className="nav-link f-link">Support</NavLink>
                </li>
                <li className='footer-link'>
                  <NavLink to="/contact" className="nav-link f-link">Help Center</NavLink>
                </li>
                <li className='footer-link'>
                  <NavLink to="/privacy-policy" className="nav-link f-link">Safety information</NavLink>
                </li>
                <li className='footer-link'>
                  <NavLink to="/terms-and-condition" className="nav-link f-link">Cancellation options</NavLink>
                </li>
                <li className='footer-link'>
                  <NavLink to="/terms-and-condition" className="nav-link f-link">Our COVID-19 Response</NavLink>
                </li>
                <li className='footer-link'>
                  <NavLink to="/terms-and-condition" className="nav-link f-link">Supporting people with disabilities</NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className='bottom-footer'>
          <Container>
              <p className='copyright'>© 2022 theocenlakes.</p>
              <div className="f-social">
                    <ul className="right-nav">
                      <li><Link to="#">Privacy </Link></li>
                      <li><Link to="#">Terms </Link></li>
                      <li><Link to="#">Sitemap</Link></li>
                    </ul>
                {/* <ul className="social-media-list">
                    <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul> */}
              </div>
          </Container>
        </div>
      </footer>
    );
  }


export default Footer; 