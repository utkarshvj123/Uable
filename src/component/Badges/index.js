import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Badge = styled.span`
  display: inline-block;
  padding: 0.25em 0.4em;
  line-height: 1;
  text-align: center;
  vertical-align: baseline;
  color:${props=>props.color};
  background:${props=>props.background};
  ${props => props.styles}
`;

export default function Badges(props) {
  const { content, styleObj,background,color } = props;
  return (
    <div>
      <Badge styles={styleObj} background={background} color={color}>{content}</Badge>
    </div>
  );
}

Badges.defaultProps = {
  content: "No content",
  color: "#fff",
  background: "#007bff",
  styleObj: {
    "font-size": "75%",
    "font-weight": "700",
    "border-radius": "0.25rem"
  }
};
Badges.propTypes = {
  color:PropTypes.any,
  background:PropTypes.any,
  content: PropTypes.string,
  styleObj: PropTypes.object
};
