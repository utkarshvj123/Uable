import React, { Component } from "react";
import "./style.css";
import { gettingDateOnDayFormats } from "../../constants/global_common_functions";

export default class Events extends Component {
  render() {
    return (
      <div className="p-5 content">
        <div>
          <button className="btn btn-sm btn-danger mb-3">Today</button>
        </div>
        <h4>
          {gettingDateOnDayFormats({
            weekday: "long",
            month: "long",
            day: "numeric"
          })}{" "}
          (01 Class)
        </h4>
        <div className="d-flex">
          <div className="pr-3 pt-4">
            <div>08:00 AM to 10:00 AM</div>
            <h6 className="mb-4">Environmental Science</h6>
            <div>
              <button className="btn btn-success link-btn px-4">
                Join Zoom Link
              </button>
            </div>
          </div>
          <div className="pl-3 pt-4">
            <div className="pl-3">Class teacher</div>
            <h6 className="pl-3 mb-4">Amit Verneker</h6>
            <div>
              <button className="btn btn-outline-success class-btn px-4">
                Go to classroom
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
