import React from "react";
import "./AdminStatDashboard.css";
import EmployeesStatsDashboard from "../employeesStatsDashboard/EmployeesStatsDashboard";

function AdminStatDashboard() {
  return (
    <div className="adminStatDashboard">
      <div className="search-bar">
        <span className="material-symbols-outlined" style={{fontSize: "16px"}}>search</span>
        <input type="search" name="" id="" placeholder="Search" />
      </div>

      {/* Employees Stats Dashboard */}
      <EmployeesStatsDashboard/>

    </div>
  );
}

export default AdminStatDashboard;
