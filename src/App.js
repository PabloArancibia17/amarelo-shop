import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import Cart from "./components/Cart";
import {CartProvider} from "./context/cartContext";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";


function App() {


    return (
        <div className="page-container container-fluid" style={{padding: 0}}>
            <div className="content-wrap">
                <CartProvider className="container">
                    <BrowserRouter>

                        <NavBar/>
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                                <ItemList/>
                            </Route>
                            <Route path="/list">
                                <ItemList/>
                            </Route>
                            <Route path="/item/:id">
                                <Item/>
                            </Route>
                            <Route path="/category/:id">
                                <Catalog/>
                            </Route>
                            <Route path="/cart/">
                                <Cart/>
                            </Route>
                        </Switch>

                    </BrowserRouter>
                </CartProvider>

                <Footer/>
            </div>
        </div>
    );
}
export default App


