import React from 'react';
import './style.css';
import {useState} from 'react';

function SignUp() {
    const [usePhoneNumber, setUsePhoneNumber] = useState(false);
    const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');

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
    };

    const handlePatientClick = () => {
        setIsDoctor(false);
      };

      const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
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
        }
      
        if (!formData.lastName.trim()) {
          validationErrors.lastName = 'Last name is required';
        }
      
        if (!formData.email.trim()) {
          validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          validationErrors.email = 'Email is not valid';
        }
      
        if (!formData.password.trim()) {
          validationErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
          validationErrors.password = 'Password should be at least 8 characters';
        }
      
        if (formData.confirmPassword !== formData.password) {
          validationErrors.confirmPassword = 'Passwords do not match';
        }
      
        setErrors(validationErrors);
      };
  

  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Sign Up as</h3>
                  <div className="mb-4 d-flex gap-2">
                    <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold" type="button" onClick={handlePatientClick}>
                    Patient
                    </button>
                    <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold" type="button"  onClick={handleDoctorClick}>
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
                          name='email'
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          value={emailOrPhoneNumber}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                        <div className="text-center mt-2">
                          <a
                            href="#"
                            className="text-decoration-none"
                            onClick={handleUsePhoneNumberClick}
                          >
                            Use Phone Number Instead
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="form-floating mb-3">
                        <input
                          type="tel"
                          name='phoneNumber'
                          className="form-control"
                          id="floatingPhoneNumber"
                          placeholder="Phone number"
                          value={emailOrPhoneNumber}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="floatingPhoneNumber">Phone number</label>
                        <div className="text-center mt-2">
                          <a
                            href="#"
                            className="text-decoration-none"
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
                         <label htmlFor="uploadLicense" className="form-label">Upload License</label>
                        <input
                          type="file"
                          className="form-control"
                          id="uploadLicense"
                          placeholder="Upload License"
                        />
                       
                      </div>
                    )}

                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        Sign up
                      </button>
                      <div id="emailHelp" className="form-text text-center mt-4 text-dark">Already have an account? 
                        <a href="/login" className="fw-bold text-decoration-none"> Log In</a>
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