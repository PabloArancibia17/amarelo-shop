import React, { useEffect, useState } from "react";
import { NavLink, useParams} from "react-router-dom";
import {getFirestore} from "../firebase/index"
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import PhotoCarousel from "./PhotoCarousel";


function Catalog() {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([]);
    const {id} = useParams()
    

    //Getting data from firebase
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("products")       
        const someCategories = itemCollection.where("categoryId", "==", id)
        someCategories.get()
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

            <PhotoCarousel/><hr/>
            
            <div className="container d-flex justify-content-center" style={{width: "500px"}}>               
                
                {items.map(
                    element =>
                        <CardGroup id={element[0].id} key={element[0].id}>
                            <Card style={{background: "navajowhite"}}>
                                <Card.Img variant="top" src={element[0].imageId} style={{height: "500px", width:"500px"}}/>
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
export default Catalog