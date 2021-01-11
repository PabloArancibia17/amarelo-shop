import React, {useContext, useEffect, useState} from "react";
import {CartContext, CartProvider} from "../context/cartContext"
import Cart from "../components/Cart"


const BuyIcon = (props) => {

    const [, setItemContext] = useContext(CartContext)    

    function savedItemDetails(){
        
        if(props.counter !== 0) {
            setItemContext(newItem => [...newItem, props])
            console.log(props)
        }
    }
    
    
    return (

        <CartContext.Provider value={[0]}>
            <button type="button" className="btn btn-light border border-dark" onClick={savedItemDetails}>
                <h4 className="d-flex justify-content-center" style={{margin: 0, color: "red"}}>
                    Añadir
                </h4>                
            </button>
        </CartContext.Provider>
    )
}

export default BuyIcon