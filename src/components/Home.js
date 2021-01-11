import React from "react";
import './amarelo.css';
import imagePose from "../multimedia/IMG-20190621-WA0024.jpg"
import imageWelcome from "../multimedia/IMG-20190621-WA0058.jpg"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/cjs/Container";
import PhotoCarousel from "../components/PhotoCarousel";
import {BrowserRouter} from "react-router-dom";


const Home = () => {
    return (
        <div className="container">

            <PhotoCarousel/><hr/>
            
            <div >
                <Container>
                    <Row>
                        <Col sm={8} className="d-flex justify-content-left">
                            <img src={imagePose} alt="Home Picture" height={500} width={400}>

                            </img>
                        </Col>
                        <Col sm={4} height={500} className="d-flex align-items-center">
                            <h2 className="myHeader">
                                <p>Inspiración</p><br/>
                                <p>Colecciones</p>
                            </h2>
                        </Col>
                    </Row>
                </Container><br/><hr/>
                
                <h2 className="myHeader">
                    SOMOS AMARELLO...........................
                </h2><br/>

                <Container>
                    <Row>
                        <Col sm={4} height={500} className="d-flex align-items-center justify-content-end">
                            <h2 className="myHeader">
                                <p>Inspiración</p><br/>
                                <p>Colecciones</p>
                            </h2>
                        </Col>
                        
                        <Col sm={8} className="d-flex justify-content-end">
                            <img src={imageWelcome} alt="Home Picture" height={500} width={400}>

                            </img>
                        </Col>                        
                    </Row>
                </Container><hr/>                
                
            </div>

        </div>

    )
}

export default Home;