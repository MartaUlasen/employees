import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from 'actions/authActions';

const SignedInLinks = (props) => {
    const { profile } = props;
    
    return (
        <ul className="menu">
            <li className="menu__item">
                <NavLink to="/employees/create" className="link link--light">Create employee</NavLink>
            </li>
            <li className="menu__item">
                <NavLink onClick={props.signOut} to='/employees' className="link link--light">Log out</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to='/employees' className="link user-initials">{profile.initials}</NavLink>
            </li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);