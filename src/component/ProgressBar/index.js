import React, { Component } from "react";
import "./style.css";
import PropTypes from 'prop-types';


export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    console.log(this.props,"........props at ")
    const {  strokeWidth } = this.props;
    const sqSize = this.props.sqSize;

    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;


    return (
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle 
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className="circle-progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
        />
        <image
          x="15%"
          style={{ width: "138px" }}
          y="15%"
          href="https://cdn.pixabay.com/photo/2017/01/31/14/51/amigos-2024747_960_720.png"
        />
      </svg>
    );
  }
}
ProgressBar.defaultProps = {
  sqSize: "0",
  strokeWidth:"10",
  percentage:19,
  
};
ProgressBar.propTypes = {
  percentage: PropTypes.number,
  strokeWidth:PropTypes.string,
  sqSize:PropTypes.string
};
