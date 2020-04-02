import React, { Component } from "react";
import "./style.css";
import Events from "../Events";
import Calender from "../Calender";


export default class EventDashboard extends Component {

    render(){
        return (
          <div className="d-flex my-5 events">
            <div className="w-50 background">
            <Events/>
            </div>
            <div className="w-50">
            <Calender/>
            </div>
          </div>
        );
    }

}