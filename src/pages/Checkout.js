import React from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <>
            <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl ">
                    <div className="row ">
                        <div className="col-7">
                            <div className="checkout-left-data description-card py-3">
                                <h3 className="Website-name">CodeKori</h3>
                                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        &nbsp;/
                                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                                <h4>Contact Information</h4>
                                <p className='user-details '>
                                    Shohag Hossain <span className='subtotal-text'>(shohaghossen85@gmail.com)</span>
                                </p>
                                <form action="" className='d-flex flex-wrap justify-content-between gap-3'>
                                    <div className='w-100'>
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="" selected disabled >Select Country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className='form-control' placeholder='First Name' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className='form-control' placeholder='First Name' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" className='form-control' placeholder='Address' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" className='form-control' placeholder='First Name' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className='form-control' placeholder='City' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="" selected disabled>State</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className='form-control' placeholder='ZIP Code' />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to="/cart" className='d-flex text-dark align-items-center gap-1'>
                                                <HiOutlineArrowLeft className='fs-4 me-2' />Return To Cart
                                            </Link>
                                            <Link to="/cart" className='d-flex align-items-end button continue-btn gap-1 '>
                                                Continue To Shipping
                                            </Link>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="col-5">
                            <div className="d-flex align-items-center gap-3 justify-content-between">
                                <div className='d-flex gap-5'>
                                    <div className="checkout-cart-image position-relative">
                                        <span className='total-items position-absolute badge rounded-circle bg-secondary'>1</span>
                                        <img src="/images/watch.jpg" alt="" />
                                    </div>
                                </div>
                                <div className='checkout-product-details'>
                                    <p className='checkout-product-title mb-0 ' >Smart Watch With Advanced Health Monitoring, Fitness Tracking</p>
                                </div>
                                <div className='checkout-product-price'>
                                    <p className='d-flex align-items-end flex-wrap'>$ 100</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 justify-content-between mt-3">
                                <div className='d-flex gap-5'>
                                    <div className="checkout-cart-image position-relative">
                                        <span className='total-items position-absolute badge rounded-circle bg-secondary'>1</span>
                                        <img src="/images/watch.jpg" alt="" />
                                    </div>
                                </div>
                                <div className='checkout-product-details'>
                                    <p className='checkout-product-title mb-0 ' >Smart Watch With Advanced Health Monitoring, Fitness Tracking</p>
                                </div>
                                <div className='checkout-product-price'>
                                    <p className='d-flex align-items-end mb-0'>$ 100</p>
                                </div>
                            </div>
                            <form class="d-flex mt-5 gap-3">
                                    
                                    <div className="col-auto">
                                        <input type="text" class="form-control discount-code" id="" placeholder="Discount Code"/>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" class="btn btn-primary discount-btn mb-3">Apply</button>
                                    </div>
                                </form>


                            <div className='py-4'>
                                <div className="d-flex justify-content-between">
                                    <p className='subtotal-text'>Subtotal:</p>
                                    <p className='subtotal-price'>$200</p>
                                </div>
                                <div className="border-bottom d-flex justify-content-between">
                                    <p className='subtotal-text'>Shipping:</p>
                                    <p className='subtotal-price'>$10</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <h4 className='subtotal-title mb-0'>Total:</h4>
                                <h5 className='subtotal-price mb-0'>$210</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
