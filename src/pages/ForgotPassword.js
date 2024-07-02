import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
    return (
        <>
            <Meta title={"Reset your Password"} />
            <BreadCrumb title="Forgot Password" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="login-card">
                            <h3 className='text-center'>Reset Yor Password</h3>
                            <p className='text-center'>We will send you an email to reset your password</p>
                            <form action="" className='d-flex flex-column gap-3'>
                                <CustomInput type="email" name="email" placeholder="Email" />

                                <div className=' d-flex align-items-center flex-column justify-content-center gap-2'>
                                    <button className='button border-0'>Submit</button>
                                    <Link to="/login" className='Cancel'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
