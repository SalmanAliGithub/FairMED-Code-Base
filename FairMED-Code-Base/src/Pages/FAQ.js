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
      <main className='main  d-flex flex-column'>
        <h2 className='text-center mt-4 fs-2 p-2 text-primary'>Do You Have Questions? </h2>
        <p className='text-center fs-5'>We have answers!</p>
        <div className='p-2 d-flex justify-content-center'>
            <p className='w-50 text-center'>Below you'll find answers to the most common questions you may have on FAIRMED. Also, please feel free to  check out our <a href="#" className='text-success'>Facebook.</a> If you still can't find the answers you're looking for, just <a href="/contact"className='text-success'>Contact Us!</a></p>
        </div>
        <div className='d-flex justify-content-center'>
          <img className="faqImg" src={confusion}></img>
        </div>
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