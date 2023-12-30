import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer>
  <nav className="footer-nav">
    <ul>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Copyrigt</a>
      </li>
      <li>
        <a href="/FAQ">FAQ</a>
      </li>
      <li>
        <a href="#">Advertise</a>
      </li>
    </ul>
  </nav>
  <nav className="socials">
    <ul>
      <h3>Follow us</h3>
      <li>
        <a href="#">
          <i className="ri-facebook-box-fill" /> Facebook
        </a>
      </li>
      <li>
        <a href="#">
          <i className="ri-instagram-line" /> Instagram
        </a>
      </li>
      <li>
        <a href="mailto:fairmed@gmail.com">
          <i className="ri-mail-line" /> fairmed@gmail.com
        </a>
      </li>
    </ul>
  </nav>
</footer>
    </div>
  )
}

export default Footer