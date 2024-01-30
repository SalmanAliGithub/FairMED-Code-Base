import React from 'react'
import Profile from '../Components/Profile/Profile'
import Sidebardoc from '../Components/Sidebar/Sidebardoc'


function DoctorDashboard() {
  return (
    <div>
     <div className="bg-black ">
        <Sidebardoc />
       </div>
       <div className='dashboard-maincontent d-flex justify-content-evenly flex-wrap '>
          <div className='patient-recent-activity'>
            <div className='patient-recent-activity-rating'>
            <div class="card card-margin">
            <div class="card-header no-border">
                <h5 class="card-title">My Rating</h5>
            </div>
            <div class="card-body pt-0">
                <div class="widget">
                    <div class="widget-title-wrapper">
                        <div class="widget-date-primary">
                            <span class="widget-date-day">date</span>
                            <span class="widget-date-month">month</span>
                        </div>
                        <div class="widget-info">
                            <span class="widget-49-pro-title">Something something</span>
                            <span class="widget-time">hola como estas</span>
                        </div>
                    </div>
                    <ul class="widget-rating">
                        <li class="widget-item"><span>lorem</span></li>
                        <li class="widget-item"><span>lorem</span></li>
                        <li class="widget-item"><span>lorem</span></li>
                        <li class="widget-item"><span>lorem</span></li>
                        <li class="widget-item"><span>lorem</span></li>
                        <li class="widget-item"><span>lorem</span></li>
                        <li class="widget-item"><span>lorem</span></li>
                    </ul>
                    <div class="widget-action">
                        <a href="/rate-review" class="btn btn-sm btn-flash-border-primary">Go to rate</a>
                    </div>
                </div>
            </div>
          </div>
            </div>
            <div className='patient-recent-activity-update'>
                <div class="card card-margin">
              <div class="card-header no-border">
                  <h5 class="card-title">My reviews</h5>
              </div>
              <div class="card-body pt-0">
                  <div class="widget">
                      <div class="widget-title-wrapper">
                          <div class="widget-date-primary">
                              <span class="widget-date-day">date</span>
                              <span class="widget-date-month">month</span>
                          </div>
                          <div class="widget-info">
                              <span class="widget-49-pro-title">Something something</span>
                              <span class="widget-time">hola como estas</span>
                          </div>
                      </div>
                      <ul class="widget-rating">
                          <li class="widget-item"><span>lorem</span></li>
                          <li class="widget-item"><span>lorem</span></li>
                          <li class="widget-item"><span>lorem</span></li>
                          <li class="widget-item"><span>lorem</span></li>
                          <li class="widget-item"><span>lorem</span></li>
                          <li class="widget-item"><span>lorem</span></li>
                          <li class="widget-item"><span>lorem</span></li>
                      </ul>
                      <div class="widget-action">
                          <a href="/my-medical-record" class="btn btn-sm btn-flash-border-primary">Go to Medical Record</a>
                      </div>
                  </div>
              </div>
          </div>
            </div>
          </div>

          <div className='profile'>
            <Profile />
          </div>
       </div>
       
   </div>
  )
}


export default DoctorDashboard
