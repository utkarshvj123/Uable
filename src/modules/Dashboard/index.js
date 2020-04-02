import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../../component/NavBar";
import { getTabData, getActiveClassTabData } from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import EventDashboard from "../../component/EventDashboard";
import Survey from "../../component/Survey";
import { findValueWithIndex } from "../../constants/global_common_functions";
import TopContainer from "./TopContainer";
import ActiveClass from "./ActiveClass";
import RecentCards from "./RecentCards";

const Container = styled.div`
  background: #8080800f;
`;

const Recent = styled.div`
  margin-top: 40px;
  justify-content: end;
  display: flex;
`;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props.getTabData();
    this.props.getActiveClassTabData();
    this.state = {
      activeTabName: "",
      activeTabs: [],
      activeTabIndex: 0,
      progress: {
        progressPercentage: 60,
        strokeWidth: "10"
      },
      recent: [
        {
          heading: "History",
          subject: "Engineering",
          images: [
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
            "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
          ]
        },
        {
          heading: "Physics",
          subject: "Botany",
          images: [
            "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
            "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg",
            "https://cdn.pixabay.com/photo/2013/11/15/13/57/california-210913_960_720.jpg"
          ]
        },
        {
          heading: "Chemistry",
          subject: "Electronics",
          images: [
            "https://cdn.pixabay.com/photo/2013/11/15/13/57/california-210913_960_720.jpg"
          ]
        }
      ]
    };
  }

  colorToAdd = [
    { color: "#DBF3FA", background: "#89cff0" },
    { color: "#9ACD32", background: "#98FB98" },
    { color: "#fb5b78", background: "#ffd1dc" }
  ];

  //----derived state-- for setting tabs data//

  static getDerivedStateFromProps(props, state) {
    if (props.data.dashBoard.activeClassData.length > 0) {
      const tabName = findValueWithIndex(
        props.data.dashBoard.activeClassData,
        state.activeTabIndex,
        "name"
      );
      console.log(tabName);
      return {
        activeTabName: tabName,
        activeTabs: props.data.dashBoard.activeClassData
      };
    }
  }

  componentDidMount() {
    console.log(this.props, "........dashBoard");
    const newRecent = this.state.recent.map((object, indexRecent) => {
      this.colorToAdd.forEach((colors, index) => {
        if (indexRecent === index) {
          object["colors"] = colors.color;
          object["background"] = colors.background;
        }
      });
      return object;
    });
    console.log(newRecent, ".....new.....", this.state.recent);
    this.setState({ recent: newRecent });
  }

  selectedTab = (index, value) => {
    console.log(index, value, "........value");
    this.setState({ activeTabName: value.name, activeTabIndex: index });
  };

  render() {
    const {
      progress: { progressPercentage, strokeWidth },
      activeTabs,
      activeTabIndex,
      activeTabName
    } = this.state;
    return (
      <Container>
        <NavBar />
        <div style={{ padding: "5%" }}>
          <TopContainer
            progressPercentage={progressPercentage}
            strokeWidth={strokeWidth}
          />
          <EventDashboard />
          <div className="mb-5">
            <Survey />
          </div>
          <div>
            <div className="row">
              <h5> Active Class</h5>
            </div>
            <div className="row">
              {this.state.activeTabs.length > 0 ? (
                <ActiveClass
                  tabs={activeTabs}
                  activeTabName={activeTabName}
                  activeTabIndex={activeTabIndex}
                  selectedTab={this.selectedTab}
                />
              ) : null}
              <div>
                <Recent>
                  <h5>Recent Projects</h5>
                </Recent>
                <RecentCards recent={this.state.recent} />
              </div>
              <Recent>
                <a href="javascript:void(0)" className="text-success link-view">
                  View All
                </a>
              </Recent>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ getTabData, getActiveClassTabData }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
