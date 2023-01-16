import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Company from "../Pages/Company";
import Contact from "../Pages/Contact";
import ProductList from "../Pages/product-list";
import ProductDetail from "../Pages/ProductDetail";
import ErrorPage from "../Pages/ErrorPage";


function Routing() {
    return (
        <React.Fragment>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/company" element={<Company />} />
                <Route path="/prob" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>

        </React.Fragment>
    )
};

export default Routing;