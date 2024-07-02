import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';


const Login = () => {
    return (
        <>
            <Meta title={"Login Your Account"} />
            <BreadCrumb title="Login " />
            <Container className="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="login-card">
                        <h3 className='text-center'>Login</h3>
                        <form action="" className='d-flex flex-column gap-3'>

                            <CustomInput type="email" name="email" placeholder="Email" />
                            <CustomInput type="password" name="password" placeholder="Password" />

                            <Link to="/forgot-password">Forgot Password</Link>
                            <div className='d-flex align-items-center justify-content-center gap-2'>
                                <button className='button border-0'>Login</button>
                                <Link to="/signup" className='button signup'>SignUp</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Login;
