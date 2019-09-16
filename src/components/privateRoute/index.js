import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth,  ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if(!auth.uid) {
                    return <Redirect to='/signIn' />
                } else {
                    return <Component {...props} />
                }
            }}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(PrivateRoute);