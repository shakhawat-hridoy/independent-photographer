import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import photographer1 from "../../../images/photographer1.jpg";
import photographer2 from "../../../images/photographer2.jpg";
import photographer3 from "../../../images/photographer3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img height={500} className="d-block w-100" src={photographer2} />
        <Carousel.Caption>
          <h1>Photographer</h1>
          <p>
            Your trustworthy partner.
            <span> Capture Your moments with us</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={500}
          className="d-block w-100"
          src={photographer3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>We don't just take a photograph</h1>
          <p>
            We simply make it. <span> Be with us</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={500}
          className="d-block w-100"
          src={photographer1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Photography is art of living in frames</h1>
          <p>Nothin can represent you better than a photo.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
