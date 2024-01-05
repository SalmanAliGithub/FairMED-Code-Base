import React from 'react';
import './Profile.css';
import Placeholder from '../Assets/placeholder.png';
import { useState } from 'react';



const Profile = () => {
  const ProfileSection = () => {
    const [isBordered, setIsBordered] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [physician, setPhysician] = useState({
      'name': '',
      'email': '',
      'phone': '',
    });
    
  
    const toggleEditability = () => {
      setIsBordered((prevState) => !prevState);
      setPasswordVisible(false);
    };
  
    const togglePasswordVisibility = () => {
      setPasswordVisible((prevVisible) => !prevVisible);
    };
  
    const handleInputChange = (fieldName, value) => {
      switch (fieldName) {
        case 'name':
          setPhysician(prevState=>({
            ...prevState,
             'name':value
          }));
          break;
        case 'email':
          setPhysician(prevState=>({
            ...prevState,
             'email':value
          }));
          break;
        case 'phone':
          setPhysician(prevState=>({
            ...prevState,
             'phone':value
          }));
          break;
        default:
          break;
      }
    };
  
    const saveChanges = () => {

  

      setIsBordered(false);
    };
  
    return (
      <div className={`profile-section${isBordered ? ' bordered' : ''}`} id="profile-section">
        <label htmlFor="name" className='lable-label'>Name</label><br />
        {isBordered ? (
          <input type="text" value={physician.name} onChange={handleInputChange('name',this.value)} />
        ) : (
          <span id="name">{physician.name}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="email">Email</label><br />
        {isBordered ? (
          <input type="text" value={physician.email} onChange={handleInputChange('email', this.value)} />
        ) : (
          <span id="email">{physician.email}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="phone">Phone Number</label><br />
        {isBordered ? (
          <input type="text" value={physician.phone} onChange={handleInputChange('phone', this.value)} />
        ) : (
          <span id="phone">{physician.phone}</span>
        )}
        <br />
        <br />
  
        
  
        <hr />
  
        {isBordered ? (
          <button
            className="update-profile-btn btn btn-success"
            type="button"
            onClick={saveChanges}
          >
            Save Changes
          </button>
        ) : (
          <button
            className="update-profile-btn btn btn-success"
            type="button"
            onClick={toggleEditability}
          >
            Update Profile
          </button>
        )}
      </div>
    );
  };

  

  return (
    <div className="">
      <div className="my-profile p-5">
        <h1 className="text-center">My profile</h1>

        <div className="">
          <img className="profile-picture avatar" src={Placeholder} alt="Profile Picture"  />
        </div>
        <div className="profile-edit py-3 text-center">
          <label htmlFor="profile-picture-upload">
            <i className="ri-pencil-line btn btn-outline-dark"></i>
          </label>
          <input className="upload-picture" id="profile-picture-upload" type="file" accept="image/*" />
          <button className="profile-view-btn btn btn-outline-dark">View Full Profile</button>
        </div>

        <ProfileSection />
      </div>
    </div>
  );
};

export default Profile;