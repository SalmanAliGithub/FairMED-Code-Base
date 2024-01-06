import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'

function support() {
  return (
   <div>
     <div>
      <Sidebar />
    </div>
    <div className='support-maincontent p-5'>
      <div className='support-main-content-box p-3'>
        <h1 className='text-center'>Welcome to the dashboard!</h1>
        <p className=''> This guide will walk you through the various features and functionalities available to you.</p>
        <ul className='support-list'>
          <li>
            <h2>Patient Dashboard</h2>
            <p>This is the main landing page of the dashboard. Here, you can view your recent activities and updates. It provides a summary of your interactions and usage within the system.</p>
          </li>
          <li>
            <h2>Profile Update</h2>
            <p>To update your profile, navigate to the "Profile" section. Here, you can choose from a set of avatars to decorate your profile. Select an avatar that represents you best and save the changes. Your updated profile will be reflected throughout the dashboard.</p>
            </li>
          <li>
            <h2>Rate and Review</h2>
            <p>In the "Rate and Review" section, you can provide feedback on your experiences. Rate the services and leave your comments to help us improve. Your reviews are valuable to us and assist other users in making informed decisions.</p>
          </li>
          <li>
            <h2>Medical Record</h2>
            <p>Access your medical records in the "Medical Record" section. Here, you can view and download records that have been updated by the doctors who treated you. It's a convenient way to keep track of your medical history and access important documents when needed.</p>
          </li>
          <li>
            <h2>Support</h2>
            <p>If you require assistance or have questions about using the dashboard, navigate to the "Support" section. Fill out the support form with your name, email, and message describing the issue or query you have. Submit the form, and our support team will get back to you as soon as possible.</p>
          </li>
          <li>
            <h2>Logout</h2>
            <p>To log out of the dashboard, click on the "Logout" button located in the sidebar. This will securely end your session and ensure your account remains protected.</p>
          </li>
        </ul>
      </div>
    </div>
   </div>

  )
}

export default support
