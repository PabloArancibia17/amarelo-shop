﻿import React from "react";
import {useEffect, useState} from "react";



function ItemDetail({data, name, price, stock, description}) {   
    
    
    
    let initialItem = 1;
    let minItem = 0;
    let maxItem = {stock}.stock;
    
    const [contador, setContador] = useState(0);    

    useEffect(() =>{
        if (maxItem === 0){
            alert("Producto no disponible en este momento")
        }
    }, [])
    
    const addCount = () => {

        if (contador < maxItem) {
            setContador(contador + 1);
        }        
    };

    const lessCount = () => {

        if (contador > minItem) {
            setContador(contador - 1);
        }
    };
    
    
    
    return (
        <div>
            <div>
                <h5>{name}</h5>
                <p>{description}</p>
                <p>{price}</p>
            </div><br/>
           
            
            <h3>CART</h3>
            
            <p>Los productos disponibles de este producto son: {stock}</p>
             
            <div className="btn-group-vertical" role="group" aria-label="Basic example">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button className="btn btn-dark border border-light" onClick={lessCount}>-</button>
                    <button className="btn btn-light border border-light">
                        <div className="d-flex" style={{margin: 0}}>Has añadido&nbsp;<p
                            style={{color: "red", margin: 0}}> {contador} </p> &nbsp;productos al carrito
                        </div>
                    </button>
                    <button className="btn btn-dark" onClick={addCount}>+</button>
                </div>

                <button type="button" className="btn btn-dark border border-light"> Add to cart</button>
                
            </div><hr/>
        </div>
    );
    
}



export default ItemDetail;
