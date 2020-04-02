import React, { Component } from "react";
import "./style.css";


export default class UnCompanion extends Component {

    render(){
        return (
            <div className="px-3">
                <h5>Uable Companion</h5>
                <div className="content-uable">
                    <div><span className="header-icons mr-3"><i className="fa fa-user-o" aria-hidden="true"></i></span></div>
                    <div>
                        <div>Haseena Parekh</div>
                        <div><a className="text-success">Get in Touch</a></div>
                    </div>
                </div>
            </div>
        );
    }

}