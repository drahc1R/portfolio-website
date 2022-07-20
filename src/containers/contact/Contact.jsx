import React from 'react';
// import people from '../../assets/people.png';
import guitar from '../../assets/guitar.png';
import './contact.css';

const Contact = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="white__text">Hello, I am</h1>
      <h1 className="gradient__text">Richard Bann</h1>
      <p>
        A computer science and classical guitar performance student from
        Northwestern University. I aim to deepen my understanding in various
        areas of technology and product development.
      </p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={guitar} />
    </div>
  </div>
);

export default Contact;
