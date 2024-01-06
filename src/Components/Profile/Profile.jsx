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
    const [password, setPassword] = useState('12345678');
  
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
        <div className='p-4'>
        <label htmlFor="name" className='lable-label text-primary'>Name</label><br />
        {isBordered ? (
          <input type="text" value={name} onChange={handleNameChange} className="form-control" />
        ) : (
          <span id="name">{name}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="email" className='text-primary'>Email</label><br />
        {isBordered ? (
          <input type="text" value={email} onChange={handleEmailChange} className="form-control" />
        ) : (
          <span id="email">{email}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="phone" className='text-primary'>Phone Number</label><br />
        {isBordered ? (
          <input type="text" value={phone} onChange={handlePhoneChange} className="form-control" />
        ) : (
          <span id="phone">{phone}</span>
        )}
        <br />
        <br />
  
        <label htmlFor="password" className='text-primary'>Password</label><br />
        {isBordered ? (
          <input
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
        ) : (
          <span id="password">{password}</span>
        )}
        <i
          className={`bx ${passwordVisible ? 'bx-lock-open-alt' : 'bx-lock-alt'}`}
          id="password-toggle"
          onClick={togglePasswordVisibility}
        ></i>
        </div>  
        <hr className='m-3'/>
        <div className='text-center p-2'>
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
      </div>
    );
  };

  return (
    <div className="">
      <div className="my-profile p-5">
      <div className="card card-user">
  <div className="image">
    <img src={Placeholder} alt="..." />
  </div>
  <div className="content">
    <div className="dashboard-user">
      <img
        className="avatar border-white"
        src={Placeholder}
        alt="..."
      />
      <h4 className="title">
        Jhone Doe
      </h4>
    </div>
    <div className='text-center'>
    <button className="avatar-choice text-center btn btn-outline-dark">
      change your avatar
    </button>
    </div>

    <div>
    <ProfileSection />
    </div>
  </div>
</div>


        
      </div>
    </div>
  );
};

export default Profile;
