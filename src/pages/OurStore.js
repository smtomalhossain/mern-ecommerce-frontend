import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";

const OurStore = () => {

  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5 ">
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
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div className="from-check d-flex gap-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="from-check d-flex gap-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out Of Stock
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-3">
                  <div className=" form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Form"
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Color</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="from-check d-flex gap-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (1)
                    </label>
                  </div>
                  <div className="from-check d-flex gap-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (10)
                    </label>
                  </div>
                  <div className="from-check d-flex gap-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-3"
                    />
                    <label className="form-check-label" htmlFor="color-3">
                      XL (8)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div className="product-tags d-flex align-items-center flex-wrap gap-3">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-2">
                    Headphone
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-product d-flex align-items-center mb-2">
                    <div className="w-50">
                      <img
                        src="/images/watch.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="random-product-content w-50">
                      <h6>
                        Kids Headphones Bulk 10 Pack Multi Colored For Students
                      </h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                  <div className="random-product d-flex align-items-center">
                    <div className="w-50">
                      <img
                        src="/images/watch3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="random-product-content w-50">
                      <h6>
                        Kids Headphones Bulk 10 Pack Multi Colored For Students
                      </h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-5">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>Sort By:</p>
                    <select name="" defaultValue={"DEFAULT"} id="" className="form-control form-select">
                      <option disabled value="DEFAULT">Select</option>
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, high to low</option>
                      <option value="price-descending">Price, low to high</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <p className="total-product mb-0">26 Product</p>
                    <div className="d-flex gap-3 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3)
                        }}
                        src="/images/gr4.svg" alt="grid" className={`${grid === 3 && "active"} d-block img-fluid text-white`} />
                      <img
                        onClick={() => {
                          setGrid(4)
                        }}
                        src="/images/gr3.svg" alt="grid" className={`${grid === 4 && "active"} d-block img-fluid text-white`} />
                      <img
                        onClick={() => {
                          setGrid(6)
                        }}
                        src="/images/gr2.svg" alt="grid" className={`${grid === 6 && "active"} d-block img-fluid text-white`} />
                      <img
                        onClick={() => {
                          setGrid(12)
                        }}
                        src="/images/gr.svg" alt="grid" className={`${grid === 12 && "active"} d-block img-fluid text-white`} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pd-5">
                <div className="d-flex flex-wrap  gap-3 align-items-center">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;

