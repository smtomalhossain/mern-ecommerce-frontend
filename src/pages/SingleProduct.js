import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { Link } from 'react-router-dom';
import { FaCopy, FaRegHeart } from 'react-icons/fa';
import { FaCodeCompare } from 'react-icons/fa6';



const SingleProduct = () => {
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  const [orderedProduct, setorderedProduct] = useState(true);
  const props = { width: 400, height: 500, zoomWidth: 600, img: "/images/watch3.jpg" };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="single-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl px-4">
          <div className="row description-card ">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-3">
                <div>
                  <img src="/images/watch4.jpg" className='img-fluid' alt="" />
                </div>
                <div>
                  <img src="/images/watch4.jpg" className='img-fluid' alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className='title'>Kids headphone Bulk 10 Pack Multi Colored For Student</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className='price'>$ 120</p>
                  <div className="d-flex align-items-center gap-3">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mt-3 total-review">(3 Reviews)</p>
                  </div>
                  <a className='review-btn' href="#review">Write a Review</a>
                </div>
                <div className="py-3">
                  <div className='d-flex align-items-center gap-2 my-2'>
                    <h3 className='sub-heading'>Type:</h3>
                    <p className='sub-details mb-2'>Watches</p>
                  </div>
                  <div className='d-flex align-items-center gap-2 my-2'>
                    <h3 className='sub-heading'>Brand:</h3>
                    <p className='sub-details mb-2'>Hevens</p>
                  </div>
                  <div className='d-flex align-items-center gap-2 my-2'>
                    <h3 className='sub-heading'>Category:</h3>
                    <p className='sub-details mb-2'>Watch</p>
                  </div>
                  <div className='d-flex align-items-center gap-2'>
                    <h3 className='sub-heading'>Availability:</h3>
                    <p className='sub-details mb-2'>In Stock</p>
                  </div>
                  <div className='d-flex align-items-center gap-2 my-2'>
                    <h3 className='sub-heading'>Size:</h3>
                    <div className="d-flex flex-wrap gap-3">
                      <span className='mb-2 badge border border-1 bg-white text-dark border-secondary'>S</span>
                      <span className='mb-2 badge border border-1 bg-white text-dark border-secondary'>L</span>
                      <span className='mb-2 badge border border-1 bg-white text-dark border-secondary'>M</span>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-2 my-2'>
                    <h3 className='sub-heading mb-3'>Color:</h3>
                    <Color />
                  </div>
                  <div className='d-flex align-items-center gap-2'>
                    <h3 className='sub-heading'>Quantity:</h3>
                    <div className='quantity'>
                      <input type="number" style={{width: "60px"}} min={1} max={10} name="quantity" className='form-control mb-2' />
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                    <button className='button border-0'>Add To Cart</button>
                    <button className='button border-0 signup'>Buy It Nowt</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mb-4">
                      <div>
                        <a href=""><FaCodeCompare className='me-1' /> Add TO Compare</a>
                      </div>
                      <div>
                        <a href=""><FaRegHeart className='me-1' /> Add TO Wishlist</a>
                      </div>
                    </div>
                    <div className=' border-bottom d-flex flex-column my-2 mb-2'>
                    <h3 className='sub-heading'>Shipping & Returns</h3>
                    <p className='sub-details mb-2'>Free shipping and returns available on all orders!
                    We ship all US domestic orders  <b>within 5-10 business days!</b>
                    </p>
                  </div>
                  <div className='d-flex align-items-center gap-2 my-2'>
                    <h3 className='sub-heading'>Copy Product Link:</h3>
                    <a className='mb-4' href="javascript:void(0);"
                    onClick={() => {copyToClipboard("http://localhost:3000/product/:id")}}
                    ><FaCopy />
                    </a>
                  </div>
                  <div className='payment-methods home-wrapper-2 d-flex flex-column my-2 mb-2'>
                    <h3 className='sub-heading text-center mt-4'>Payment methods</h3>
                    <div className="d-flex justify-content-center">
                    <img src="/images/pypal.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl px-4">
          <div className="row description-card">
            <div className="col-5">
              <h3 className="reviews-heading mb-4 text-center">Description
              </h3>
              <div className="description-card-image">
                <img src="/images/dispaly.webp" className='img-fluid' alt="" />
              </div>
            </div>
            <div className="col-7">
              <div className="description-card-details">
                <h3 className="reviews-heading mb-4 text-center">Information:
                </h3>
                <div>
                  <div className="product-sub-details">
                    <h5>Weight</h5>
                    <p>2 lbs
                    </p>
                  </div>
                  <div className="product-sub-details">
                    <h5>Product</h5>
                    <p>Purchase this product on rag-bone.com
                    </p>
                  </div>
                  <div className="product-sub-details">
                    <h5>Color</h5>
                    <p>
                      Gray, Black
                    </p>
                  </div>
                  <div className="product-sub-details">
                    <h5>Size</h5>
                    <p>
                      S, M, L, XL
                    </p>
                  </div>
                  <div className="product-sub-details">
                    <h5>Model</h5>
                    <p>
                      The model is wearing size: S, Model height: 5.71 ft / 174
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="reviews-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 id='review'>Customer Reviews</h4>
                    <div className=" mb-2 d-flex align-items-center gap-2">
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {
                    orderedProduct && (
                      <div>
                        <a className='text-dark text-decoration-underline' href="">Write a review</a>
                      </div>
                    )
                  }
                </div>
                <div className="review-form py-4">
                  <h4>Write a Reviews</h4>

                  <ReactStars
                    count={5}
                    size={24}
                    value="0"
                    edit={true}
                    activeColor="#ffd700"
                  />
                  <form action="" className="d-flex flex-column gap-3">
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control mb-3"
                        cols="30"
                        rows="5"
                        placeholder="Comments"
                      ></textarea>
                      <div className="d-flex justify-content-end">
                        <button type="submit" className="btn button">Submit Reviews</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-2 align-items-center">
                      <h6 className="mb-0">Shohag</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">Good quality product</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="Products-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Trending Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
