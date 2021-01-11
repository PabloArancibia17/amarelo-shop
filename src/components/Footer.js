import React from "react"
import './amarelo.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ig from "../multimedia/ig.png"
import Face from "../multimedia/facebook.png"
import Tw from "../multimedia/tw.png"


function Footer(){
    
    return(
        <div className="footer container-fluid">
            
                <Row>
                    <Col sm={10} className="d-flex flex-column align-items-start">
                        <p>amarelo.ok@gmail.com</p><br/>
                        <p>Adolfo Calle 2770. Mendoza. Argentina</p><br/>
                        <p>+54 261-5458448 </p>
                    </Col>
                    
                    <Col sm={2} className="d-flex align-items-center justify-content-around">
                        <img src={Ig} alt="ig" style={{height: "40px", width:"40px"}}>                            
                        </img>
                        <img src={Face} alt="ig" style={{height: "40px", width:"40px"}}>
                        </img>
                        <img src={Tw} alt="ig" style={{height: "40px", width:"40px"}}>
                        </img>                        
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center" style={{fontStyle: "italic"}}>
                    <p>Amarelo®</p>
                </Row>
            
        </div>
    )
}

export default Footer;