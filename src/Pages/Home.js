import Header from "../Components/Navbar/Header";
import Footer from "../Components/Footer/Footer"
import { useState } from "react";
import React from 'react'
import './style.css'

function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="homeMain">
    <div className="home-background-image">
      <div></div>
     <div className="slogan-container">
        <h1>Elevate Your Care Journey with Fairmed</h1>
        <p className="slogan">
            <i>Ratings, Records, and Beyond</i>
        </p>
     </div>
    </div>
    <section
  className="wow fadeIn animated"
  style={{ visibility: "visible", animationName: "fadeIn" }}
>
  <div className="home-counters container ">
    <div className="row">
      <div
        className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated"
      >
        <i className="fa fa-heartbeat medium-icon" />
        <span id="anim-number-pizza" className="counter-number" />
        <span
          className="timer counter alt-font appear"
        >
          300+
        </span>
        <p className="counter-title">Medical records</p>
      </div>
      <div
        className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated"
      >
        <i className="fa fa-star-half-o medium-icon" />
        <span
          className="timer counter alt-font appear"
        >
          900+
        </span>
        <span className="counter-title">Ratings</span>
      </div>
      <div
        className="col-md-3 col-sm-6 bottom-margin-small text-center counter-section wow fadeInUp xs-margin-bottom-ten animated"
      >
        <i className="fa fa-hospital-o medium-icon" />
        <span
          className="timer counter alt-font appear"
        >
          100+
        </span>
        <span className="counter-title">Healthcare</span>
      </div>
      <div
        className="col-md-3 col-sm-6 text-center counter-section wow fadeInUp animated"
      >
        <i className="fa fa-user medium-icon" />
        <span
          className="timer counter alt-font appear"
          data-to={600}
          data-speed={7000}
        >
          700+
        </span>
        <span className="counter-title">Users</span>
      </div>

    </div>
  </div>
