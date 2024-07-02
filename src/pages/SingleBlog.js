import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../components/Container';

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Title"} />
            <BreadCrumb title="Dynamic Blog Title" />
            <Container class1="single-blog-wrapper home-wrapper-2 py-5">
                    <div className="row">
                    <div className="col-3">
                    <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
                    </div>
                        <div className="col-9">
                            <div className="single-blog-card">
                                <h3 className='blog-title'>A Beautiful Sunday Morning Renaissance</h3>
                                <img src="/images/blog-1.jpg" className='img-fluid w-100 my-4' alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                                 deleniti repellat reiciendis accusamus asperiores, assumenda, 
                                 excepturi ab magni praesentium voluptate laudantium facere, 
                                 quasi iure temporibus aliquid nemo suscipit perferendis nisi.</p>

                                 <Link to="/blogs" className='d-flex align-items-center gap-1'>
                                <HiOutlineArrowLeft className='fs-4' />Go Back To Blog
                            </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            
        </>
    );
}

export default SingleBlog;
