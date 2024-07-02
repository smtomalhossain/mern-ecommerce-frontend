import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Privacy Policy"} />
            <BreadCrumb title="Privacy Policy" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
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
                            <div className="privacy-card">
                                <h3 className="title mb-4">Privacy Policy</h3>
                                <div className='mb-5'>
                                    <h4 className='privacy-sub-title'>The standard Lorem Ipsum passage
                                    </h4>
                                    <div className="d-flex justify-content-between align-items-center mb-2 gp-2">
                                        <img src="/images/like.png" alt="" className='img-fluid' />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan
                                            turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis,
                                            vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo.
                                            Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate.
                                            Quisque gravida suscipit tincidunt.
                                        </p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <h4 className='privacy-sub-title'>At vero eos et accusamus et iusto odio dignissimos
                                    </h4>
                                    <div className="d-flex justify-content-between align-items-center mb-2 gp-2">
                                        <img src="/images/arrow.png" alt="" className='img-fluid' />
                                        <p>Mauris elementum scelerisque elit non egestas. Cras lacus nibh,
                                            pretium quis bibendum nec, dapibus a metus. Morbi eros lectus,
                                            aliquam eu aliquam id, fringilla nec eros. Praesent suscipit
                                            commodo diam, non viverra turpis dapibus malesuada. Duis cursus
                                            metus eu sem eleifend, id rhoncus odio porttitor.
                                        </p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <h4 className='privacy-sub-title'>Certain circumstances and owing to the claims of duty or the obligations
                                    </h4>
                                    <div className="d-flex justify-content-between align-items-center mb-2 gp-2">
                                        <img src="/images/Delivery.png" alt="" className='img-fluid' />
                                        <p>But I must explain to you how all this mistaken idea of denouncing 
                                        pleasure and praising pain was born and I will give you a complete account
                                         of the system, and expound the actual teachings of the great explorer of the 
                                         truth, the master-builder of human happiness. No one rejects, dislikes.
                                        </p>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <h4 className='privacy-sub-title'>Integer ultrices laoreet nunc in gravida
                                    </h4>
                                    <div className="d-flex justify-content-between align-items-center mb-2 gp-2">
                                        <img src="/images/like.png" alt="" className='img-fluid' />
                                        <p>Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et magnis 
                                        dis parturient montes, nascetur ridiculus mus. Mauris suscipit dolor
                                         scelerisque, bibendum tellus ac, pharetra sapien. Praesent lacinia
                                          scelerisque odio et consequat. In a facilisis lacus. Maecenas vel
                                           lobortis tellus.
                                        </p>
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

export default PrivacyPolicy;
