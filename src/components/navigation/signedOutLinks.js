import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="menu">
            <li className="menu__item">
                <NavLink className="link link--light" to="/signUp">Sign Up</NavLink>
            </li>
            <li className="menu__item">
                <NavLink className="link link--light" to="/signIn">Log in</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLinks;