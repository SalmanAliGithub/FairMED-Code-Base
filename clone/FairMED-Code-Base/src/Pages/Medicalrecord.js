import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'

function Medicalrecord() {
  return (
    <div className='medicalrecord'>
       <div className="bg-black ">
        <Sidebar />
       </div>
       <div className='mymedicalrecord'>
        <div>
            <h1>My Medical Record</h1>
        </div>
       </div>
    </div>
  )
}

export default Medicalrecord
