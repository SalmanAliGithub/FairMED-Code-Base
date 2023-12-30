import Header from "../Components/Navbar/Header";
import Footer from "../Components/Footer/Footer"

import React from 'react'
import './style.css'

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="homeMain">
    <div id="backphoto">
      <h1>FAIRMED</h1>
      <p>
        <q>
          <i>
            Empowering Patients. Connecting Care. Your Health, Your Control.
          </i>
        </q>
      </p>
    </div>
    <table>
      <tbody>
        <tr>
          <th>
            10 Million <sup>+</sup> ratings
          </th>
          <th>50,000+ Registered Users</th>
          <th>1000+ Healthcare Providers</th>
        </tr>
      </tbody>
    </table>
    <section className="description">
      <h3>FAIRMED</h3>
      <p>
        Discover a revolutionary healthcare platform designed to transform the
        way you manage and interact with your medical records. Our website
        serves as a centralized hub, seamlessly integrating all your health
        information into one secure and accessible location. With our intuitive
        interface, you can effortlessly organize and retrieve your medical
        records, eliminating the hassle of juggling paperwork or searching
        through multiple systems. Gain a complete overview of your health
        history, including diagnoses, treatments, and lab results, empowering
        you to make informed decisions about your well-being. Not only does our
        platform streamline medical record management, but it also empowers you
        to contribute to the healthcare community. Share your experiences by
        rating doctors and healthcare centers based on the quality of care
        received, helping fellow patients make informed choices when seeking
        medical professionals. We prioritize data security and privacy,
        implementing robust safeguards to protect your sensitive information.
        Rest assured that your records are encrypted, and access is strictly
        controlled, ensuring confidentiality and peace of mind. Join our growing
        community of empowered individuals who take charge of their healthcare
        journey. Experience the convenience, transparency, and control our
        platform offers, and embark on a path to better health outcomes. Welcome
        to a new era of patient-centric care."
      </p>
    </section>
    <section className="homerating">
      <div id="flow">
        <p>
          Unlock the Boundless Potential of Personalized Healthcare: Seamlessly
          Connect, Collaborate, and Empower Yourself for Unprecedented Control,
          Unmatched Insights, and Optimal Care.
        </p>
      </div>
      <div className="circle">
        <a href="#">Dr. Ratings</a>
      </div>
      <div className="circle">
        <a href="#">Health-care Ratings</a>
      </div>
    </section>
    <div className="signups">
      <a id="homeSignup" href="#">
        Sign up
      </a>
      <a href="#">Already have an account?</a>
    </div>
    <h5 className="article">Read Articles</h5>
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
    </>
  )
}

export default Home