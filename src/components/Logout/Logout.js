import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {logout} from "../../store/actions/auth";

class Logout extends Component {
    componentDidMount() {
        this.props.logout()
    }

    render() {
        return (
            <Redirect to='/auth'/>
        );
    }
}

export default withRouter(connect(null, {logout})(Logout));