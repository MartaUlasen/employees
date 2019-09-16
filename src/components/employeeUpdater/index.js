import React from "react";
import { connect } from 'react-redux';
import EmployeeCreator from 'components/employeeCreator';

const EmployeeUpdater = function(props) {
    const { employeeId } = props;
    return <EmployeeCreator employeeId={employeeId}/>;
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    const id = ownProps.match.params.id;
    return {
        employeeId: id,
    }
}

export default connect(mapStateToProps)(EmployeeUpdater);
