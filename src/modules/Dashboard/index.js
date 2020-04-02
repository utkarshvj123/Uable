import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../../component/NavBar";
import Progress from "./Progress";

const Container = styled.div`
  background: #8080800f;
  /* height: 100%; */
`;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: {
        progressPercentage: 60,
        strokeWidth: "10"
      }
    };
  }

  render() {
    const {
      progress: { progressPercentage, strokeWidth }
    } = this.state;

    return (
      <Container>
        <NavBar />
        <div style={{ padding: "5%" }}>
          <div className="d-flex pt-5">
            <div className="w-25">
              <Progress
                percentage={progressPercentage}
                strokeWidth={strokeWidth}
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
