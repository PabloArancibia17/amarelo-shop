import Carousel from 'react-bootstrap/Carousel';
import barbijoPic1 from "../multimedia/yogaLogo.jpg"
import barbijoPic2 from "../multimedia/yoga1.jpg"
import barbijoPic3 from "../multimedia/yogaShirt.jpg"
import React from "react";

function PhotoCarousel() {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={barbijoPic1}
                        alt="First slide"
                        height={400}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={barbijoPic2}
                        alt="Third slide"
                        height={400}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={barbijoPic3}
                        alt="Third slide"
                        height={400}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel><br/>
        </div>       
    )
}

export default PhotoCarousel;