</section>
<div className="container py-5">
  <div className="row mb-5">
    <div className="col-lg-8 text-black py-4 text-center mx-auto">
      <h1 className="display-4">What We Provide</h1>
    </div>
  </div> 
  <div>
      <ul className="nav nav-tabs">
        <li className="nav-item fs-4">
          <button
            className={`nav-link ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => handleTabClick(0)}
          >
            Medical Record Centralization
          </button>
        </li>
        <li className="nav-item fs-4">
          <button
            className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            Healthcare Rating
          </button>
        </li>
        <li className="nav-item fs-4">
          <button
            className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            Physician Rating
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3">
        {activeTab === 0 && (
          <p className="tab-paragraph p-3 px-5 fs-5">
            We understand the importance of having all your medical information in one
            secure place. Our platform allows you to seamlessly consolidate your medical records, 
            ensuring easy access and efficient management. It
            centralise patient medical records from various sources into a
            single, unified system. It enables healthcare providers to access
            and manage patient information more efficiently, leading to better
            coordination of care and improved patient outcomes.
          </p>
        )}
        {activeTab === 1 && (
          <p className="tab-paragraph p-3 px-5 fs-5">
           With our healthcare rating system, you can make informed decisions and choose the best care for yourself and your loved ones. Our platform empowers you to explore ratings and reviews of healthcare providers, ensuring transparency and trust. From finding top-rated healthcare to discovering highly recommended healthcare facilities, we've got you covered. Take charge of your healthcare journey and experience exceptional care with our healthcare rating system. Your well-being deserves the best, and we're here to help you find it.
          </p>
        )}
        {activeTab === 2 && (
          <p className="tab-paragraph p-3 px-5 fs-5">
           Our physician rating feature puts the power in your hands to find the perfect healthcare match. Discover highly skilled and compassionate physicians who have been rated and reviewed by patients just like you. Whether you're seeking a specialist for a specific condition or a primary care physician for your regular check-ups, our platform provides comprehensive insights to help you make the right choice. Find peace of mind knowing that you're accessing the expertise of top-rated doctors who prioritize your well-being. Your healthcare journey deserves excellence, and our physician rating feature ensures you receive nothing less. Take control of your healthcare decisions and experience exceptional care today.
          </p>
        )}
      </div>
      <div className="text-center"><a href="/aboutus" className="text-decoration-none home-aboutus-link">READ MORE<span><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span></a></div>
    </div>
</div>

    <section className="homerating">
      <div className="rating-heading-container">
        <p>
          <h1 className="rating-heading">
            Find the<br />right&nbsp;<span className="typewriter"></span>
          </h1>
        </p>
      </div>
      <div className="circle-container">
      <div className="circle right home-button-rating">
        <i class="fa fa-stethoscope fs-1 p-2" aria-hidden="true"></i>
        <a href="/doctor-rating">Physician<br /> Ratings</a>
      </div>
      <div className="circle home-button-rating">
      <i class="fa fa-hospital-o fs-1 p-2" aria-hidden="true"></i>
        <a href="/healthcare-rating">Health-care Ratings</a>
      </div>
      </div>
    </section>
    <div className="signups">
      <p className="display-2">Want to share your experience<br />
          <span className="display-4">sign up and leave your ratings</span>
      </p>
  
      <a id="homeSignup" href="/signup">
        Sign up
      </a>
      <a href="/login" className="text-white">Already have an account?</a>
    </div>
    <div className="m-4 text-center p-4">
      <h1 className="display-2">Are you a physician</h1>
      <p className="doctor-signup">Make the expperience easier for you and your patient.</p>
      <a id="homeSignup"  href="/signup">Claim your profile</a>
    </div>
    <div className="home-patient-container">
     <div className="home-patient">
     <h1>Have all your medical records at one place</h1>
      <p className="fs-3">  -access it anytime, anywhere</p>
      <ul className="green-bullets fs-4">
        <li>Secure</li>
        <li>Safe</li>
        <li>Easy to use</li>
      </ul>
      <div className="home-record-link">
        <a className="display-1 arrow" href="/signup">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
     </div>
    </div>

    <h5 className="article">Trending Articles</h5>
    <hr></hr>
    <article id="homearticle">
      <div className="scroll">
        <a
          href="https://www.practo.com/healthfeed/10-foods-to-improve-your-bad-mood-5957/post"
          target="_blank"
        >
          {" "}
          <img src="https://www.practostatic.com/fit/1da3446c1aca11295e4ea403b52fe8bc80b4c7c1" />{" "}
        </a>
        <p> Ten foods to improve your bad mood</p>
      </div>
      <div className="scroll">
        <a
          href="https://www.practo.com/healthfeed/10-remedies-to-get-pink-lips-naturally-19132/post"
          target="_blank"
        >
          {" "}
          <img src="https://www.practostatic.com/fit/68a54802e88767ea167e7e10f026c4241fe81b22" />{" "}
        </a>
        <p>Lips health</p>
      </div>
      <div className="scroll">
        <a
          href="https://www.practo.com/healthfeed/the-perfect-routine-lose-weight-throughout-the-day-everyday-3716/post"
          target="_blank"
        >
          {" "}
          <img src="https://www.practostatic.com/fit/547070a87697a72094abe97777a58e4fb5657aeb" />{" "}
        </a>
        <p>The Perfect Routine - Lose Weight Throughout the Day, Everyday!</p>
      </div>
      <div className="scroll">
        <a
          href="https://www.practostatic.com/fit/f73e8ad60ca3d2814ff19d3980abee7b6386d394"
          target="_blank"
        >
          {" "}
          <img src="https://www.practostatic.com/fit/d46f62b4758748341004b3492b82f5fb16adac52" />{" "}
        </a>
        <p>Get rid of headaches</p>
      </div>
      <div className="scroll">
        <a
          href="https://www.practo.com/healthfeed/5-foods-that-boost-immunity-157/post"
          target="_blank"
        >
          {" "}
          <img src="https://www.practostatic.com/fit/00b257b8daaecaa9b124672dbabce89426b0d9f4" />{" "}
        </a>
        <p>Foods to boost immunity</p>
      </div>
    </article>
    </main>
    <div>
    <Footer />
  </div>
  </div>
  )
}

export default Home