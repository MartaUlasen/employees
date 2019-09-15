import React, {Component} from "react";
import Icon from '@material-ui/core/Icon';

export default class FieldMariedRender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maried: this.valueMaried()
        };
    }

    valueMaried() {
        const divStyle = {
            display:"flex", 
            alignItems: "center",
            justifyContent: "center",
        }
        if (this.props.value) {
            return <div style={divStyle}><Icon color="primary">check</Icon></div>
        }
        return null;
    }

    render() {
        return (
            this.state.maried
        );
    }
};