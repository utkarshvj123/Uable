import React, { Component } from "react";
import "./style.css";
import styled from "styled-components";
import TabHeaders from "../TabsHeaders";
import { findValueWithIndex } from "../../constants/global_common_functions";

const Container = styled.div`
  margin-left: 6%;
  margin-right: 6%;
  width: 100%;
`;

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 1,
          name: "Clasroom"
        },
        {
          id: 2,
          name: "Profile"
        },
        {
          id: 3,
          name: "Portfolio"
        }
      ],
      activeTabName: "",
      activeTabIndex: 0
    };
  }

  componentDidMount() {
    const tabName = findValueWithIndex(
      this.state.tabs,
      this.state.activeTabIndex,
      "name"
    );
    this.setState({ activeTabName: tabName });
  }

  selectedTab = (index, value) => {
    console.log(index, value, "........value");
    this.setState({ activeTabName: value.name, activeTabIndex: index });
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light">
          <Container>
            <div className="d-flex flex-row">
              <div
                style={{marginTop: "21px"
                }}
              >
                Uable
              </div>
              <div>
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
              <div className="d-flex justify-content-between flex-row"
                style={{marginTop: "21px",width: "16%"
                }}
              >
                <div><span className="header_icon mr-4"><i className="fa fa-cog" aria-hidden="true"></i></span></div>
                <div><span className="header_icon mx-4"><i className="fa fa-bell-o" aria-hidden="true"></i></span></div>
                <div><span className="header_icon mx-4"><i className="fa fa-user-o" aria-hidden="true"></i></span></div>
              </div>
            </div>
          </Container>
        </nav>
      </React.Fragment>
    );
  }
}
