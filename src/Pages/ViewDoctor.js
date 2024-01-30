import React, { useState } from "react";
import Header from "../Components/Navbar/Header";
import Placeholder from "../Components/Assets/placeholder.png";
import "./style.css";
import Footer from "../Components/Footer/Footer";

function ViewDoctor() {
  const [profileData, setProfileData] = useState([]);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: document.title,
        text: "Check out my rating profile!",
        url: window.location.href,
      });
      console.log("Profile shared successfully!");
    } catch (error) {
      console.error("Error sharing profile:", error);
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="main doctorName d-flex">
        <img src={Placeholder} alt="Profile Picture" />
        <h2 className="pt-4 pb-">Doctor</h2>
      </div>
      <div className="text-center theReview">
        <h1 className="fs-5 pt-3 pb-3">Reviews</h1>
        <section className="w-50  mx-auto">
          <div className="Reviewer d-flex">
            <img src={Placeholder} alt="Profile Picture" />
            <div>
              <h2 className="fs-5 p-4">Some Name</h2>
            </div>
          </div>
          <div className="text-start pb-1">
            <hr />
            <i className="fa fa-star font fs-5"></i>
            <i className="fa fa-star font fs-5"></i>
            <i className="fa fa-star font fs-5"></i>
            <i className="fa fa-star font fs-5"></i>
            <i className="fa fa-star font fs-5"></i>
          </div>
          <div>
            <p>
              Sara ma gurlll ererer tmechignalesh m name is very good. I have
              many places to be.
            </p>
          </div>
          <div>
            <p className="text-start">Date: </p>
            <hr />
            <button id="shareButton" onClick={handleShare}>
              <i class="fa fa-share-alt"> Share</i>
            </button>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ViewDoctor;
