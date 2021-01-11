import React, {useContext} from "react";
import {CartContext} from "../context/cartContext"



const BuyIcon = (props) => {

    const [, setItemContext] = useContext(CartContext)    

    function savedItemDetails(){
        
        if(props.counter !== 0) {
            setItemContext(newItem => [...newItem, props])            
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