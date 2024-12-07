import React, { useEffect, useState } from 'react'
import "./SingleEmployeeStats.css"
import axios from "axios"

function SingleEmployeeStats() {

  const [employeeData, setEmployeeData] = useState([]);

  const EMPLOYEE_API = "https://localhost:27017/employees";

  const fetchEmployeeData = async () => {
    try {
      const rawData = await axios.get(EMPLOYEE_API);
      setEmployeeData(rawData.data);
      console.log(rawData.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchEmployeeData();
  }, [])

  return (
    <div className="employees-stats">
        <div className="number" style={{width: "10%"}}>1</div>
        <div className="name" style={{width: "30%"}}>Bishal Kumar Shaw</div>
        <div className="employee-id" style={{width: "20%"}}>2721489</div>
        <div className="role" style={{width: "20%"}}>Full Stack Developer</div>
        <div className="alert" style={{width: "20%"}}>All good</div>
      </div>
  )
}

export default SingleEmployeeStats