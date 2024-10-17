
import { Routes, Route } from "react-router-dom";


import './scss/app.scss'
import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./utils/ROUTES";
import SinglePizza from "./components/Pizza/SinglePizza";
import MainOutlet from "./outlets/MainOutlet";


function App() {
    return (

        <Routes>
            <Route path='' element={<MainOutlet />}>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.CART} element={<Cart />} />
                <Route path={ROUTES.SINGLE_PRODUCT} element={<SinglePizza />} />
                <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
