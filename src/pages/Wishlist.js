import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';

const Wishlist = () => {
    return (
        <>
            <Meta title={"Favorite & Wishlist"} />
            <BreadCrumb title="Wishlist" />

            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-product-card position-relative">
                            <img src="/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                            <div className="wishlist-product-card-image">
                                <img src="/images/watch.jpg" alt="" />
                            </div>
                            <div className="wishlist-product-card-details">
                                <h5 className="title"> Honor T1 7.0 1GB 8 GB 7 Inc Whit Wi-fi=3G Tablet </h5>
                                <h6 className="price mb-3">$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-product-card position-relative">
                            <img src="/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                            <div className="wishlist-product-card-image">
                                <img src="/images/watch.jpg" alt="" />
                            </div>
                            <div className="wishlist-product-card-details">
                                <h5 className="title"> Honor T1 7.0 1GB 8 GB 7 Inc Whit Wi-fi=3G Tablet </h5>
                                <h6 className="price mb-3">$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-product-card position-relative">
                            <img src="/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                            <div className="wishlist-product-card-image">
                                <img src="/images/watch.jpg" alt="" />
                            </div>
                            <div className="wishlist-product-card-details">
                                <h5 className="title"> Honor T1 7.0 1GB 8 GB 7 Inc Whit Wi-fi=3G Tablet </h5>
                                <h6 className="price mb-3">$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-product-card position-relative">
                            <img src="/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                            <div className="wishlist-product-card-image">
                                <img src="/images/watch.jpg" alt="" />
                            </div>
                            <div className="wishlist-product-card-details">
                                <h5 className="title"> Honor T1 7.0 1GB 8 GB 7 Inc Whit Wi-fi=3G Tablet </h5>
                                <h6 className="price mb-3">$ 100</h6>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>

        </>
    );
}

export default Wishlist;
