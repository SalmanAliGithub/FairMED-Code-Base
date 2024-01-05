
import React, { useState } from 'react';
import '../FAQAccordion/FAQAccordion.css';

const FAQAccordion = () => {
  const [activeIndexOne, setActiveIndexOne] = useState(null);
  const [activeIndexTwo, setActiveIndexTwo] = useState(null);

  const handleAccordionClickOne = (index) => {
    setActiveIndexOne(activeIndexOne === index ? null : index);
  };

  const handleAccordionClickTwo = (index) => {
    setActiveIndexTwo(activeIndexTwo === index ? null : index);
  };

  const faqData = [
    {
        question: 'Q: What is the Centralized Healthcare System?',
        answer:
          'A: The Centralized Healthcare System is an online platform that allows users to view ratings and reviews of doctors and healthcare centers. Registered patients can access their medical records, rate and review doctors, while doctors can update their patients\' medical records and view their own ratings and reviews.',
      },
      {
        question: 'Q: How can I access the ratings and reviews?',
        answer:
          'A: Any user, whether registered or not, can access the ratings and reviews of doctors and healthcare centers on our website. Simply browse the platform and explore the various profiles to find the information you need.',
      },
      {
          question: 'Q: How do I register as a patient?',
          answer:
            'A: To register as a patient, click on the "Sing in" button on the websites homepage and follow the instructions to create your account. You will need to provide some personal information.',
        },
        {
          question: 'Q: Can I view my medical records?',
          answer:
            'A: Yes, registered patients have access to their own medical records. Once logged in, navigate to the "Medical Records" section to view your medical history, test results, and other relevant information.',
        },
        {
          question: 'Q: Can I rate and review doctors?',
          answer:
            'A: Yes, registered patients can rate and review doctors based on their personal experiences. After logging in, visit the doctors profile page and follow the instructions to leave your rating and review.',
        },
  ];

  const faqtwoData = [
    {
        question: 'Q: Can doctors update my medical records?',
        answer:
          'A: Doctors can update your medical records, but only if you provide them with an authentication code by using your fingerprint. This ensures that your records remain secure and that only authorized healthcare professionals can make changes.',
      },
      {
        question: 'Q: Can doctors view their own ratings and reviews?',
        answer:
          'A: Yes, doctors can view their own ratings and reviews on their profile page. This feedback helps them understand patient experiences and make improvements if necessary.',
      },
      {
          question: 'Q: Can doctors rate or review patients?',
          answer:
            'A: No, doctors cannot rate or review patients on the platform. The system is designed to focus on patient feedback and experiences.',
        },
        {
          question: 'Q: How secure is my personal information?',
          answer:
            'A: We take the security and privacy of your personal information seriously. Our platform employs robust security measures to protect your data, and we adhere to strict privacy guidelines to ensure confidentiality.',
        },
        {
          question: 'Q: How can I contact customer support?',
          answer:
            'A: If you have any questions, concerns, or technical issues, please visit the "Contact Us" page on our website. You can reach out to our customer support team, and they will be happy to assist you.',
        },
  ];

  return (
    <section className='FAQ-QA'>
      <div>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleAccordionClickOne(index)}>
              {item.question}
              <span className="faq-question-icon">
                <i className={`fa ${activeIndexOne === index ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
              </span>
            </div>
            {activeIndexOne === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
      <div>
        {faqtwoData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleAccordionClickTwo(index)}>
              {item.question}
              <span className="faq-question-icon">
                <i className={`fa ${activeIndexTwo === index ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
              </span>
            </div>
            {activeIndexTwo === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;