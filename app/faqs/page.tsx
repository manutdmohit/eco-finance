'use client';

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

import './FAQ.css'; // Ensure this path is correct
import TopBar from '../components/Top/top';
import Wrapper from '../components/Wrapper/wrapper';
import Footer from '../components/Footer/Footer';

import data from './Data';

const FAQ = () => {
  // const data = [
  //   {
  //     question: 'What income documents will I need for a home loan?',
  //     answer:
  //       "For full-time PAYG, you can usually just provide your latest 2 payslips. For casual, you'll sometimes also need your last year's PAYG summary. Self-employed applicants will usually need to provide the full 2 years' financials: personal tax returns, Notice of Assessments, company tax returns, company profit & loss + balance sheet.",
  //   },
  //   {
  //     question: 'How long does it take for a mortgage to be approved?',
  //     answer:
  //       'The time it takes for a mortgage application varies based on factors like application complexity and the lender. Simple applications with responsive lenders can be quick, while complex ones or slower lenders may take longer. Typically, it is approved within 14 days, sometimes even sooner if time is limited. We will provide an estimated timeline upon submission and keep you informed throughout. In general, most applications are settled within a month, often sooner.',
  //   },
  //   {
  //     question: 'Is it better to apply for a mortgage through a broker?',
  //     answer:
  //       'Using a mortgage broker for your home loan has numerous benefits with no downside. We provide personalized care and access to top loan products from a wide range of lenders. In case of complex applications, our expertise ensures a thorough assessment and finding the ideal loan for you.',
  //   },
  // ];

  return (
    <div>
      <TopBar />
      <Wrapper />

      <div className="faq-container">
        <p className="p-4 faq-intro">
          Welcome to our comprehensive Frequently Asked Questions (FAQ) section.
          This section is designed to serve as a one-stop resource for all your
          inquiries about our services, products, and more. Whether you're a new
          user just starting your journey with us, an existing user seeking
          specific information, or someone with questions about our offerings,
          we've got you covered. Our FAQs are meticulously organized to provide
          clear, concise answers to a wide array of questions. We understand
          that navigating new platforms or services can be overwhelming, and
          we're here to make that process as smooth and informative as possible.
          Our FAQs are not just a list of questions and answers; they are a
          reflection of our commitment to transparency, customer satisfaction,
          and continuous improvement. We're constantly updating our FAQs to
          include the latest information and to address the most common concerns
          our users have. If you have any questions that aren't covered here,
          please don't hesitate to contact us. Our team is dedicated to
          providing you with the best possible support and ensuring your
          experience with us is as seamless and enjoyable as possible. We're
          here to help, so feel free to explore the questions below or reach out
          to us directly. Your satisfaction is our top priority, and we're
          committed to making your experience with us as positive as possible.
        </p>

        <section className="faq-section">
          <div className="faq-image">
            <img src="./assets/home-loans.jpg" alt="FAQ Image" />
          </div>

          <div className="faq-content">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
              {data.map((item, index) => (
                <AccordionItem key={index} className="accordionItem">
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionItemButton">
                      <span>{item.question}</span>
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? (
                            <MdOutlineArrowDropUp size={20} />
                          ) : (
                            <MdOutlineArrowDropDown size={20} />
                          )
                        }
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordionItemPanel">
                    <p>{item.answer}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
