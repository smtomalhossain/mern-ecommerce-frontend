import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <>
      <header className="header-top-strip pt-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className=" col-4 flex-grow-1 ">
              <p className="text-white">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-4">
              <p className="text-white text-end">
                Hotline: <a href="tel:+880 1768-447320">+880 1768-447320</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">CodeKori</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Your Product"
                  aria-label="Search Your Product"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between gap-4">
                <div>
                  <Link to="/compare-product" className="d-flex gap-3 align-items-center">
                    <img src="/images/compare.svg" alt="" />
                    <p className="mb-0">
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex gap-3 align-items-center">
                    <img src="/images/wishlist1.svg" className="text-white" alt="" />
                    <p className="mb-0">
                      Favorites <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex gap-3 align-items-center">
                    <img src="/images/user.svg" alt="" />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex gap-3 align-items-center">
                    <img src="/images/cart.svg" alt="" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">$100</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-content-center gap-4">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle d-flex align-items-center mt-1 bg-transparent border-0 gap-4"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img src="/images/menu.svg" alt="" /><span>Shop Catagories</span>
                    </button>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-content-center gap-3 py-3">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
