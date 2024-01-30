import Header from "../Components/Navbar/Header";
import React from 'react';
import './style.css';




function Contact() {
  return (
    <div>
        <div>
            <Header />
        </div>
       <div className="contact-main main">
       <div className="contact-container">
        <div className="text">We'd love to hear from you!</div>
        <form action="#">
            <div className="form-row">
            <div className="input-data">
                <input type="text" required="" />
                <div className="underline" />
                <label htmlFor="">First Name</label>
            </div>
            <div className="input-data">
                <input type="text" required="" />
                <div className="underline" />
                <label htmlFor="">Last Name</label>
            </div>
            </div>
            <div className="form-row">
            <div className="input-data">
                <input type="text" required="" />
                <div className="underline" />
                <label htmlFor="">Email Address</label>
            </div>
            <div className="input-data">
                <input type="text" required="" />
                <div className="underline" />
                <label htmlFor="">Phone Number</label>
            </div>
            </div>
            <div className="form-row">
            <div className="input-data textarea">
                <textarea rows={8} cols={80} required="" defaultValue={""} />
                <br />
                <div className="underline" />
                <label htmlFor="">Write your message</label>
                <br />
                <div className="form-row submit-btn">
                <div className="input-data">
                    <div className="inner" />
                    <input type="submit" defaultValue="submit" />
                </div>
                </div>
            </div>
            </div>
        </form>
        </div>
       </div>
    </div>
  )
}

export default Contact

