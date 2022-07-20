import React from 'react';
// import people from '../../assets/people.png';
// import guitar from '../../assets/guitar.png';
import './projects.css';

const Projects = () => (
  <div className="gpt3__header projectsection__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        <a href="https://github.com/drahc1R">Projects</a>
      </h1>
      &nbsp;&nbsp;
      <div className="bar" />
      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>
    {/* <div className="gpt3__header-image"><img src={guitar} /></div> */}
  </div>
);

export default Projects;
