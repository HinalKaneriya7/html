import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function Banner() {
    return (
      <section className='banner'>
        <Container fluid>
          <div className='banner-content row'>
            <div className='col-lg-6 d-flex align-items-center'>
              <div className='banner-text'>
                <h1>Come to<br/> Ocean Lakes for a<br /> relaxing vacation!</h1>
              </div>
            </div>
            <div className='col-lg-6'>
            <div className='banner-image'>
              <img src="/images/banner.jpg" />
            </div>
            </div>
          </div>
        
          <div className='property'>
          <Row className='align-items-center'>
              <Col className='col-lg-3'>
                <label>Search property</label>
                <div className='banner-bottom'>
                  <i className="fa fa-compass" aria-hidden="true"></i>
                  <input className='input.cls' />
                </div>
                {/* <select name="Location" id="Location">
                  <option value="Location1">Location1</option>
                  <option value="Location2">Location2</option>
                  <option value="Location3">Location3</option>
                  <option value="Location4">Location4</option>
                </select> */}
              </Col>
              <Col className='col-lg-3'>
              <label>Arrival</label>
              <div className='banner-bottom'>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <input className='input.cls'  />
                </div>
                {/* <select name="type" id="type">
                  <option value="type1">type1</option>
                  <option value="type2">type2</option>
                  <option value="type3">type3</option>
                  <option value="type4">type4</option>
                </select> */}
              </Col>
              <Col className='col-lg-3'>
              <label>Departure</label>
              <div className='banner-bottom'>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <input className='input.cls' />
                </div>
                {/* <select name="Pricing" id="Pricing">
                  <option value="Pricing1">Pricing1</option>
                  <option value="Pricing2">Pricing2</option>
                  <option value="Pricing3">Pricing3</option>
                  <option value="Pricing4">Pricing4</option>
                </select> */}
                </Col>
                <Col className='col-lg-3'>
                <label>Guests</label>
                <div className='banner-bottom'>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <input className='input.cls'  />
                  </div>
                  {/* <select name="Pricing" id="Pricing">
                    <option value="Pricing1">Pricing1</option>
                    <option value="Pricing2">Pricing2</option>
                    <option value="Pricing3">Pricing3</option>
                    <option value="Pricing4">Pricing4</option>
                  </select> */}
                  </Col>
                <button className='search'>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
          </Row>
          </div>

          <div className='right-content'>
            <div className='social'>
              <ul className="social-media-list">
                <li><a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </li>
                <li><a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li><a href="#" target="_blank" className="contact-icon">
                  <i className="fa fa-instagram" aria-hidden="true"></i></a>
                </li>       
              </ul>
            </div>
            <div className='side-text'>
                <h6>scroll down <i className="fa fa-long-arrow-left" aria-hidden="true"></i></h6>
            </div>
          </div>
        </Container>
      </section>
    );
  }


export default Banner; 