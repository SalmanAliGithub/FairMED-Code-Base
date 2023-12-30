import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <header> FAIRMED</header>
        <ul>
            <li>
            <a href="#">
                <i className="fa fa-qrcode" />
                Dashboard
            </a>
            </li>
            <li>
            <a href="#">
                <i className="fa fa-hospital-o" />
                Medical Record
            </a>
            </li>
            <li>
            <a href="#">
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
        <button className="logout_button">
            <a href="#">Logout</a>
        </button>
        </div>
    </div>
  )
}

export default Sidebar
