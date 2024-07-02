import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { IoIosHome } from "react-icons/io";
import { MdAccessTimeFilled, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <Meta title={"Contact Us"} />
            <BreadCrumb title="Contact Us" />
            <div className="contact-wrapper py-2 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7296.663830608473!2d90.406157!3d23.8778462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4335bbfdf99%3A0xd2ef5342f4128220!2z4Kar4Ka-4Kef4Kam4Ka-4Kas4Ka-4KamIOCmmuCnjOCmsOCmvuCmuOCnjeCmpOCmvg!5e0!3m2!1sbn!2sbd!4v1719588663187!5m2!1sbn!2sbd"
                                width="600"
                                height="450"
                                className="broder -0 w-100"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div>
                                    <h3 className="contact-title mb-4">Contact Us</h3>
                                    <form action="" className="d-flex flex-column gap-3">
                                        <div>
                                            <input type="text" className="form-control" placeholder="name" />
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div>
                                            <input type="tle" className="form-control" placeholder="Phone" />
                                        </div>
                                        <div>
                                            <textarea
                                                name=""
                                                id=""
                                                className="w-100 form-control mb-3"
                                                cols="30"
                                                rows="5"
                                                placeholder="Comments"
                                            ></textarea>
                                            <div className="div">
                                                <button type="submit" className="btn button">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">Get Touch with us</h3>
                                    <div className="d-flex gap-2 align-items-center mb-4">
                                    <IoIosHome className="icon"/>
                                        <p className="m-0">502 New design str, melbourne, san francisco, CA 94110, united states of.</p>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center mb-4">
                                    <MdEmail className="icon" />
                                        <p className="m-0">info@codekori.com</p>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center mb-4">
                                    <FaPhoneAlt className="icon" />
                                        <p className="m-0">+8801768447320</p>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center ">
                                    <MdAccessTimeFilled className="icon" />
                                        <p className="m-0">Monday - Friday 10AM - 8PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
