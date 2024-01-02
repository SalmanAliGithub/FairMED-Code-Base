import React from 'react'
import Profile from '../Components/Profile/Profile'
import Sidebar from '../Components/Sidebar/Sidebar'

function PatientDashboard() {
  return (
   <div className='con'>
       <div className="bg-black ">
        <Sidebar />
       </div>
       <div className='patientDashboard'>
        <div className='greetings'>
          <h1>Hello, </h1>
        </div>
        <div className='recent'>
          <h2>My Recent Activity:</h2>
          <div>
            
          </div>
        </div>
        <div className='recent'>
          <h2>Recent Medical Record Updates:</h2>
          <div>

          </div>
        </div>
       </div>
       <div className='profile'>
        <Profile />
       </div>
   </div>
  )
}

export default PatientDashboard
