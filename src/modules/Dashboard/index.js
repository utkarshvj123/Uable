import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../../component/NavBar";
import Progress from "./Progress";
import Welcome from "../../component/Welcome";
import UnFriends from "../../component/UnFriends";
import { getTabData } from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Container = styled.div`
  background: #8080800f;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: {
        progressPercentage: 60,
        strokeWidth: "10"
      }
    };
  }



  componentDidMount(){
    this.props.getTabData();
  }

  render() {
    const {
      progress: { progressPercentage, strokeWidth }
    } = this.state;
console.log(this.props)
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


function mapStateToProps(state) {
  const {
    dashBoard: { tabData }
  } = state;
  return {
    tabData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ getTabData }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
