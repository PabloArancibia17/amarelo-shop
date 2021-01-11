import React, {useContext, useEffect, useState} from "react";
import firebase from "firebase/app"
import "firebase/firestore"
import {Link} from "react-router-dom"
import {CartContext} from "../context/cartContext"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {getFirestore} from "../firebase";
import Form from "react-bootstrap/Form";


function Cart() {

    const [items] = useContext(CartContext)
    const [order, setOrder] = useState(false)
    const [orderId, setOrderId] = useState("")
    var totalPrice = 0;
    var dateOrder = new Date();
    var date = dateOrder.getDate() + "/" + (dateOrder.getMonth()+ 1) + "/" + dateOrder.getFullYear()
    const [inputName, setInputName] = useState("")
    const [inputMail, setInputMail] = useState("")
    const [inputCell, setInputCell] = useState("")



    for (var i = 0; i < items.length; i++) {
        totalPrice += items[i].price * items[i].counter;
        
    }    

    const addOrder = () => {
        const db = getFirestore();

        const orders = db.collection("orders")

        const newOrder = {            
            buyer: {
                name: {inputName},
                email: {inputMail},
                phone: {inputCell},                
            },
            itemsData:{items},
            total: {totalPrice},
            date: firebase.firestore.Timestamp.fromDate(new Date())
        };

        orders.add({newOrder}).then(({ id }) => {
            setOrderId(id);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setOrder(true)
        })
    };    

    if (items.length === 0) {
        return (
            <div className="page-container" style={{padding: "10px"}}>
                <div className="content-wrap">

                    <h1>No tienes artículos en el carro</h1>
                    <button><Link to={"/"}>Home</Link></button>
                </div>

            </div>

        )
    }


    if (order === false) {
        return (

            <div className="page-container">
                <Row>
                    <Col md={6} style={{boxShadow: "0 0 24px 0 yellow", padding: "25px"}}>
                        <div className="container">                            
                            <h3 style={{textDecorationLine: "underline"}}>ORDER: </h3>
                            {items.map(element =>

                                <div>
                                    <div style={{marginLeft: "20px"}}>
                                        <p>{element.counter} {element.name}</p>
                                        <p>$ {element.price}</p>
                                    </div>
                                    <hr/>
                                </div>
                            )}
                            <br/>
                        </div>
                    </Col>

                <Col md={6} style={{boxShadow: "0 0 24px 0 yellow", padding: "25px"}}>
                    <form className="col-md-10">
                        <div id="userData">
                            <div className="form-group row was-validated">
                                <label htmlFor="inputName"
                                       className="col-sm-2 col-form-label font-weight-bold">Name</label>
                                <div className="col-sm-10">
                                <textarea className="form-control is-invalid" id="inputName"
                                          placeholder="Inserte aquí su nombre" onChange={event => setInputName(event.target.value)} required>                                    
                                </textarea>
                                </div>
                            </div>
                            <div className="form-group row was-validated">
                                <label htmlFor="inputEmail"
                                       className="col-sm-2 col-form-label font-weight-bold">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control is-invalid" id="inputEmail" onChange={event => setInputMail(event.target.value)} checked
                                           required>

                                    </input>
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Ex: xxxxxxxx@gmail.com
                                    </Form.Text>
                                </div>
                            </div>
                            <div className="form-group row was-validated">
                                <label htmlFor="tel"
                                       className="col-sm-2 col-form-label font-weight-bold">Tel</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form" id="cellphone" onChange={event => setInputCell(event.target.value)}>
                                        
                                    </input>
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Please insert just numbers
                                    </Form.Text>
                                </div>
                            </div>
                        </div>
                    </form>
                </Col>
                </Row><br/><br/>

                <div className="d-flex justify-content-center">
                    <button onClick={addOrder}>Go to finish Order</button>
                </div>
            </div>
        )
    }
    
    return (
        <div>
            <Row>
            <Col md={4} style={{boxShadow: "0 0 24px 0 yellow", height: "80vh", padding: "25px"}}>
                <h2 style={{color: "yellow"}}>Gracias por tu compra, {inputName}!!!</h2>    
                <p>Your order ID is <p style={{fontWeight: "bold"}}>{orderId}</p></p><br/>
                <p>Order: </p>
                <ul>
                    {items.map(element => <li>
                        <p>Item: {element.counter} {element.name}</p>
                        <p>Price: {element.price}</p>
                    </li>)}
                </ul>
                <hr/>
                <p>Total = {totalPrice}</p>
                <hr/>
                <p className="d-flex justify-content-end">{date}</p>
            </Col>            
            </Row><br/>
        </div> 
    )
    
}

export default Cart;