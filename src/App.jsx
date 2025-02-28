import React from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashBoad from './Components/Dashboard/EmployeeDashBoad'
import AdminDashBoard from './Components/Dashboard/AdminDashBoard'
import CreateingTask from './Components/others/CreateingTask'
import NavBar from './Components/others/NavBar'
import Routing from './Utils/Routing'
import Sign from './Components/Auth/Sign'

const App = () => {
  return (
   <>
   <div className='w-ful h-screen overflow-hidden'>
   <NavBar />
   <Routing />

   
   </div>
 
   </>
  )
}

export default App