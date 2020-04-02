import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../../component/NavBar";

const Container = styled.div`
  background: #8080800f;
  /* height: 100%; */
`;

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <NavBar />
      </Container>
    );
  }
}
