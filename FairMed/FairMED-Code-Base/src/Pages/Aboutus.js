import Header from "../Components/Navbar/Header";

import React from 'react';
import './style.css';
import aboutusImage from '../Pages/Images/aboutus-image.jpg'

function Aboutus() {
  return (
    <div className="body">

        <div>
            <Header />
        </div>
        <main className="about">
            <section className="first-section">
                <div>
                    <h1>About us</h1>
                    
                </div>
                <div className="aboutus-image-container">
                    <img className="aboutus-image" src={aboutusImage}></img>
                </div>
            </section>
        <div className="aboutus-container">
            <div className="about-main-content">
            <section className="second-section">
            <h2>Who are we?</h2>
            <p className="intro">
                FairMed: Your Trusted Guide to Quality Healthcare Ratings and
                Centralized Medical Records.
            </p>
            <p>
                At FairMed, we are passionate about transforming the healthcare
                experience for patients. We understand the challenges individuals face
                when it comes to finding reliable healthcare providers and managing
                their medical records. That's why we have developed a groundbreaking
                website that combines comprehensive healthcare ratings with a
                centralized platform for medical record management. FairMed is dedicated
                to empowering patients with the information they need to make informed
                decisions about their healthcare providers and to simplify the process
                of accessing and organizing their medical records.
            </p>
            </section>
            <section className="third-section">
            <h2>Our mission</h2>
            <p>
                FairMed is on a mission to revolutionize the way patients navigate the
                healthcare landscape. We believe that every individual deserves access
                to reliable, transparent, and user-friendly healthcare information. Our
                website serves as a trusted guide, providing patients with comprehensive
                ratings of healthcare providers while offering a secure and convenient
                platform for managing their medical records. We are committed to
                empowering patients to take control of their health by making informed
                choices and having seamless access to their medical information.
            </p>
            </section>
            <section className="fourth-section">
            <h2>What we provide.</h2>
            <h3>Healthcare Ratings</h3>
            <p>
                At FairMed, we believe that healthcare ratings should be transparent,
                unbiased, and based on real patient experiences. Our team of experts has
                developed a rating system that evaluates healthcare providers on various
                criteria, including patient satisfaction, medical expertise, facility
                quality, and more. We collect feedback from patients who have received
                care from these providers, ensuring that our ratings reflect the
                experiences of the community. By accessing FairMed, patients can explore
                detailed profiles of healthcare facilities, clinics, doctors, and
                specialists, along with their respective ratings and reviews.{" "}
            </p>
            <h3>Centralized Medical Record Management</h3>
            <p>
                Managing medical records can be a complex and fragmented process. At
                FairMed, we aim to simplify this process by providing patients with a
                centralized platform for managing their medical records. Upon
                registration, patients can securely upload their medical records,
                including test results, diagnoses, treatment plans, and more. Our
                platform utilizes advanced encryption and security protocols to ensure
                that patient data remains confidential and protected. With FairMed,
                patients have convenient access to their complete medical history
                anytime, anywhere. They no longer need to carry stacks of paper records
                or struggle to access digital records from different providers.
            </p>
            </section>
            <section className="fifth-section">
            <h2>Safeguarding Your Health Information</h2>
            <p>
                At FairMed, your security and privacy are of utmost importance to us. We
                continuously monitor and update our security practices to stay ahead of
                emerging threats and technologies. Our commitment to security assurance
                ensures that your health information remains protected as you utilize
                our platform to access healthcare ratings and manage your medical
                records.
            </p>
            </section>
            </div>
            <aside className="about-aside">
            <h3>Did you know?</h3>
            <ul>
            <li>
                Studies have shown that healthcare providers spend a significant amount
                of time searching for and manually managing paper records, which can
                lead to delays in accessing patient information and providing timely
                care.
            </li>
            <li>
                Paper records often require manual documentation, filing, and storage,
                which can increase administrative tasks for healthcare professionals.
            </li>
            <li>
                Maintaining paper records requires physical storage space, which can be
                costly, especially for large healthcare facilities
            </li>
            <li>
                Ratings in hospitals play a crucial role in promoting accountability and
                transparency in healthcare.
            </li>
            </ul>
             </aside>
        </div>
     
        </main>
        

    </div>
  )
}

export default Aboutus
