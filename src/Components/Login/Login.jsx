import React, { useState } from 'react';
import '../../Pages/style.css';

function Login() {
  const [isUsingEmail, setIsUsingEmail] = useState(true);

  const handleToggleInput = () => {
    setIsUsingEmail(!isUsingEmail);
  };

  return (
    <div>
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="login-container col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className=" container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4 text-white">Welcome back!</h3>
                    <form>
                      <div className="form-floating mb-3">
                        {isUsingEmail ? (
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                        ) : (
                          <input
                            type="tel"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Phone number"
                          />
                        )}
                        <label htmlFor="floatingInput">
                          {isUsingEmail ? 'Email address' : 'Phone number'}
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="d-grid">
                        <a className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2" href='/patient-dashboard'>
                          Log In
                        </a>
                        <div className="text-center">
                          <a
                            className="small text-white"
                            href="#"
                            onClick={handleToggleInput}
                          >
                            {isUsingEmail
                              ? 'Use Phone Number'
                              : 'Use Email'}
                          </a>
                        </div>
                        <div className="text-center">
                             <a className="small text-white" href="#">Forgot password?</a>
                        </div>
                        <div id="emailHelp" class="form-text text-center mt-4 text-white">Not Registered? 
                        <a href="/signup" class="fw-bold text-decoration-none text-info"> Create an Account</a>
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
    </div>
  );
}

export default Login;