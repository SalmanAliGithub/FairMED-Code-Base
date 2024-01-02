import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer>
  <div className="footer-nav">
        <div className="card p-3 p-md-4 text-white">
          <h6 className="my-3">Advertise your healthcare on our site</h6>
          <div className="row d-flex my-2 pr-2 pr-md-5 div1">
            <div className="col-9">
              <input
                type="email"
                className="form-control py-3"
                id="inp1"
                placeholder="Enter email address"
              />
            </div>
            <div className="col-3 px-0">
              <button className="btn btn-info text-white px-4 py-2"> OK </button>
            </div>
        </div>
</div>

    <ul>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="/FAQ">FAQ</a>
      </li>

    </ul>
  </div>
 <div>
  <div className="socials">
    <ul className='d-flex text-decoration-none fs-2 gap-5 '>
      <li>
        <a href="#">
          <i className="ri-facebook-box-fill" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="ri-instagram-line" /> 
        </a>
      </li>
      <li>
        <a href="mailto:fairmed@gmail.com">
          <i className="ri-mail-line" />
        </a>
      </li>
    </ul>
  </div>
 </div>
</footer>
    </div>
  )
}

export default Footer