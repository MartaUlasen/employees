import React, { Component } from 'react';
import { compose } from 'redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchemaMain } from 'const/validationSchema';
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { createEmployee, updateEmployee } from 'actions/employeeActions';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

class EmployeeCreator extends Component {
    handleSubmit = (values) => {
        const { employee, employeeId, createEmployee, updateEmployee } = this.props;
        if (employee) {
            updateEmployee(values, employeeId);
        } else {
            createEmployee(values);
        }
        this.props.history.push('/');
    }
    checkAuth = () => {
        const { auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/signIn' />;
        }
        return <Redirect to='/employees/create' />;
    }
    render() {
        const { employee } = this.props;
        const initialValues = employee 
            ? {
                ...employee,
                dateOfEmployment: employee.dateOfEmployment.toDate(),
                birthday: employee.birthday.toDate(),
            } 
            : { 
                name: '', 
                surname: '',
                dateOfEmployment: null,
                salary: '',
                birthday: null,
                maried: false,
                profession: '',
                createdBy: '',
            };
        const btnTitle = employee ? 'Update employee' : 'Create employee';
        this.checkAuth();
        return (
            <div className="container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaMain}
                    onSubmit={values => {
                        this.handleSubmit(values);
                    }}
                >
                    {
                        ({ errors, touched, values }) => (
                            <Form className="form-container">
                                <div className="input-field">
                                    <Field
                                        name="name"
                                        type="text"
                                        render={({ field: { name, value, onChange}, form } ) => (
                                            <TextField
                                                id="standard-name"
                                                label="Name"
                                                value={value}
                                                name={name}
                                                onChange={onChange}
                                                margin="normal"
                                                className="input-field"
                                            />
                                        )}
                                    />
                                    <ErrorMessage component="div" name="name" className="error"/>
                                </div>
                                <div className="input-field">
                                    <Field
                                        name="surname"
                                        type="text"
                                        render={({ field: { name, value, onChange} } ) => (
                                            <div>
                                                <TextField
                                                    id="standard-name"
                                                    label="Surname"
                                                    value={value}
                                                    name={name}
                                                    onChange={onChange}
                                                    margin="normal"
                                                    className="input-field"
                                                />
                                            </div>
                                        )}
                                    />
                                    <ErrorMessage component="div" name="surname" className="error"/>
                                </div>
                                <div className="input-field">
                                    <Field
                                        name="dateOfEmployment"
                                        render={({ field: { name, value, onChange}, form } ) => (
                                            <MuiPickersUtilsProvider
                                                className="date-field" 
                                                utils={DateFnsUtils}
                                            >
                                                <KeyboardDatePicker
                                                    autoOk
                                                    variant="inline"
                                                    format="dd/MM/yyyy"
                                                    maxDate={new Date()}
                                                    margin="normal"
                                                    label="Date of employment"
                                                    initialFocusedDate={new Date()}
                                                    value={value}
                                                    onChange={(value) => {
                                                        form.setFieldValue(name, value);
                                                    }}
                                                    onBlur={() => {
                                                        form.setFieldTouched(name, true);
                                                    }}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    
                                                />
                                            </MuiPickersUtilsProvider>
                                        )}
                                    />
                                    <ErrorMessage component="div" name="dateOfEmployment" className="error" />
                                </div>
                                <div className="input-field">
                                    <Field
                                        name="salary"
                                        type="number"
                                        render={({ field: { name, value, onChange}, form } ) => (
                                            <TextField
                                                id="standard-name"
                                                type="number"
                                                label="Salary in dollars"
                                                value={value}
                                                name={name}
                                                onChange={onChange}
                                                margin="normal"
                                                className="input-field"
                                            />
                                        )}
                                    />
                                    <ErrorMessage component="div" name="salary" className="error"/>
                                </div>
                                <div className="input-field">
                                    <Field
                                        name="birthday"
                                        render={({ field: { name, value, onChange}, form } ) => (
                                            <MuiPickersUtilsProvider
                                                className="date-field" 
                                                utils={DateFnsUtils}
                                            >
                                                <KeyboardDatePicker
                                                    autoOk
                                                    variant="inline"
                                                    format="dd/MM/yyyy"
                                                    maxDate={new Date()}
                                                    margin="normal"
                                                    label="Birthday"
                                                    initialFocusedDate={new Date()}
                                                    value={value}
                                                    onChange={(value) => {
                                                        form.setFieldValue(name, value);
                                                    }}
                                                    onBlur={() => {
                                                        form.setFieldTouched(name, true);
                                                    }}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    
                                                />
                                            </MuiPickersUtilsProvider>
                                        )}
                                    />
                                    <ErrorMessage component="div" name="birthday" className="error" />
                                </div>
                                <div className="input-field">
                                    <Field 
                                        name="profession"
                                        render={({ field: { name, value, onChange} } ) => ( 
                                            <FormControl>
                                                <Select
                                                    onChange={onChange}
                                                    name={name}
                                                    value={value}
                                                    label="Profession"
                                                    displayEmpty
                                                    className="select-field"
                                                >
                                                    <MenuItem value="" disabled>
                                                        Select profession
                                                    </MenuItem>
                                                    <MenuItem value={"Accountant"}>Accountant</MenuItem>
                                                    <MenuItem value={"Director"}>Director</MenuItem>
                                                    <MenuItem value={"Manager"}>Manager</MenuItem>
                                                    <MenuItem value={"Programmer"}>Programmer</MenuItem>
                                                </Select>
                                            </FormControl>
                                        )}
                                    />
                                    <ErrorMessage component="div" name="profession" className="error" />
                                </div>
                                <div className="checkbox-field">
                                    <Field
                                        name="maried"
                                        checked={values.maried}
                                        render={({ field: { name, value, onChange} }) => (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        color="primary"
                                                    />
                                                }
                                                onChange={onChange} 
                                                checked={value}
                                                name={name}
                                                label="Maried"
                                            />
                                        )}
                                    />
                                </div>
                                <Button className="btn" variant="contained" type="submit">{btnTitle}</Button>
                            </Form>
                        )
                    }
                </Formik>
                        
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { employeeId } = props;
    const employees = state.firestore.data.employees;
    const employee = employees && employees[employeeId];
    return {
        auth: state.firebase.auth,
        employee: employee,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createEmployee: (employee) => dispatch(createEmployee(employee)),
        updateEmployee: (employee, id) => dispatch(updateEmployee(employee, id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'employees' }
    ]))(withRouter(EmployeeCreator));