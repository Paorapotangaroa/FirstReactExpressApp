import '../styles.css';
import React from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <Link to="/" className='navbar-brand'>Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/entertainers">Entertainers</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
