import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { AgGridReact } from 'ag-grid-react';
import columnDefs from 'const/columnDefs';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './style.scss';

class EmployeesList extends Component {
    render() {
        const { employees } = this.props;
        return (
            <div className="employees container">
                <div
                    className="ag-theme-balham"
                    style={{ width: '100%', height: '100px'}}
                >
                    <AgGridReact
                        reactNext
                        onGridReady={(params) => {
                            params.api.sizeColumnsToFit();
                            params.api.setGridAutoHeight(' ');
                        }}
                        columnDefs={columnDefs}
                        rowData={employees}
                    >
                    </AgGridReact>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        employees: state.firestore.ordered.employees,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'employees' }
    ])
)(EmployeesList);
