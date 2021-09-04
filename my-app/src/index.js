import React from "react";
import ReactDom from "react-dom";

import "./index.css";
import Iframe from "react-iframe";

function Dashboard() {
  return (
    <Iframe
      url="http://localhost:8088/r/5"
      width="800px"
      height="800px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
    />
  );
}
function DashboardList() {
  return (
    <section className="dashboardList">
      <Dashboard />
    </section>
  );
}

ReactDom.render(<DashboardList />, document.getElementById("root"));
