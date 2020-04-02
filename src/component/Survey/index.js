import React, { Component } from 'react'
import './style.css';

export default class Survey extends Component {
    render() {
        return (
            <div className="card border-0 custom-card">
                <div className="row p-2 my-3">
                    <div className="col-3">
                    <img src={require('../../assets/Images/book.png')} width="150" height="120" />
                    </div>
                    <div className="col-9">
                        <div className="heading mb-3">Tell us which role would you like to take next.</div>
                        <div className="mb-3 sub-heading">We will unlock the next few roles which you like.</div>
                        <button className="btn btn-success rounded-pill btn-text px-4 py-2 ">Take A Survey</button>
                    </div>
                </div>
            </div>
        )
    }
}
