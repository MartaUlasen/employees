import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from 'components/privateRoute';
import Navigation from 'components/navigation';
import EmployeesList from 'components/employeesList';
import SignIn from 'components/auth/signIn';
import SignUp from 'components/auth/signUp';
import EmployeeCreator from 'components/employeeCreator';
import EmployeeUpdater from 'components/employeeUpdater';
import './style.css';

function App(props) {
    return (
        <div className="app">
            <Navigation />
            <Switch>
                <Route path='/signIn' component={SignIn} />
                <Route path='/signUp' component={SignUp} />
                <PrivateRoute exact path='/employees' component={EmployeesList} />
                <PrivateRoute path='/employees/create' component={EmployeeCreator} />
                <PrivateRoute path='/employees/update/:id' component={EmployeeUpdater} />
                <Redirect to='/employees' />
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(App);
