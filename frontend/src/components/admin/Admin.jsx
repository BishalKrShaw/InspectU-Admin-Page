import React from 'react'
import "./Admin.css"
import AdminNavbar from '../adminNavbar/adminNavbar'
import AdminOverviewStats from '../adminOverviewStats/adminOverviewStats'
import AdminStatDashboard from '../adminStatDashboard/AdminStatDashboard'

function Admin() {
  return (
    <div className='main-container'>

      <div className="container">

        {/* Admin Navbar */}
        <AdminNavbar/>
        {/* Adim Heading & Overview Stats */}
        <AdminOverviewStats/>
        {/* Admin Stats Dashboard */}
        <AdminStatDashboard/>


      </div>

      <div className="circle"></div>
    </div>
  )
}

export default Admin