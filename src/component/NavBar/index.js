import React, { Component } from "react";
import "./style.css";
import styled from "styled-components";
import TabHeaders from "../TabsHeaders";
import { findValueWithIndex } from "../../constants/global_common_functions";
import { getTabData } from "../../modules/Dashboard/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Container = styled.div`
  margin-left: 6%;
  margin-right: 6%;
  width: 100%;
`;
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [],
      activeTabName: "",
      activeTabIndex: 0
    };
  }

  settingValue() {
    const tabName = findValueWithIndex(
      this.props.navBarTabData,
      this.state.activeTabIndex,
      "name"
    );
    this.setState({ activeTabName: tabName });
  }

  async componentDidMount() {
    if (this.props.navBarTabData.length > 0) {
      await this.setState({ tab: this.props.navBarTabData });
      this.settingValue();
    }
  }

  selectedTab = (index, value) => {
    this.setState({ activeTabName: value.name, activeTabIndex: index });
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light">
          <Container>
            <div className="d-flex flex-row">
              <div style={{ marginTop: "21px" }}>Uable</div>
              <div>
                <TabHeaders
                  sectionTabs={this.state.tab}
                  mobileHeaderCss={{ fontWeight: 200 }}
                  mobileTabCss={{
                    cursor: "pointer",
                    textAlign: "center",
                    opacity: 1,
                    color: "black",
                    padding: "1.5rem 2rem 1rem",
                    fontWeight: "500",
                    textTransform: "capitalize",
                    height: "62px !important"
                  }}
                  tabCss={{
                    cursor: "pointer",
                    textAlign: "center",
                    opacity: 1,
                    color: "black",
                    padding: "1.5rem 2rem 1rem",
                    fontWeight: "500",
                    textTransform: "capitalize",
                    height: "62px !important"
                  }}
                  switchTab={this.selectedTab}
                  activeSection={
                    this.state.activeTabName ? this.state.activeTabName : ""
                  }
                />
              </div>
              <div
                className="d-flex justify-content-between flex-row"
                style={{ marginTop: "21px", width: "16%" }}
              >
                <div>
                  <span className="header_icon mr-4">
                    <i className="fa fa-cog" aria-hidden="true"></i>
                  </span>
                </div>
                <div>
                  <span className="header_icon mx-4">
                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                  </span>
                </div>
                <div>
                  <span className="header_icon mx-4">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </React.Fragment>
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

export default connect(mapStateToProps, null)(NavBar);


