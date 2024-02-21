import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import c1 from '../../../image/category/flowers.avif'
import c2 from '../../../image/category/cake.webp'
import c3 from '../../../image/category/chocolates.webp'
import c4 from '../../../image/category/plants.avif'
import c5 from '../../../image/category/New-Squircle-Icon_Anniversary.webp'
import c6 from '../../../image/category/New-Squircle-Icon_wedding21224.webp'
// import c7 from '../../../image/category/images.jpg'
// import c8 from '../../../image/category/il_300x300.5128744092_qo0o.avif'
// import c9 from '../../../image/category/download.jpg'
// import c10 from '../../../image/category/images (2).jpg'

const Banner = () => {
  return (
    <div>
      <Container className='my-5'>
        <Row>
          <Col xs={6} md={4} lg={2}>
            <Image src={c1} roundedCircle />
            <p className='text-center fw-bold'>Flowers</p>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Image src={c2} roundedCircle />
            <p className='text-center fw-bold'>Cakes</p>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Image src={c3} roundedCircle />
            <p className='text-center fw-bold'>Chocolates</p>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Image src={c4} roundedCircle />
            <p className='text-center fw-bold'>Plants</p>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Image src={c5} roundedCircle style={{ height: '210px' }} />
            <p className='text-center fw-bold'>Annivarsery</p>
          </Col>
          <Col xs={6} md={4} lg={2}>
            <Image src={c6} roundedCircle style={{ height: '210px' }} />
            <p className='text-center fw-bold'>Wedding</p>
          </Col>

          {/* <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Banner;