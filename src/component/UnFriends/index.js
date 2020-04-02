import React, { Component } from "react";
import "./style.css";


export default class UnFriends extends Component {

    render(){
        return (
            <div className="px-3">
            <h5>Uable Friends</h5>
            <div className="d-flex justify-content-start mb-3">
                <div><span className="header-icon mx-1"><i className="fa fa-user-o" aria-hidden="true"></i></span></div>
                <div><span className="header-icon mx-1"><i className="fa fa-user-o" aria-hidden="true"></i></span></div>
                <div><span className="header-icon mx-1"><i className="fa fa-user-o" aria-hidden="true"></i></span></div>
                <div><span className="header-icon mx-1"><i className="fa fa-user-o" aria-hidden="true"></i></span></div>
            </div>
            <div>
                <a className="text-success">See All</a>
            </div>
        </div>
        );
    }

}