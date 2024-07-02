import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to={`${location.pathname === "/" ?  "/product/:id" : location.pathname === "/product/:id" ? "/product/id" : ":id"}`} className="product-card position-relative ">
          <div className="wish-list position-absolute">
            <button className="border-0 bg-transparent">
              <img src="/images/wish.svg" alt="" />
            </button>
          </div>
          <div className="product-image d-flex justify-content-center align-items-center ">
            <img src="/images/watch.jpg" alt="" />
            <img src="/images/watch1.jpg" alt="" />
          </div>

          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              {" "}
              Smart Watch With Advanced Health Monitoring, Fitness Tracking{" "}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              iPhone is a revolutionary new mobile phone that allows you to make
              a call by simply tapping a name or number in your address book, a
              favorites list, or a call log. It also automati..
            </p> 
            <p className="product-price">$ 100.00</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-2">
              <button className="border-0 bg-transparent">
                <img  src="/images/add-cart.svg" alt="" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/prodcompare.svg" alt="" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
