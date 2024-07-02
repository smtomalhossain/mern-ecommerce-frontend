import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex">
          <div>
            <img src="/images/watch1.jpg" className="img-fluid" alt="" />
          </div>

          <div className="special-product-content">
            <h6 className="brand mb-3">Havels</h6>
            <h5 className="product-title">
              Apple Watch Series 4 Apple Watch Series 4
            </h5>
            <div className="mb-2">
              <ReactStars
                count={5}
                size={24}
                value="4"
                edit={false}
                activeColor="#ffd700"
              />
            </div>

            <p className="product-price mb-2">
              <span className="new-price">$100</span>&nbsp;
              <strike className="old-price">$200</strike>
            </p>
            <div className="discount-time d-flex align-items-center gap-1">
              <p className="mb-0">
                <b className="">20</b>&nbsp;<span>Days</span>
              </p>
              <div className="d-flex gap-2 d-flex align-items-center">
                <span className="badge rounded-circle p-3">05</span>:
                <span className="badge rounded-circle p-3 ">55</span>:
                <span className="badge rounded-circle p-3 ">43</span>
              </div>
            </div>
            <div className="product-count mt-3">
              <p>Product: 8</p>
              <div className="progress ">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "30%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button mt-3">ADD TO CART</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
