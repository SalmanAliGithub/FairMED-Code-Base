import React from 'react'
import Profile from '../Components/Profile/Profile'
import Sidebar from '../Components/Sidebar/Sidebar'

function PatientDashboard() {
  return (
   <div className='con'>
       <div className="bg-black ">
        <Sidebar />
       </div>
       <div>
        <h1>HIw</h1>
       </div>

       <div>
        <Profile />
       </div>
    
   </div>
  )
}

export default PatientDashboard
