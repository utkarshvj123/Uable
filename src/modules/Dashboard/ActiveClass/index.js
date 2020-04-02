import React from "react";
import TabsCard from "../../../component/TabsCard";
import TabHeaders from "../../../component/TabsHeaders";
import PropTypes from "prop-types";

export default function ActiveClass(props) {
  const { tabs, activeTabName, activeTabIndex, selectedTab } = props;

  return (
    <React.Fragment>
      <TabHeaders
        sectionTabs={tabs}
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
        switchTab={selectedTab}
        activeSection={activeTabName ? activeTabName : ""}
      />
      <TabsCard selected={tabs[activeTabIndex].value} />
    </React.Fragment>
  );
}

ActiveClass.defaultProps = {
  tabs: [],
  activeTabName: "",
  activeTabIndex: 0,
  selectedTab: ()=>{}
};
ActiveClass.propTypes = {
  tabs: [],
  activeTabName: PropTypes.string,
  activeTabIndex: PropTypes.number,
  selectedTab: PropTypes.func
};
