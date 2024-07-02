import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from '../components/Color';

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare Product"} />
            <BreadCrumb title="Compare Product" />
            <div className="compare-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="compare-product-card-image">
                                    <img src="/images/watch.jpg" alt="" />
                                </div>
                                <div className="compare-product-card-details">
                                    <h5 className="title"> Honor T1 7.0 1GB 8 GB 7 Inc Whit Wi-fi=3G Tablet </h5>
                                    <h6 className="price mb-3">$ 100</h6>
                                </div>
                                <div>
                                    <div className="product-sub-details">
                                        <h5>Brand:</h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Type:</h5>
                                        <p>Watches</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Colors:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-2">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="compare-product-card-image">
                                    <img src="/images/watch.jpg" alt="" />
                                </div>
                                <div className="compare-product-card-details">
                                    <h5 className="title"> Honor T1 7.0 1GB 8 GB 7 Inc Whit Wi-fi=3G Tablet </h5>
                                    <h6 className="price mb-3">$ 100</h6>
                                </div>
                                <div>
                                    <div className="product-sub-details">
                                        <h5>Brand:</h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Type:</h5>
                                        <p>Watches</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Colors:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-2">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="compare-product-card-image">
                                    <img src="/images/watch.jpg" alt="" />
                                </div>
                                <div className="compare-product-card-details">
                                    <h5 className="title"> Honor T1 7.0 1GB 8 GB 7 Inc Whit Wi-fi=3G Tablet </h5>
                                    <h6 className="price mb-3">$ 100</h6>
                                </div>
                                <div>
                                    <div className="product-sub-details">
                                        <h5>Brand:</h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Type:</h5>
                                        <p>Watches</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Colors:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-2">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="/images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                                <div className="compare-product-card-image">
                                    <img src="/images/watch.jpg" alt="" />
                                </div>
                                <div className="compare-product-card-details">
                                    <h5 className="title"> Honor T1 7.0 1GB 8 GB 7 Inc Whit Wi-fi=3G Tablet </h5>
                                    <h6 className="price mb-3">$ 100</h6>
                                </div>
                                <div>
                                    <div className="product-sub-details">
                                        <h5>Brand:</h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Type:</h5>
                                        <p>Watches</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Colors:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-sub-details">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-2">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompareProduct;
