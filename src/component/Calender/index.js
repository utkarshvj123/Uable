//based on https://www.codementor.io/reactjs/tutorial/building-a-calendar-using-react-js--less-css-and-font-awesome

import React, { Component } from "react";
import "./style.scss";
import moment from "moment";
import DayNames from "./DayNames";
import Weeks from "./Weeks";

export default class Calender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment(),
      selected: moment().startOf("day")
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    const { month } = this.state;

    this.setState({
      month: month.subtract(1, "month")
    });
  }

  next() {
    const { month } = this.state;

    this.setState({
      month: month.add(1, "month")
    });
  }

  select(day) {
    this.setState({
      selected: day.date,
      month: day.date.clone()
    });
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month
      .clone()
      .startOf("month")
      .add("w" - 1)
      .day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const { selected, month } = this.state;

    while (!done) {
      weeks.push(
        <Weeks
          key={date}
          date={date.clone()}
          month={month}
          select={day => this.select(day)}
          selected={selected}
        />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    const { month } = this.state;

    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }

  render() {
    return (
      <div>
        {" "}
        <section className="calendar px-5">
          <header className="header">
            <div className="month-display row">
                <div>
                {this.renderMonthLabel()}
                </div>
              <div>
              <span onClick={this.previous} >&#60; </span>
              <span onClick={this.next}>&#62;</span>
              </div>
            </div>
            <DayNames />
          </header>
          {this.renderWeeks()}
        </section>
      </div>
    );
  }
}





