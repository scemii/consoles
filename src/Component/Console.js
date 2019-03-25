import React from 'react';
import { withRouter } from "react-router-dom";
import ConsoleList from "./ConsoleList";
import ConsoleDetail from "./ConsoleDetail";

const ConsoleIndex = props => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm">
            <ConsoleList console={props.match.params.console}/>
            </div>
            <div className="col-sm">
            <ConsoleDetail console={props.match.params.console} />
            </div>
        </div>
        </div>
    );
}

export default withRouter(ConsoleIndex);


