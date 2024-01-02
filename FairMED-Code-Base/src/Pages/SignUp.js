import React from 'react';
import './style.css';
import {useState} from 'react';

function SignUp() {
    const [usePhoneNumber, setUsePhoneNumber] = useState(false);
    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');
    const [activeButton, setActiveButton] = useState('patient');

    const handleUsePhoneNumberClick = () => {
        setUsePhoneNumber(true);
        setEmailOrPhoneNumber('');
    };

    const handleInputChange = (e) => {
        setEmailOrPhoneNumber(e.target.value);
    };

    const [isDoctor, setIsDoctor] = useState(false);

    const handleDoctorClick = () => {
      setIsDoctor(true);
      setActiveButton('doctor');
    };

    const handlePatientClick = () => {
        setIsDoctor(false);
        setActiveButton('patient');
      };

      const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        uploadFile:''
      });
      
      const [errors, setErrors] = useState({});
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
      
        if (!formData.firstName.trim()) {
          validationErrors.firstName = 'First name is required';
        } else if (/\d/.test(formData.firstName)) {
          validationErrors.firstName = 'First name should not contain numbers';
        } else if (/[!@#$%^&*(),.?":{}|<>]/.test(formData.firstName)) {
          validationErrors.firstName = 'First name should not contain special characters';
        }
        
        if (!formData.lastName.trim()) {
          validationErrors.lastName = 'Last name is required';
        } else if (/\d/.test(formData.lastName)) {
          validationErrors.lastName = 'Last name should not contain numbers';
        } else if (/[!@#$%^&*(),.?":{}|<>]/.test(formData.lastName)) {
          validationErrors.lastName = 'Last name should not contain special characters';
        }
      
        if (!formData.email.trim()) {
          validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          validationErrors.email = 'Email is not valid';
        }

        if (!formData.phoneNumber.trim()) {
          validationErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
          validationErrors.phoneNumber = 'Phone number must have 10 digits';
        }
      
        if (!formData.password.trim()) {
          validationErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
          validationErrors.password = 'Password should be at least 8 characters';
        }
      
        if (formData.confirmPassword !== formData.password) {
          validationErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.uploadFile) {
          validationErrors.uploadFile = 'Please upload a file';
        }
      
        setErrors(validationErrors);
      };
  

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
        <div className="signup-container col-md-8 col-lg-6">
          <div className="signup d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="signup-heading mb-4 text-white">Sign Up as</h3>
                  <div className="mb-4 d-flex gap-2">
                    <button className={`btn btn-lg btn-primary btn-login text-uppercase fw-bold ${activeButton === 'patient' ? 'active' : ''}`} type="button" onClick={handlePatientClick}>
                    Patient
                    </button>
                    <button className={`btn btn-lg btn-primary btn-login text-uppercase fw-bold ${activeButton === 'doctor' ? 'active' : ''}`} type="button"  onClick={handleDoctorClick}>
                    Doctor
                    </button>
                  </div>
                  <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col">
                    <div className="form-floating mb-3">
                        <input
                        type="text"
                        className="form-control"
                        id="floatingFirstName"
                        name="firstName"
                        placeholder="First name"
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingFirstName">First name</label>
                        {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
                    </div>
                    </div>

                    <div className="col">
                    <div className="form-floating mb-3">
                        <input
                        type="text"
                        className="form-control"
                        id="floatingLastName"
                        name="lastName"
                        placeholder="Last name"
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingLastName">Last name</label>
                        {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
                    </div>
                    </div>
                </div>
 
        
                    <div className="form-floating mb-3">
                    {!usePhoneNumber ? (
                      <div className="form-floating mb-3">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        <label htmlFor="floatingInput">Email address</label>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                        <div className="text-center mt-2">
                          <a
                            href="#"
                            className="text-white"
                            onClick={handleUsePhoneNumberClick}
                          >
                            Use Phone Number Instead
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name="phoneNumber"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Phone number"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                        <label htmlFor="floatingPhoneNumber">Phone number</label>
                        {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber}</span>}
                        <div className="text-center mt-2">
                          <a
                            href="#"
                            className="text-white"
                            onClick={() => setUsePhoneNumber(false)}
                          >
                            Use Email Address Instead
                          </a>
                        </div>
                      </div>
                    )}
                    </div>
                    <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                      <label htmlFor="floatingPassword">Confirm Password</label>
                      {errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword}</span>}
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingAddress"
                        placeholder="Address"
                      />
                      <label htmlFor="floatingAddress">Address</label>
                    </div>
                    {isDoctor && (
                      <div className=" mb-3">
                         <label htmlFor="uploadLicense" className="form-label text-white">Upload License</label>
                        <input
                          type="file"
                          className="form-control"
                          id="uploadLicense"
                          placeholder="Upload License"
                          onChange={handleChange}
                        />
                        {errors.uploadFile && <span className="text-danger">{errors.uploadFile}</span>}
                       
                      </div>
                    )}

                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-signup text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Sign up
                      </button>
                      <div id="emailHelp" className="form-text text-center mt-4 text-white">Already have an account? 
                        <a href="/login" className="fw-bold text-decoration-none text-info"> Log In</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;