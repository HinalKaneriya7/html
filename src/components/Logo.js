import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function Logo() {
    return (
      <section className='logos'>
        <Container className='logos-row'>
            <div className='title'>
              <h5>Proud</h5>
              <h2>Member</h2>
            </div>
            <Row>
                <Col className='logo-image'>
                  <img className='l-image' src="/images/logo-1.jpg" />
                </Col>
                <Col className='logo-image'>
                  <img className='l-image' src="/images/logo-2.jpg" />
                </Col>
                <Col className='logo-image'>
                  <img className='l-image' src="/images/logo-3.jpg" />
                </Col>
            </Row>
        </Container>
      </section>
    );
  }


export default Logo; 