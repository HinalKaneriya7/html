import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        margin:20,
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      margin:20,
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      margin:20,
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Card = (props) => (
    <div className="card">
      <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' } />
      <div className="card-content">
        <h5>{ props.title }</h5>
        <p><h3>{ props.content }</h3><span>/month</span></p>
        <button className='btn-black'><span>Book Now</span></button>
      </div>
    </div>
  );
  
//   const CardContainer = (props) => (
//       <>
//       {
//         props.cards.map((card) => (
//           <Card title={ card.title }
//             content={ card.content }
//             imgUrl={ card.imgUrl } />
//         ))
//       }
//       </>
//   );
  
function Slider() {
  
        // const cardsData = [
        //   {id: 1, title: 'CARD 1', content: 'Clark Kent', imgUrl: '/images/image-3.jpg'},
        //   {id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: '/images/image-2.jpg'},
        //   {id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: '/images/image-1.jpg'},
        //   {id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: '/images/image-3.jpg'},
        //   {id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: '/images/image-2.jpg'},
        //   {id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: '/images/image-1.jpg'},
        //   {id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl: '/images/image-3.jpg'},
        //   {id: 8, title: 'CARD 8', content: 'Steven Rogers', imgUrl: '/images/image-2.jpg'},
        //   {id: 9, title: 'CARD 9', content: 'Bruce Banner', imgUrl: '/images/image-1.jpg'},
        //   {id: 10, title: 'CARD 10', content: 'Vincent Strange', imgUrl: '/images/image-3.jpg'},
        // ]
        
        return(
            <section className='prop-slider'>
            <Container>
            <div className='d-flex justify-content-between align-items-center grid-title'>
                <div className='title'>
                  <h5>Recent</h5>
                <h2>Property</h2>
                </div>
                <div className='grid-btn'>
                <button className='btn-black'>
                    <span>view all</span>
                </button>
                </div>
            </div>
            </Container>
          <Container fluid>

            
            <Carousel responsive={responsive}>
                <Card title='31, Gedawang Permai St, Semarang' content='6000' imgUrl='/images/live-3.jpg' />
                <Card title='31, Gedawang Permai St, Semarang' content='5000' imgUrl='/images/live-1.jpg' />
                <Card title='31, Gedawang Permai St, Semarang' content='5000' imgUrl='/images/live-2.jpg' />
                <Card title='31, Gedawang Permai St, Semarang' content='5000' imgUrl='/images/live-4.jpg' />
                <Card title='31, Gedawang Permai St, Semarang' content='5000' imgUrl='/images/live-5.jpg' />
                <Card title='31, Gedawang Permai St, Semarang' content='5000' imgUrl='/images/live-6.jpg' />
                <Card title='31, Gedawang Permai St, Semarang' content='5000' imgUrl='/images/live-3.jpg' />
                <Card title='31, Gedawang Permai St, Semarang' content='5000' imgUrl='/images/live-1.jpg' />
            </Carousel>

            {/* <Carousel>
                    <CardContainer cards={ cardsData } />
            </Carousel> */}
            
          </Container>
          </section>
        );
    
}


export default Slider; 