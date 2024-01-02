import React from 'react';
import './Profile.css';
import Placeholder from '../Assets/placeholder.png';
import { useState } from 'react';



const Profile = () => {
  const ProfileSection = () => {
    const [isBordered, setIsBordered] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [phone, setPhone] = useState('123-456-7890');
    const [password, setPassword] = useState('****');
  
    const toggleEditability = () => {
      setIsBordered((prevState) => !prevState);
      setPasswordVisible(false);
    };
  
    const togglePasswordVisibility = () => {
      setPasswordVisible((prevVisible) => !prevVisible);
    };
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const saveChanges = () => {

      console.log('Changes saved:', {
        name,
        email,
        phone,
        password
      });
  

      setIsBordered(false);
    };
  
    return (
      <div className={`profile-section${isBordered ? ' bordered' : ''}`} id="profile-section">
        <label htmlFor="name" className='lable-label'>Name</label><br />
        {isBordered ? (
          <input type="text" value={name} onChange={handleNameChange} />
        ) : (
          <span id="name">{name}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="email">Email</label><br />
        {isBordered ? (
          <input type="text" value={email} onChange={handleEmailChange} />
        ) : (
          <span id="email">{email}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="phone">Phone Number</label><br />
        {isBordered ? (
          <input type="text" value={phone} onChange={handlePhoneChange} />
        ) : (
          <span id="phone">{phone}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="password">Password</label><br />
        {isBordered ? (
          <input
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
          />
        ) : (
          <span id="password">{password}</span>
        )}
        <i
          className={`bx ${passwordVisible ? 'bx-lock-open-alt' : 'bx-lock-alt'}`}
          id="password-toggle"
          onClick={togglePasswordVisibility}
        ></i>
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
