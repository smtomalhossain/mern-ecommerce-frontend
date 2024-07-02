import React from "react";
import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
import services from "../Utils/Data";

const Home = () => {
  let location = useLocation();
  return (
    <>
    <Meta title={"Happy Shopping"}/>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-2 pe-0">
                <img
                  src="/images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h5>Best Discount</h5>
                  <h4>Special Sale</h4>
                  <p>
                    From $999.00 or $41.62/mo. for 24 mo. <br /> Footnote*
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-1 justify-content-between align-items-center">
                <div className="small-banner position-relative p-2 ps-0">
                  <img
                    src="/images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>BEST SALE</h5>
                    <h4>Laptops Max</h4>
                    <p>
                      From $999.00 or <br /> $41.62/mo. for 24 mo. Footnote*
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2 ps-0">
                  <img
                    src="/images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>15% OFF</h5>
                    <h4>Smartwatch 7</h4>
                    <p>
                      Shop the latest band <br /> styles and colors.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2 ps-0">
                  <img
                    src="/images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>NEW ARRIVAL</h5>
                    <h4>Buy IPad Air</h4>
                    <p>
                      From $599 or <br /> $49.91/mo. for 12 mo. *
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2 ps-0">
                  <img
                    src="/images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>FREE ENGRAVING</h5>
                    <h4>AirPods Max</h4>
                    <p>
                      High-fidelity playback & <br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Container>

    <Container class1="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
               {
                services?.map((i, j) => {
                  return (
                    <div className="d-flex align-items-center gap-1" key={j}>
                  <img src={i.image} alt="" />
                  <div className="ps-2">
                    <h6>{i.title}</h6>
                    <p className="mb-0">{i.tagline}</p>
                  </div>
                </div>
                )
                })
               }
              </div>
            </div>
          </div>
    </Container>

      <Container class1="home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>18 Items</p>
                  </div>
                  <div>
                    <img src="/images/camera.jpg" alt="" />
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>18 Items</p>
                  </div>
                  <div>
                    <img src="/images/speaker.jpg" alt="" />
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Computers & Laptop</h6>
                    <p>18 Items</p>
                  </div>
                  <div>
                    <img src="/images/laptop.jpg" alt="" />
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>18 Items</p>
                  </div>
                  <div>
                    <img src="/images/headphone.jpg" alt="" />
                  </div>
                </div>

                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Mobiles & Tablets</h6>
                    <p>11 Items</p>
                  </div>
                  <div>
                    <img src="/images/mobile.jpg" alt="" />
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>18 Items</p>
                  </div>
                  <div>
                    <img src="/images/speaker.jpg" alt="" />
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Computers & Laptop</h6>
                    <p>18 Items</p>
                  </div>
                  <div>
                    <img src="/images/laptop.jpg" alt="" />
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>18 Items</p>
                  </div>
                  <div>
                    <img src="/images/headphone.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class1="Products-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Trending Products</h3>
            </div>
           <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>

      <Container class1="famous-wrapper home-wrapper-2 py-5">
          <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/Sub-bannar.jpg" className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6 className="text-white">Smart Watch Serise</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
            </div>

            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/Sub-Banner2.jpg" className="img-fluid" alt="" />
              <div className="famous-content1 position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Serise</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
            </div>

            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/Sub-Banner3.jpg" className="img-fluid" alt="" />
              <div className="famous-content1 position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Serise</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
            </div>
            
            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/Sub-Banner4.jpg" className="img-fluid" alt="" />
              <div className="famous-content1 position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Serise</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
            </div>
           </div>
      </Container>

      <Container class1="special-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Product</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
      </Container>

      <Container class1="marquee-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="/images/brand-01.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-02.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-03.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-04.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-05.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-06.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-07.png" alt="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-08.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>

      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest News</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
      </Container>   
    </>
  );
};

export default Home;
