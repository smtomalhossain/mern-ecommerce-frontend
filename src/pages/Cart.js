import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <Meta title={"Your Shopping Cart"} />
            <BreadCrumb title="Your Shopping Cart" />
            <section className='cart-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl px-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3 text-center'>Quantity</h4>
                                <h4 className='cart-col-4 text-center'>Total</h4>
                            </div>

                            <div className="cart-data border-bottom py-4 d-flex justify-content-between align-items-center">
                                <div className='cart-col-1'>
                                    <div className="d-flex align-items-center gap-3 justify-content-between">
                                        <div className="cart-image d-flex align-items-center">
                                            <img src="/images/watch.jpg" alt="" />
                                        </div>
                                        <div className="cart-details d-flex flex-column">
                                            <a  href="/product/:id">Smart Watch With Advanced Health Monitoring, Fitness Tracking</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <p>$ 100</p>
                                </div>
                                <div className='cart-col-3'>
                                    <div className="quantity d-flex align-items-center justify-content-center gap-2">
                                        <input type="number" style={{ width: "60px" }} min={1} max={10} name="quantity" className='form-control mb-2' />
                                        <RiDeleteBin6Line className='delete-icon mb-2' />

                                    </div>
                                </div>
                                <div className='cart-col-4 text-center'>
                                    <p>$ 100</p>
                                </div>
                            </div>
                            <div className="cart-data border-bottom py-4 d-flex justify-content-between align-items-center">
                                <div className='cart-col-1'>
                                    <div className="d-flex align-items-center gap-3 justify-content-between">
                                        <div className="cart-image d-flex align-items-center">
                                            <img src="/images/watch.jpg" alt="" />
                                        </div>
                                        <div className="cart-details d-flex flex-column">
                                            <a  href="/product/:id">Smart Watch With Advanced Health Monitoring, Fitness Tracking</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <p>$ 100</p>
                                </div>
                                <div className='cart-col-3'>
                                    <div className="quantity d-flex align-items-center justify-content-center gap-2">
                                        <input type="number" style={{ width: "60px" }} min={1} max={10} name="quantity" className='form-control mb-2' />
                                        <RiDeleteBin6Line className='delete-icon mb-2' />

                                    </div>
                                </div>
                                <div className='cart-col-4 text-center'>
                                    <p>$ 100</p>
                                </div>
                            </div>
                           <div className="col-12 py-2 mt-3 d-flex justify-content-between">
                           <div className='shopping-button d-flex align-items-baseline '>
                                <button className='button border-0'>Continue Shopping</button>
                                </div>
                            <div className="checkout-details d-flex flex-column align-items-end">
                            <h4 className='subtotal-title '>Subtotal: <span className='subtotal-price'>$200</span></h4>
                            <p className='subtotal-text'>Taxes and shipping calculated at checkout</p>
                            <Link to="/checkout" className='button border-0 check-out'>Check Out</Link>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
