import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import { validationSchemaSignUp } from 'const/validationSchema';
import { connect } from 'react-redux';
import { signUp } from 'actions/authActions';

class SignUp extends Component {
    handleSubmit = (values) => {
        this.props.signUp(values);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) {
            return <Redirect to='/employees'/>
        }
        return (
            <div className="container">
                <Formik
                    initialValues={{ name: '', surname: '', email: '', password: ''}}
                    validationSchema={validationSchemaSignUp}
                    onSubmit={values => {
                        this.handleSubmit(values);
                        console.log(values)
                    }}
                >
                    {
                        () => (
                            <Form className="form-container">
                                <div className="input-field">
                                    <Field
                                        name="name"
                                        type="text"
                                        render={({ field: { name, value, onChange, onBlur } }) => (
                                            <div>
                                                <TextField
                                                    label="Name"
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
                                    <ErrorMessage component="div" name="name" className="error" />
                                </div>
                                <div className="input-field">
                                    <Field
                                        name="surname"
                                        type="text"
                                        render={({ field: { name, value, onChange, onBlur } }) => (
                                            <div>
                                                <TextField
                                                    label="Surname"
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
                                    <ErrorMessage component="div" name="surname" className="error" />
                                </div>
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
                                    <ErrorMessage component="div" name="email" className="error" />
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
                                <Button className="btn" variant="contained" type="submit">Sign Up</Button>
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
        auth: state.firebase.auth,
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => {dispatch(signUp(newUser))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);