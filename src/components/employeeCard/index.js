import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class EmployeeCard extends Component {
    render() {
        const employee = this.props;
        return (
            <NavLink className="link" to={'/employee/' + employee.id}>
                <div className="card">
                    <div>{employee.name}</div>
                    <div>{employee.surname}</div>
                    <div>{employee.birthday}</div>
                    <div>{employee.maried}</div>
                </div>

            </NavLink>
        )
    }
    
}

export default EmployeeCard;