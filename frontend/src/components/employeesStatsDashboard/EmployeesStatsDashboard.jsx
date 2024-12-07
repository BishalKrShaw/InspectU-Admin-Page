import React from 'react'
import "./EmployeesStatsDashboard.css"
import SingleEmployeeStats from '../singleEmployeeStats/SingleEmployeeStats'

function EmployeesStatsDashboard() {
  return (
    <div className='all-employees-container'>
      <div className="stats-headings">
        <div className="number" style={{width: "10%"}}>No.</div>
        <div className="name" style={{width: "30%"}}>Name</div>
        <div className="employee-id" style={{width: "20%"}}>Employee ID</div>
        <div className="role" style={{width: "20%"}}>Role</div>
        <div className="alert" style={{width: "20%"}}>Alert</div>
      </div>

      {/* All Employees Stats */}
      <SingleEmployeeStats/>
      <SingleEmployeeStats/>
      <SingleEmployeeStats/>
      <SingleEmployeeStats/>
      <SingleEmployeeStats/>

    </div>
  )
}

export default EmployeesStatsDashboard