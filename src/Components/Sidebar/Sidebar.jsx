import React, { useState } from 'react';
import logo from '../Assets/logo.png';

function Sidebar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (event) => {
    const navLinks = document.querySelectorAll('.nav_link');
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });
  
    const clickedLink = event.currentTarget;
    clickedLink.classList.add('active');
  };

  const handleLogoClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div className='sidebar'>
      <header className="header-sidebar" id="header">
        <div className="header_toggle">
          <i
            className={`bx ${isNavOpen ? 'bx-x' : 'bx-menu'}`}
            onClick={toggleNavbar}
            id="header-toggle"
          ></i>
        </div>
      </header>
      <div className={`l-navbar ${isNavOpen ? 'show' : ''}`} id="nav-bar">
        <nav className="nav-sidebar">
          <div>
            <a href="#" className="nav_logo" onClick={handleLogoClick}>
              <img className="navlogo-sidebar" src={logo} alt="Logo" />
              <span className="nav_logo-name">FairMed <i className="bx bx-x fs-3"></i></span>
            </a>
            <div className="nav_list">
              <a href="/patient-dashboard" className="nav_link" onClick={handleLinkClick}>
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </a>
              <a href="/my-medical-record" className="nav_link " onClick={handleLinkClick}>
                <i className="bx bx-id-card nav_icon"></i>
                <span className="nav_name">Medical Record</span>
              </a>
              <a href="/rate-review" className="nav_link " onClick={handleLinkClick}>
                <i className="bx bx bx-star"></i>
                <span className="nav_name">Rate and Review</span>
              </a>
              <a href="/support" className="nav_link " onClick={handleLinkClick}>
                <i className="bx bx-question-mark nav_icon"></i>
                <span className="nav_name">Support</span>
              </a>
            </div>
          </div>
          <a href="#" className="nav_link" onClick={handleLinkClick}>
            <i className="bx bx-log-out nav_icon text-danger"></i>
            <span className="nav_name text-danger ">Log Out</span>
          </a>
        </nav>
        
      </div>
    </div>
  );
}

export default Sidebar;