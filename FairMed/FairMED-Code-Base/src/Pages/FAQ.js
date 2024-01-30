import React from 'react'
import Header from "../Components/Navbar/Header";
import confusion from "../Components/Assets/confusion.png"
import { useState } from 'react';
import FAQAccordion from '../Components/FAQAccordion/FAQAccordion'

function FAQ() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <h2>Do You Have Questions? </h2>
        <p>We have answers!</p>
        <div>
            <p>Below you'll find answers ti the most common questions you may have on FAIRMED. Also, please feel free to  check out our <a href="#">Facebook.</a> If you still can't find the answers you're looking for, just <a href="#">Contact Us!</a></p>
        </div>
        <img className="navlogo" src={confusion}></img>
        <div>
            <section>
                <FAQAccordion />
            </section>
        </div>
      </main>
    </div>
  )
}

export default FAQ
