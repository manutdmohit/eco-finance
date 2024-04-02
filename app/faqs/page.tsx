'use client';

import React from 'react';
import Image from 'next/image';
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
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './Data';

const FAQ = () => {
  return (
    <div className="container my-5 overflow-hidden">
      <div className="text-center mb-5">
        <p>
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
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="position-relative" style={{ height: '400px' }}>
            <Image
              src="/assets/home-loans.jpg"
              alt="FAQ Image"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
            {data.map((item, index) => (
              <AccordionItem key={index} className="mb-3">
                <AccordionItemHeading>
                  <AccordionItemButton className="accordion-button">
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
                <AccordionItemPanel className="accordion-body">
                  <p>{item.answer}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
