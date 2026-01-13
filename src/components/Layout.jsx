import React from 'react';
import {Link, Outlet} from "react-router-dom";
import viteLogo from "../assets/vite.svg";

const Layout = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8 text-center">
                    <nav className = "mt-2">
                        <Link to="/">Home</Link> |{" "}
                        <Link to="/categories">Categories</Link> |{" "}
                        <Link to="/about">About</Link>
                    </nav>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className=" col-8 text-center pt-4">
                    <img src={viteLogo} className="logo" alt="Vite Logo"/>
                    <h1 className ="fw-bold">Expense Manager</h1>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;