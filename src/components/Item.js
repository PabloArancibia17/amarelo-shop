import React, { useEffect, useState } from 'react';
import {Redirect, Link, NavLink, useParams} from "react-router-dom";
import BuyIcon from "./BuyIcon";
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/cjs/Container";
import {getFirestore} from "../firebase/index"
import cartImg from "../multimedia/cartImg.png";


function Item() {  
    
    const {id} = useParams()    
    const [itemStock, setItemStock] = useState([]);

    const [contador, setContador] = useState(0);   
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false)
    const [goHome, setGoHome]  = useState(false);
    

    let minItem = 0;


    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const itemCollection = db.collection("products")
        const item = itemCollection.doc(id);


        item.get().then((doc) => {
            if (!doc.exists) {
                alert("Item doesn't exist! Please check your ID");
                setGoHome(true)
                return
            }
            console.log("Item found")
            setItem([{
                id: doc.id,
                ...doc.data()
            }

            ])
            setItemStock(doc.data().stock);

        }).catch(error => {
            console.log("Error", error)
        }).finally(() =>
            setLoading(false));

    }, [])

    
    //Setting counter
    const addCount = () => {

        if (contador < itemStock) {
            setContador(contador + 1);            
        }
    };

    const lessCount = () => {

        if (contador > minItem) {
            setContador(contador - 1);            
        }
    };

    //Stock unavailable
    if (itemStock === 0) {
        return (
            <div style={{height: "80vh"}} className="d-flex align-items-center justify-content-center">

                <Container>
                    <Row>
                        <h1>
                            Producto no disponible en este momento :(
                        </h1><br/><br/><br/>
                    </Row>
                    <Row>
                        <button style={{boxShadow: "0 0 24px 0 yellow"}}><Link to={"/"}>Home</Link></button>
                    </Row>
                </Container>
            </div>
        )
    }
    
    return (
        <div>
            {
                loading && <h1>Loading...</h1>
            }  
            
            {
                goHome && <Redirect to="/"/>
            }
            
            
            
            {
                !loading && 
                <div style={{height: "80vh"}}>
                    {item.map(element => 
                        <div className="container">
                            
                            <Container>
                                <Row>
                                    <Col md={7} className="align-items-center d-flex justify-content-center">
                                        <Card style={{width: '18rem'}}>

                                            <Card.Img variant="top" src={element.imageId}/>
                                            <Card.Body>
                                                <Card.Title>{element.name}</Card.Title>
                                                <Card.Text>
                                                    {element.description}
                                                </Card.Text>
                                                <h2 style={{color: "red"}}>${element.price}</h2>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={5} className="align-items-center d-flex row justify-content-center">
                                        
                                        <div className="btn-group-vertical d-flex align-items-center" role="group" aria-label="Basic example">
                                            <p style={{color: "red", fontStyle: "italic"}}>Solo hay {element.stock} productos disponibles</p>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button className="btn btn-dark border border-light"
                                                        onClick={lessCount}>-
                                                </button>
                                                <button className="btn btn-light border border-light">
                                                    <div className="d-flex" style={{margin: 0}}>Por añadir&nbsp;<p
                                                        style={{
                                                            color: "red",
                                                            margin: 0
                                                        }}> {contador} </p> &nbsp;productos al carrito
                                                    </div>
                                                </button>
                                                <button className="btn btn-dark" onClick={addCount}>+</button>
                                            </div>
                                            <div className="btn-group" role="group" aria-label="Basic example">

                                                {<BuyIcon id={element.id} counter={contador} name={element.name}
                                                          desc={element.description} price={element.price} size={item.length}/>}
                                            </div>
                                            <br/>
                                            <button className="d-flex align-items-center justify-content-center">
                                                <NavLink to={`/cart`}>
                                                    <h3>Go to cart!</h3>
                                                    <img alt="Cart Image" src={cartImg}/>
                                                </NavLink>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container><br/>

                            
                            
                        </div>
                    )}                    
                </div>                
            }           
        </div>
    );
}

export default Item;