import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
      <div className="blog-card mb-3">
        <div className="blog-img">
          <img src="/images/blog-1.jpg" className="img-fluid w-100" alt="" />
        </div>
        <div className="blog-content p-3">
          <p className="data-icon d-flex align-items-center gap-2">
        <BsCalendar3/>
            <span className="data">20 January, 2022</span>
          </p>
          <h4 className="title">How to Make a Good First Impression</h4>
          <p className="disc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="d-flex justify-content-center">
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
          </div>
        </div>
      </div>
    
  );
};

export default BlogCard;
