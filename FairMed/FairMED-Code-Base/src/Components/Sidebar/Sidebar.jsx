import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const handleLogoutClick = () => {
        if (window.confirm('Are you sure you want to logout?')) {
          window.location.href = '/home'; 
        }
      };
  return (
    <div>
           <div className="sidebar">
        <header>FAIRMED</header>
        <ul>
          <li>
            <a href="/patient-dashboard">
              <i className="fa fa-qrcode" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="/medicalrecord">
              <i className="fa fa-hospital-o" />
              Medical Record
            </a>
          </li>
          <li>
            <a href="/rate-review">
              <i className="fa fa-star-o" />
              Rate and Review
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-question-circle" />
              Support
            </a>
          </li>
        </ul>
        <button className="logout_button" onClick={handleLogoutClick}>
          <a href="/patient-dashboard">Logout</a>
        </button>
      </div>
    </div>
  )
}

export default Sidebar

