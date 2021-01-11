﻿import React from 'react';
import ItemDetail from "./ItemDetail"
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom"


const ItemDetailContainer = ({data}) => {

    const itemList = [
        {
            id: 1,
            name: "Barbijo",
            price: 150,
            stock: 5,
            description: "Tapabocas protector hecho de lana"
        },
        {
            id: 2,
            name: "Buff",
            price: 200,
            stock: 3,
            description: "Tapabocas protector hecho de nylon. Especial para hacer deporte"
        },
        {
            id: 3,
            name: "Protector de bolsitas",
            price: 350,
            stock: 7,
            description: "Cobertor de bolsitas para dormir hecho de lana"
        },
    ];
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        const getItem = new Promise((res, rej) => {            
            res(itemList)         
            
                       
            setTimeout(() => {
                
                getItem.then((resultItemData) => {                   
                    return resultItemData
                }).then((resultItemData) => {
                    setItems(resultItemData)                    
                })                
            }, 3000)
            
        })
    }, [])
    
    
    
    
    return(
        <div>
        <ul>
            {
                items.map((item) => (
                    <ItemDetail id= {item.id} name={item.name} price={item.price} description={item.description} stock={item.stock}>
                        <NavLink to="/ItemDetail/$(item.id)">
                            {item.name}
                        </NavLink>
                    </ItemDetail>)
                )
                
            }            
        </ul>
        
        </div>
    )


}

export default ItemDetailContainer;