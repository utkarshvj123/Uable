import React, { Component } from "react";
import "./style.css";


export default class Events extends Component {

    render(){
        return (
            <div class="p-5 content">
                <div><button class="btn btn-sm btn-danger mb-3">Today</button></div>
                <h4>Sat, 23rd Feb (01 Class)</h4>
                <div class="d-flex">
                    <div class="pr-3 pt-4">
                        <div>08:00 AM to 10:00 AM</div>
                        <h6 class="mb-4">Environmental Science</h6>
                        <div>
                            <button class="btn btn-success link-btn px-4">Join Zoom Link</button>
                        </div>
                    </div>
                    <div class="pl-3 pt-4">
                        <div class="pl-3">Class teacher</div>
                        <h6 class="pl-3 mb-4">Amit Verneker</h6>
                        <div>
                            <button class="btn btn-outline-success class-btn px-4">Go to classroom</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}