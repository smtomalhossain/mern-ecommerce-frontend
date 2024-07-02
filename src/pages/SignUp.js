import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
    return (
        <>
            <Meta title={"Create A New Account"} />
            <BreadCrumb title="Sign Up " />

            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="login-card">
                        <h3 className='text-center'>Create A New Account</h3>
                        <form action="" className='d-flex flex-column gap-3'>
                        <CustomInput type="name" name="name" placeholder="Fast Name" />
                        <CustomInput type="name" name="Last Name" placeholder="Last Name" />
                        <CustomInput type="email" name="email" placeholder="Email" />
                        <CustomInput type="password" name="password" placeholder="Password" />

                            <div className=' d-flex align-items-center flex-column justify-content-center gap-2'>

                                <button className='button border-0'>Sign Up</button>
                                <Link to="/login" className='text-decoration-none'>Back To Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>

        </>
    );
}

export default SignUp;
