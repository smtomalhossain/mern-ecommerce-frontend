import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-3 align-items-center">
                <img src="/images/newsletter.png" alt="" />
                <h3 className="mb-0 text-white ">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter Your Email"
                  aria-label="Add Your Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Scribers
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row ms-3">
            <div className="col-3">
              <h4 className="mb-4">Contact Us</h4>
              <div>
                <p className="text-white">
                  502 New design str, melbourne, san francisco, CA 94110, united
                  states of america​.
                </p>
                
                <p className="text-white">
                  <a href="tel:+880 1768-447320">+880 1768-447320</a>{" "}
                </p>
                
                <p className="text-white">info@codekori.com</p>
                <div className="social-icon d-flex gap-3">
                  <a className="text-white fs-4" href="">
                    <BsFacebook />
                  </a>
                  <a className="text-white fs-4" href="">
                  <BsLinkedin />

                  </a>
                  <a className="text-white fs-4" href="">
                    <BsInstagram />
                  </a>
                  <a className="text-white fs-4" href="">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4">My Account</h4>
              <div className="footer-extras d-flex flex-column">
                <Link className="text-white py-2 mb-1">My Account</Link>
                <Link className="text-white py-2 mb-1">Order History</Link>
                <Link className="text-white py-2 mb-1">Wish List</Link>
                <Link className="text-white py-2 mb-1">Affiliates</Link>
                <Link className="text-white py-1 mb-1">Contact Us</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4">Information</h4>
              <div className="footer-extras d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">
                  Delivery Information
                </Link>
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-1 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4">Extras</h4>
              <div className="footer-extras d-flex flex-column">
                <Link className="text-white py-2 mb-1">Site Map</Link>
                <Link className="text-white py-2 mb-1">Newsletter</Link>
                <Link className="text-white py-2 mb-1">Brands</Link>
                <Link className="text-white py-2 mb-1">Contact Us</Link>
                <Link className="text-white py-1 mb-1">Specials</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4">Our App</h4>
              <div className="footer-our-app">
                <p className="text-white">
                  {" "}
                  Download Our App And Get Extra 15% Discount On Your First
                  Order..!
                </p>
                <img src="/images/app-icon-01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white">
                Copyright &copy; {new Date().getFullYear()} CodeKori.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
