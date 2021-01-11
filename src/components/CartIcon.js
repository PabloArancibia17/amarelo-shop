import React, {useContext} from "react";
import cartImg from "../multimedia/cartImg.png";
import {NavLink} from "react-router-dom";
import {CartContext} from "../context/cartContext"
import Badge from "react-bootstrap/Badge";


const CartIcon = () => {
    
    const [items] = useContext(CartContext)
    
    return (
        <div>

            <button className="d-flex">
                <NavLink to={`/cart`}>
                    <img alt="Cart Image" src={cartImg}/>
                    <Badge>{items.length}</Badge>
                </NavLink>
            </button>

        </div>
    )
}

export default CartIcon;