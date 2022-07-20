import React from 'react';
import Article from '../../components/article/Article';
import { blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    {/* <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div> */}
    <div className="gpt3__blog-container">
      {/* <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div> */}
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="December 2021"
          text="Multi-role Discord Bot"
          description="A Discord bot that can be used to manage multiple roles on a server."
        />
        <Article imgUrl={blog03} date="September 2021" text="Dig It!" />
        <Article
          imgUrl={blog04}
          date="June 2022"
          text="NLP Sentiment Analysis Reddit Bot"
          description="A Reddit bot that can be used to analyze the sentiment of a post."
        />
        <Article
          imgUrl={blog05}
          date="July 2022"
          text="The Friday Food E-commerce Website"
          description="A website that can be used to sell food."
        />
      </div>
    </div>
  </div>
);

export default Blog;
