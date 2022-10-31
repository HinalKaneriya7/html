import React, {Component} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Host_all from './Hostcontent/Host_all';
import { Link } from "react-router-dom";


export class Hostfirst extends Component {
    render() {
        return (
                <section className='hosting-section'>
                    <Container fluid>
                        <Row className='r-0'>
                            <Col className='col-lg-6 p-0'>
                                <Link to="/" className="navbar-brand"><img src="/images/favicon.png" alt="Logo" /></Link>
                                <div className='host-image'>
                                    <img src="images/image-1.jpg" className='image-host img-fluid' alt="host"/>
                                    {/* <div className='image-text'>
                                        {props.image_text}
                                    </div> */}
                                </div>
                            </Col>
                            <Col className='col-lg-6 p-0'>
                                <Host_all />
                            </Col>
                        </Row>
                    </Container>
                </section>
        )
    }
}

export default Hostfirst;
