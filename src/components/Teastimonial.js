import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
        margin:20,
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      margin:20,
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      margin:20,
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Testi = (props) => (
    <div className="testi-content">
      <p>{props.text}</p>
      <span className='cus-name'>{props.name}</span>
    </div>
  );

function Testimonial() {
    return (
      <section className='testimonial'>
        <Container>
            <div className='title'>
                <h5>Our Priority</h5>
                <h2>Happy customers</h2>
            </div>
          <Row className='align-items-center'>
              <Col className='col-lg-8'>
                <div className='review-image'>
                    <img src='/images/live-4.jpg' className='img-fluid'/>
                </div>
                {/* <div className='testi-logo'>
                  <ul>
                    <li>
                      <Link to="/"><img className='l-image' src="/images/logo-1.jpg" /></Link>
                      <Link to="/"><img className='l-image' src="/images/logo-2.jpg" /></Link>
                      <Link to="/"><img className='l-image' src="/images/logo-3.jpg" /></Link>
                    </li>
                  </ul>
                </div> */}
              </Col>
              <Col className='col-lg-4'>
                <div className='content'>
                <Carousel className='testimonial-carousel'  responsive={responsive}>
                    <Testi name='H. Rackham' text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.' />
                    <Testi name='H. Rackham' text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.' />
                    <Testi name='H. Rackham' text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.' />
                </Carousel>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
    );
  }


export default Testimonial; 