import React from 'react'
import Slider from "react-slick";

export default function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    {/* <!-- SLIDER AREA START (slider-3) --> */}
    <div className="  section-bg-2">
        <Slider {...settings} className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
            {/* <!-- ltn__slide-item --> */}
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="assets/img/slider/11.jpg">
                <div className="ltn__slide-item-inner text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <div className="slide-video mb-50 d-none">
                                            <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                        <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home"></i></span> Real Estate Agency</h6>
                                        <h1 className="slide-title animated ">Find Your Dream <br/> House By Us</h1>
                                        <div className="slide-brief animated">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                        <div className="btn-wrapper animated">
                                            <a href="shop.html" className="theme-btn-1 btn btn-effect-1">Make An Enquiry</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ltn__slide-item --> */}
            <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="assets/img/slider/12.jpg">
                <div className="ltn__slide-item-inner  text-right text-end">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home"></i></span> Real Estate Agency</h6>
                                        <h1 className="slide-title animated ">Find Your Dream <br/> House By Us</h1>
                                        <div className="slide-brief animated">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                        <div className="btn-wrapper animated">
                                            <a href="shop.html" className="theme-btn-1 btn btn-effect-1">Make An Enquiry</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ltn__slide-item --> */}
            <div className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg="assets/img/slider/13.jpg">
                <div className="ltn__slide-item-inner  text-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home"></i></span> Real Estate Agency</h6>
                                        <h1 className="slide-title animated ">Find Your Dream <br/> House By Us</h1>
                                        <div className="slide-brief animated">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                        <div className="btn-wrapper animated">
                                            <a href="shop.html" className="theme-btn-1 btn btn-effect-1">Make An Enquiry</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
    {/* <!-- SLIDER AREA END --> */}
    </>
  )
}
