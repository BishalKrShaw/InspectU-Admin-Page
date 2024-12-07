import React from "react";
import "./AdminOverviewStats.css"

function AdminOverviewStats() {
  return (
    <div className="overview">
      <h1>Admin</h1>
      <div className="overview-stats">
        <div className="alert-count">
            <p>LIVE Alerts</p>
            <div>10</div>
        </div>
        <div className="user-count">
          <p>Employee count</p>
          <div>100</div>
        </div>
      </div>
    </div>
  );
}

export default AdminOverviewStats;
