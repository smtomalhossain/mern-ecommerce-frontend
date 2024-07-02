import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';


const ResetPassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Reset Password" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="login-card">
                        <h3 className='text-center'>Reset Password</h3>
                        <form action="" className='d-flex flex-column gap-3'>
                            <CustomInput type="password" name="password" placeholder="New Password" />
                            <CustomInput type="password" name="password" placeholder="Conform Password" />

                            <div className=' d-flex align-items-center flex-column justify-content-center gap-2'>
                                <button className='button border-0'>Conform</button>
                                <Link to="/login" className='text-decoration-none'>Back To Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default ResetPassword;
