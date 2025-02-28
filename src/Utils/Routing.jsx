import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Auth/Login'
import EmployeeDashBoad from '../Components/Dashboard/EmployeeDashBoad'
import AdminDashBoard from '../Components/Dashboard/AdminDashBoard'

const Routing = () => {
  return (
   <>
   <Routes>
    <Route path='/login' element = {<Login />} />
    <Route path = '/employeeDashboard' element = {<EmployeeDashBoad />} />
    <Route path='admindashboard' element = {<AdminDashBoard />} />
   </Routes>
   </>
  )
}

export default Routing