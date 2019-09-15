import React, {Component} from "react";
import Icon from '@material-ui/core/Icon';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { removeEmployee } from 'actions/employeeActions'; 
import './style.scss';

class FieldToolsRender extends Component {
    handleClear = () => {
        const { data: { id } } = this.props;
        this.props.removeEmployee(id);
    }

    render() {
        const { data } = this.props;

        return (
            <div className="table-tools">
                <NavLink 
                    to={'/employees/update/' + data.id}
                    className="link table-tools__item table-tools__link" >
                    <div className="table-tools__item">
                        <Icon color="primary" className="icon">edit</Icon>
                        EDIT
                    </div>
                </NavLink>
                <Button 
                    color="primary" 
                    size="small"
                    onClick={this.handleClear}
                    className="table-tools__item"
                >
                    <Icon color="primary" className="icon">clear</Icon>
                    Remove
                </Button>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeEmployee: (id) => dispatch(removeEmployee(id))
    }
}

export default connect(
    null,
    mapDispatchToProps,
    null,
    { forwardRef: true },
)(FieldToolsRender);
