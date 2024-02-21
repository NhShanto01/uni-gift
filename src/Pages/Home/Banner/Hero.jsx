import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import b1 from '../../../image/1708315877896.avif'
import b2 from '../../../image/Anniversary-banner_Desk_16jan.webp'
import b3 from '../../../image/1708489590652.avif'
import b4 from '../../../image/Home-&-Living_Desktop.jpg'

const Hero = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={b1} alt='' className='img-fluid' />
        {/* <Carousel.Caption className='text-dark'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={b2} alt='' className='img-fluid' />

      </Carousel.Item>
      <Carousel.Item>
        <img src={b3} alt='' className='img-fluid' />

      </Carousel.Item>
      <Carousel.Item>
        <img src={b4} alt='' className='img-fluid' />

      </Carousel.Item>
    </Carousel>
    );
};

export default Hero;