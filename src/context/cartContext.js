import React, {useContext, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {getFirestore} from "../firebase/index"
export const CartContext = React.createContext(0)

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);  


    return (
        <CartContext.Provider value={[items, setItems]}>
            {children}
        </CartContext.Provider>
    );
};

