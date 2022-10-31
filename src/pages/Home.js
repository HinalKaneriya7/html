import React from 'react';
import Banner from '../components/Banner';
import Grid from '../components/Grid';
import Aboutus from '../components/Aboutus';
import Slider from '../components/Slider';
import Testimonial from '../components/Teastimonial';
import { Breadcrumb } from 'react-bootstrap';


function Home() {
    return (
      <>
        <Banner />
        <Breadcrumb />
        <Grid />
        <Aboutus />
        <Slider />
        <Testimonial />
        
      </>
    );
  }


export default Home;