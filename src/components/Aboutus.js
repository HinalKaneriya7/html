import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function Aboutus() {
    return (
      <section className='about'>
        <Container>
          <Row className='d-flex'>
              <Col className='col-lg-6'>
                <div className='image'>
                    <img src='/images/live-6.jpg' className='img-fluid'/>
                </div>
              </Col>
              <Col className='col-lg-6 a-con d-flex align-items-center'>
                  <div className='t-con'>
                    <div className='title'>
                      <h5>Why</h5>
                        <h2>choose us</h2>
                    </div>
                    <div className='content'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className='two-col'>
                                <ul>
                                    <li>
                                        <div className='text'>
                                            <h3>10+</h3>
                                            <p>Years of experience</p>
                                        </div>
                                        <div className='text'>
                                            <h3>879</h3>
                                            <p>Rented Apartments</p>
                                        </div>
                                        <div className='text'>
                                            <h3>20</h3>
                                            <p>Awards Gained</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <button className='btn-black'><span>Learn More</span></button>
                  </div>
              </Col>
          </Row>
        </Container>
      </section>
    );
  }


export default Aboutus; 