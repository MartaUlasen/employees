import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './signedInLinks.js';
import SignedOutLinks from './signedOutLinks.js';
import './style.scss';

const Navigation = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav className="">
            <div className="navigation container">
                <NavLink to="/employees" className="logo link">Employees</NavLink>
                {links}
            </div>
        </nav>

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(Navigation);