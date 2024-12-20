import React, { useEffect, useState } from "react";
import "./SingleEmployeeStats.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployeeDatas } from "../../slices/employeeSlice.js";

function SingleEmployeeStats() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeeDatas());

    // Fetch data after every 5 seconds
    const interval = setInterval(() => {
      dispatch(fetchEmployeeDatas());
    }, 10000);

    return () => clearInterval(interval); // Cleaning data

  }, [dispatch]);

  const employeeData = useSelector((state) => state.employee);

  if (employeeData.isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    
      employeeData.data.map((employee, index) => (
        <div className="employees-stats" key={employee.id}>
          <div className="number" style={{ width: "10%" }}>
            {index+1}
          </div>
          <div className="name" style={{ width: "30%" }}>
            {employee.fullname}
          </div>
          <div className="employee-id" style={{ width: "20%" }}>
            {employee.employeeID}
          </div>
          <div className="role" style={{ width: "20%" }}>
            {employee.role}
          </div>
          <div className="alert" style={{ width: "20%" }}>
            {employee.alertStatus === "Good" ? <span className="goodAlert">{employee.alertStatus}</span> : <span className="badAlert">{employee.alertStatus}</span>}
          </div>
        </div>
      ))
  );
}

export default SingleEmployeeStats;
