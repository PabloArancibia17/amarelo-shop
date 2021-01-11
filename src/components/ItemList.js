import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {getFirestore} from "../firebase/index"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'




function ItemList() {
    
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([]);    
    const [pic, setPic] = useState(0)
    
    

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();        
        const itemCollection = db.collection("products")        
        itemCollection.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("No results!");
                }
                setItems(querySnapshot.docs.map((doc) => [{
                    id: doc.id,                    
                    ...doc.data()}]))                
            }).catch(error => {
            console.log("Error", error)
        }).finally(() =>
            setLoading(false));      
        
    }, []);    
       
    return (
        <div>
            {
                loading && <h1>Loading...</h1>
            }
            
            <div className="container d-flex collapse">
                {items.map(
                    element =>                         
                            <CardGroup id={element[0].id} key={element[0].id}>
                                <Card style={{background: "navajowhite"}}>
                                    <Card.Img variant="top" src={element[0].imageId} style={{height: "255px", width:"278px"}}/>
                                    <Card.Body>
                                        <Card.Title >
                                            <NavLink style={{color: "white"}}
                                                to={`/item/${element[0].id}`}>{element[0].name} 
                                            </NavLink>
                                        </Card.Title>
                                        <Card.Text>
                                            {element[0].description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        
                )
                }
            </div><br/>
        </div>
    )
}
export default ItemList