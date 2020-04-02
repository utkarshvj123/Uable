import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../../component/NavBar";
import Progress from "./Progress";
import Welcome from "../../component/Welcome";
import UnFriends from "../../component/UnFriends";
import { getTabData } from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UnCompanion from "../../component/UnCompanion";
import EventDashboard from "../../component/EventDashboard";
import Survey from "../../component/Survey";
import TabHeaders from "../../component/TabsHeaders";
import { findValueWithIndex } from "../../constants/global_common_functions";

const Container = styled.div`
  background: #8080800f;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props.getTabData();
    this.state = {
      tabs: [
        {
          id: 1,
          name: "Foundation Program",
          value: [
            {
              heading: "History",
              title: "Session",
              completed: 1,
              remaining: 2
            },
            {
              heading: "Botany",
              title: "Session",
              completed: 2,
              remaining: 4
            },
            {
              heading: "Chemisty",
              title: "Session",
              completed: 1,
              remaining: 3
            }
          ]
        },
        {
          id: 2,
          name: "Advance Program",
          value: [
            {
              heading: "Physics",
              title: "Session",
              completed: 1,
              remaining: 2
            },
            {
              heading: "Maths",
              title: "Session",
              completed: 2,
              remaining: 4
            },
            {
              heading: "Chemisty",
              title: "Session",
              completed: 1,
              remaining: 3
            },
            {
              heading: "English",
              title: "Session",
              completed: 1,
              remaining: 3
            }
          ]
        }
      ],
      activeTabName: "",
      activeTabIndex: 0,
      progress: {
        progressPercentage: 60,
        strokeWidth: "10"
      }
    };
  }

  componentDidMount() {
    const tabName = findValueWithIndex(
      this.state.tabs,
      this.state.activeTabIndex,
      "name"
    );
    console.log(tabName);
    this.setState({ activeTabName: tabName });
  }

  selectedTab = (index, value) => {
    console.log(index, value, "........value");
    this.setState({ activeTabName: value.name, activeTabIndex: index });
  };

  render() {
    const {
      progress: { progressPercentage, strokeWidth }
    } = this.state;
    console.log(this.props);
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
              <UnFriends />
            </div>
            <div className="w-25">
              <UnCompanion />
            </div>
          </div>
          <EventDashboard />
          <div className="mb-5">
            <Survey />
          </div>
          <div>
            <div className="row">
              <h5> Active Class</h5>
            </div>
            <div className="row">
              <TabHeaders
                sectionTabs={this.state.tabs}
                mobileHeaderCss={{ fontWeight: 200 }}
                mobileTabCss={{
                  cursor: "pointer",
                  textAlign: "center",
                  opacity: 1,
                  color: "black",
                  padding: "1.5rem 2rem 1rem",
                  fontWeight: "500",
                  textTransform: "capitalize"
                }}
                tabCss={{
                  cursor: "pointer",
                  textAlign: "center",
                  opacity: 1,
                  color: "black",
                  padding: "1.5rem 2rem 1rem",
                  fontWeight: "500",
                  textTransform: "capitalize"
                }}
                switchTab={this.selectedTab}
                activeSection={
                  this.state.activeTabName ? this.state.activeTabName : ""
                }
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const {
    dashBoard: { navBarTabData }
  } = state;
  return {
    navBarTabData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ getTabData }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
