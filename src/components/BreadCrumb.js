import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    const { title } = props;
    return (
        <div className='breadcrumb py-4 mb-0'>
        <div className="container-xxl">
            <div className="row">
                <p className='d-flex align-items-center justify-content-center col-12 mb-0'>
                <Link to="/" className='text-dark'>
                    <u>Home</u> &nbsp;
                </Link>
                / &nbsp; <h5 className='m-0 '>{title}</h5>
                </p>
            </div>
        </div>
        </div>
    );
}

export default BreadCrumb;
