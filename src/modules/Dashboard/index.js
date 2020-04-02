import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../../component/NavBar";
import Progress from "./Progress";
import Welcome from "../../component/Welcome";
import UnFriends from "../../component/UnFriends";

const Container = styled.div`
  background: #8080800f;
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
            <div className="w-25">
              <Welcome />
            </div>
            <div className="w-25">
              <UnFriends/>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
