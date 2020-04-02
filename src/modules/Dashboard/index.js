import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../../component/NavBar";
import { getTabData,getActiveClassTabData } from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import EventDashboard from "../../component/EventDashboard";
import Survey from "../../component/Survey";
import { findValueWithIndex } from "../../constants/global_common_functions";
import TopContainer from "./TopContainer";
import ActiveClass from "./ActiveClass";

const Container = styled.div`
  background: #8080800f;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props.getTabData();
    this.props.getActiveClassTabData();
    this.state = {
      activeTabName: "",
      activeTabs:[],
      activeTabIndex: 0,
      progress: {
        progressPercentage: 60,
        strokeWidth: "10"
      }
    };
  }

  //----derived state-- for setting tabs data//

  static getDerivedStateFromProps(props, state){
    if(props.data.dashBoard.activeClassData.length > 0){
      const tabName = findValueWithIndex(
        props.data.dashBoard.activeClassData,
        state.activeTabIndex,
        "name"
      );
      console.log(tabName);
      return{ activeTabName: tabName, activeTabs:props.data.dashBoard.activeClassData};
    }

  }




  componentDidMount() {

    console.log(this.props,'........dashBoard');
  }

  selectedTab = (index, value) => {
    console.log(index, value, "........value");
    this.setState({ activeTabName: value.name, activeTabIndex: index });
  };

  render() {
    const {
      progress: { progressPercentage, strokeWidth },activeTabs,activeTabIndex,activeTabName
    } = this.state;
    return (
      <Container>
        <NavBar />
        <div style={{ padding: "5%" }}>
          <TopContainer progressPercentage={progressPercentage} strokeWidth={strokeWidth}/>
          <EventDashboard />
          <div className="mb-5">
            <Survey />
          </div>
          <div>
            <div className="row">
              <h5> Active Class</h5>
            </div>
            <div className="row">
            {this.state.activeTabs.length > 0 ?(  <ActiveClass tabs={activeTabs} activeTabName={activeTabName} activeTabIndex={activeTabIndex} selectedTab={this.selectedTab}/>):null}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    data:state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ getTabData,getActiveClassTabData }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
