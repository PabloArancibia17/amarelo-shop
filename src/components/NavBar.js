import React, {useEffect, useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from 'react-bootstrap/Dropdown';
import './amarelo.css';
import CartIcon from "../components/CartIcon";
import {getFirestore} from "../firebase";
import {NavLink} from "react-router-dom";



const NavBar = () => {

    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([]);
    var oldId = null;
    //refreshPage()

    

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("categories")
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

    function refreshPage() {        
            window.location.reload(false);       
    }

    return (
        <div className="myNav">
            
                    <Navbar bg="variant" expand="lg">
                <Navbar.Brand href="#home">
                    <NavLink style={{color: "black"}}
                             to={`/`}>Amarelo Shop
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto container d-flex justify-content-center">
                        <Nav.Link style={{color: "yellow"}}>
                            <Dropdown >
                                <Dropdown.Toggle className="dropdown">
                                    Categories
                                </Dropdown.Toggle>
                                
                                <Dropdown.Menu>
                                    {items.map(
                                        element =>
                                    <Dropdown.Item>
                                        <NavLink style={{color: "black"}}
                                                 to={`/category/${element[0].id}`}>{element[0].name}
                                        </NavLink>
                                    </Dropdown.Item>
                                    )
                                    }
                                </Dropdown.Menu>
                                
                            </Dropdown>                            
                        </Nav.Link>
                        <Nav.Link href="#aboutUs" className="dropdownItem">About Us</Nav.Link>
                        <Nav.Link href="#contact" className="dropdownItem">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <CartIcon/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                
        </div>
        
    )
}

export default NavBar;