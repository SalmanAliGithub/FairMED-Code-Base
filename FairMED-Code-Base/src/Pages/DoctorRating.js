import React from 'react'
import './style.css'
import Header from "../Components/Navbar/Header";
import Placeholder from '../Components/Assets/placeholder.png';
import Footer from "../Components/Footer/Footer"

function DoctorRating() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='search '>
        <div className='searchBar-container'>
            <i className="fa fa-search" id="searchIcon" />
            <input className='searchInput' placeholder="Type to search...." />
        </div>
      </div>
      <section className='mt-5 container doctorProfile-container'>
        <div className='container p-3 text-center'>
          <div className='docName'> 
            <h2>Doctor, </h2>
            <div ><i className="fa fa-star font fs-5"></i> 
            <a className='text-black text-decoration-none'> </a>
            </div>
          </div>
          <div>
            <img src={Placeholder}  alt="Profile Picture"  />
          </div>
        </div>
        <div className='text-center pb-3'>
        <button type="button" class="btn btn-danger  btn-lg mt-3 w-100 rounded" >
          <a className='text-decoration-none text-black'href='/view-doctor'>View Profile</a>
        </button>
        </div>
      </section>
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default DoctorRating
