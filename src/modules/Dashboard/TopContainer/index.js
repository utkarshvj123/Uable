import React from "react";
import Progress from "../Progress";
import Welcome from "../../../component/Welcome";
import UnFriends from "../../../component/UnFriends";
import UnCompanion from "../../../component/UnCompanion";
import PropTypes from 'prop-types';


export default function TopContainer(props) {
  const { progressPercentage, strokeWidth } = props;
  return (
    <div>
      <div className="d-flex pt-5">
        <div className="w-25">
          <Progress percentage={progressPercentage} strokeWidth={strokeWidth} />
        </div>
        <div className="w-25">
          <Welcome />
        </div>
        <div className="w-25">
          <UnFriends />
        </div>
        <div className="w-25">
          <UnCompanion />
        </div>
      </div>
    </div>
  );
}

TopContainer.defaultProps = {
    progressPercentage:60,
    strokeWidth:'10'

};
TopContainer.propTypes = {
    strokeWidth: PropTypes.string,
    progressPercentage:PropTypes.number
};
