import React, { Component } from "react";
import "./style.css";


export default class Welcome extends Component {

    render(){
        return (
          <div className="px-3">
            <div>Welcome Back</div>
            <div className="student-name">Kalesh Babu</div>
            <div className="learning-details">
                You've learned <strong className="text-warning">60%</strong> of your work keep it up and improve your results
            </div>
            <div>
                <a className="text-success">Complete Profile <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
          </div>
        );
    }

}