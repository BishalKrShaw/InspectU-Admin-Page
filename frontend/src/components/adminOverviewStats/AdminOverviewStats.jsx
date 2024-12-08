import React from "react";
import "./AdminOverviewStats.css"
import { useSelector } from "react-redux";

function AdminOverviewStats() {

  const employeeCount = useSelector(state => state.employee);
  const alertCount = employeeCount.data.filter(alert => alert.alertStatus === "Bad");

  return (
    <div className="overview">
      <h1>Admin</h1>
      <div className="overview-stats">
        <div className="alert-count">
            <p>LIVE Alerts</p>
            <div>{alertCount.length}</div>
        </div>
        <div className="user-count">
          <p>Employee count</p>
          <div>{employeeCount.data.length}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminOverviewStats;
