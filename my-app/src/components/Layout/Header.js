import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

function Header() {

    let navigate = useNavigate()

    const goToHome = () => {
        navigate("/")
    }


    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink to={'/'} className={(p) => { return p.isActive ? 'nav-link active' : 'nav-link' }}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={(p) => { return p.isActive ? 'nav-link active' : 'nav-link' }} to={'/about'}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={(p) => { return p.isActive ? 'nav-link active' : 'nav-link' }} to={'/company'}>Company</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={(p) => { return p.isActive ? 'nav-link active' : 'nav-link' }} to={'/contact'}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={(p) => { return p.isActive ? 'nav-link active' : 'nav-link' }} to={'/prob'}>Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary" onClick={goToHome}> Back </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



    )
};

export default Header;