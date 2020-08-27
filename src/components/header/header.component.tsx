import React from 'react';
import { Link } from "react-router-dom";

import * as ROUTES from '../routes/routes.paths';

const Header = () => {

    return(
        <nav className="navbar navbar-expand-md sticky-top bg-primary navbar-dark pt-0 pb-0">
            <div className="align-bottom d-none d-md-block">
                <a className="navbar-brand" href={process.env.PUBLIC_URL + ROUTES.HOME}>Navbar</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarId" aria-controls="navbarId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse d-md-inline-flex" id="navbarId">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={process.env.PUBLIC_URL + ROUTES.HOME}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={process.env.PUBLIC_URL + ROUTES.CATEGORY}>Categories</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="#storeDropdown" data-toggle="dropdown" role="button">Shops</div>
                        <div className="dropdown-menu" aria-labelledby="storeDropdown">
                            <Link className="dropdown-item" to={process.env.PUBLIC_URL + ROUTES.SHOP + ROUTES.LIST}>Shops</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to={process.env.PUBLIC_URL + ROUTES.SHOP + ROUTES.CREATE}>Shops Form</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={process.env.PUBLIC_URL + ROUTES.SUBSCRIPTIONS}>Subscriptions</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={process.env.PUBLIC_URL + ROUTES.FEEDBACK}>Feedback</Link>
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse d-lg-inline-flex justify-content-end" id="navbarColor01">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to={process.env.PUBLIC_URL + ROUTES.SIGN_IN}>Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={process.env.PUBLIC_URL + ROUTES.SIGN_UP}>Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;

