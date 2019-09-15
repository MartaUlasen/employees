import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import { validationSchemaSignIn } from 'const/validationSchema';
import { connect } from 'react-redux';
import { signIn } from 'actions/authActions';
import 'form.scss';

class SignIn extends Component {
    handleSubmit = (values) => {
        this.props.signIn(values);
    }
    
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) {
            return <Redirect to='/employees'/>
        }
        return (
            <div className="container">
                <Formik
                    initialValues={{ email: '', password: ''}}
                    validationSchema={validationSchemaSignIn}
                    onSubmit={values => {
                        this.handleSubmit(values);
                    }}
                >
                    {
                        ({ errors, touched, values }) => (
                            <Form className="form-container">
                                <div className="input-field">
                                    <Field
                                        name="email"
                                        type="text"
                                        render={({ field: { name, value, onChange, onBlur } }) => (
                                            <div>
                                                <TextField
                                                    label="Email"
                                                    value={value}
                                                    name={name}
                                                    onChange={onChange}
                                                    onBlur={onBlur}
                                                    margin="normal"
                                                    className="input-field"
                                                />
                                            </div>
                                        )}
                                    />
                                    <ErrorMessage component="div" name="email" className="error"color="red" />
                                </div>
                                <div className="input-field">
                                    <Field
                                        name="password"
                                        type="password"
                                        render={({ field: { name, value, onChange, onBlur } }) => (
                                            <div>
                                                <TextField
                                                    type="password"
                                                    label="Password"
                                                    value={value}
                                                    name={name}
                                                    onChange={onChange}
                                                    onBlur={onBlur}
                                                    margin="normal"
                                                    className="input-field"
                                                />
                                            </div>
                                        )}
                                    />
                                    <ErrorMessage component="div" name="password" className="error" />
                                </div>
                                <div className="input-field">
                                    <Button className="btn" variant="contained" type="submit">Log In</Button>
                                    <div>{authError ? <p>{authError}</p> : null}</div>
                                </div>
                            </Form>
                        )
                    }
                </Formik>                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
