import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'

function MyMedicalRecord() {
  return (
    <div>
        <div>
        <Sidebar />
        </div>
        <div className='my-medical-record-maincontent p-5'>
            <div className='medical-record-box'>
            <div className="col-lg-6 col-xl-6">
            <h4 className="header-title m-b-30">My Medical Records</h4>
        </div>
        <div className="row">
            <div className="col-lg-3 col-xl-2">
            <div className="file-man-box"> 
                <div className="file-icon-box">
                <i class="fa fa-file-text-o fs-1" aria-hidden="true"></i>
                </div>
                <a href="#" className="file-download">
                <i className="fa fa-download" />
                </a>
                <div className="file-man-title">
                <h5 className="mb-0 text-overflow">Record</h5>
                <p className="mb-0">
                    <small>By:</small>
                </p>
                </div>
            </div>
            </div>

            <div className="col-lg-3 col-xl-2">
            <div className="file-man-box"> 
                <div className="file-icon-box">
                <i class="fa fa-file-text-o fs-1" aria-hidden="true"></i>
                </div>
                <a href="#" className="file-download">
                <i className="fa fa-download" />
                </a>
                <div className="file-man-title">
                <h5 className="mb-0 text-overflow">Record</h5>
                <p className="mb-0">
                    <small>By:</small>
                </p>
                </div>
            </div>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default MyMedicalRecord
