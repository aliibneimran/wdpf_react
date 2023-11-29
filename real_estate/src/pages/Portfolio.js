import React from 'react'
import { Link } from 'react-router-dom'


export default function Portfolio() {
    return (
        <>
            <div>
                {/* BREADCRUMB AREA START */}
                <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-img " data-bs-bg="img/bg/14.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__breadcrumb-inner">
                                    <h1 className="page-title">Our Portfolio</h1>
                                    <div className="ltn__breadcrumb-list">
                                        <ul>
                                            <li><Link to="/index.html"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                            <li>Portfolio</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BREADCRUMB AREA END */}
                {/* Gallery area start */}
                <div className="ltn__gallery-area mb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__gallery-menu">
                                    <div className="ltn__gallery-filter-menu portfolio-filter text-uppercase mb-50">
                                        <button data-filter="*" className="active">all</button>
                                        <button data-filter=".filter_category_1">Houses</button>
                                        <button data-filter=".filter_category_2">Retail</button>
                                        <button data-filter=".filter_category_3">Condos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Portfolio Wrapper Start*/}
                        <div className="ltn__gallery-active row ltn__gallery-style-1">
                            <div className="ltn__gallery-sizer col-1" />
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_3 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/1.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-search" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">Portfolio Link </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/#ltn__inline_description_1" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/2.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="far fa-file-alt" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">Inline Description </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_1 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="///www.youtube.com/embed/6v2L2UGZJAM?version=3" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/3.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fab fa-youtube" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">Youtube Video </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_3 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="///player.vimeo.com/video/49583118?version=3" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/4.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fab fa-vimeo-v" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">Vimeo Video </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/media/1.mp4" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/5.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-video" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">HTML5 Video </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_1 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.9076122223137!2d144.96590401578402!3d-37.81779982944919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b6af832249%3A0xe39e415e49a7c44e!2sFlinders%20Street%20Railway%20Station!5e0!3m2!1sen!2sbd!4v1598113544515!5m2!1sen!2sbd" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/6.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">Google Map </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_3 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection" data-bs-lc-caption="Your caption Here">
                                            <img src="assets/img/gallery/7.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fab fa-acquisitions-incorporated" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">img Caption </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/no-img.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/8.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-not-equal" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">Not Found</Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_1 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/9.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-search" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">Portfolio Link </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_3 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/10.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-search" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">Portfolio Link </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/1.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-search" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">Portfolio Link </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_1 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/2.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-search" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details.html">Portfolio Link </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="ltn__inline_description_1" style={{ display: 'none' }}>
                            <h4 className="first">This content comes from a hidden element on that page</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi eu elit tempor facilisis id et neque. Nulla sit amet sem sapien. Vestibulum imperdiet porta ante ac ornare. Nulla et lorem eu nibh adipiscing ultricies nec at lacus. Cras laoreet ultricies sem, at blandit mi eleifend aliquam. Nunc enim ipsum, vehicula non pretium varius, cursus ac tortor.</p>
                            <p>Vivamus fringilla congue laoreet. Quisque ultrices sodales orci, quis rhoncus justo auctor in. Phasellus dui eros, bibendum eu feugiat ornare, faucibus eu mi. Nunc aliquet tempus sem, id aliquam diam varius ac. Maecenas nisl nunc, molestie vitae eleifend vel.</p>
                        </div>
                        <div className="btn-wrapper text-center">
                            <Link to="/#" className="btn btn-transparent btn-effect-1 btn-border">LOAD MORE +</Link>
                        </div>
                        {/* pagination start */}
                        {/* 
      <div class="row">
          <div class="col-lg-12">
              <div class="ltn__pagination text-center margin-top-50">
                  <ul>
                      <li class="arrow-icon"><Link to="/#"> &leftarrow; </Link></li>
                      <li class="active"><Link to="/blog.html">1</Link></li>
                      <li><Link to="/blog-2.html">2</Link></li>
                      <li><Link to="/blog-2.html">3</Link></li>
                      <li><Link to="/blog-2.html">...</Link></li>
                      <li><Link to="/blog-2.html">10</Link></li>
                      <li class="arrow-icon"><Link to="/#"> &rightarrow; </Link></li>
                  </ul>
              </div>
          </div>
      </div>
      */}
                        {/* pagination end */}
                    </div>
                </div>
                {/* Gallery area end */}
                {/* CALL TO ACTION START (call-to-action-4) */}
                <div className="ltn__call-to-action-area ltn__call-to-action-4 bg-img pt-115 pb-120" data-bs-bg="img/bg/6.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="call-to-action-inner call-to-action-inner-4 text-center">
                                    <div className="section-title-area ltn__section-title-2">
                                        <h6 className="section-subtitle ltn__secondary-color">//  any question you have  //</h6>
                                        <h1 className="section-title white-color">897-876-987-90</h1>
                                    </div>
                                    <div className="btn-wrapper">
                                        <Link to="/tel:+123456789" className="theme-btn-1 btn btn-effect-1">MAKE A CALL</Link>
                                        <Link to="/contact.html" className="btn btn-transparent btn-effect-3 white-color">CONTACT US</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ltn__call-to-4-img-1">
                        {/* <img src="assets/img/bg/12.png" alt="#"> */}
                        <img src="assets/img/slider/21.png" alt="#" />
                    </div>
                    <div className="ltn__call-to-4-img-2">
                        <img src="assets/img/bg/11.png" alt="#" />
                    </div>
                </div>
                {/* CALL TO ACTION END */}
                {/* BLOG AREA START (blog-3) */}
                <div className="ltn__blog-area pt-120 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area ltn__section-title-2--- text-center">
                                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">News &amp; Blogs</h6>
                                    <h1 className="section-title">Leatest News Feeds</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
                            {/* Blog Item */}
                            <div className="col-lg-12">
                                <div className="ltn__blog-item ltn__blog-item-3">
                                    <div className="ltn__blog-img">
                                        <Link to="/blog-details.html"><img src="assets/img/blog/1.jpg" alt="#" /></Link>
                                    </div>
                                    <div className="ltn__blog-brief">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-author">
                                                    <Link to="/#"><i className="far fa-user" />by: Admin</Link>
                                                </li>
                                                <li className="ltn__blog-tags">
                                                    <Link to="/#"><i className="fas fa-tags" />Decorate</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="ltn__blog-title"><Link to="/blog-details.html">10 Brilliant Ways To Decorate Your Home</Link></h3>
                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
                                                </ul>
                                            </div>
                                            <div className="ltn__blog-btn">
                                                <Link to="/blog-details.html">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Item */}
                            <div className="col-lg-12">
                                <div className="ltn__blog-item ltn__blog-item-3">
                                    <div className="ltn__blog-img">
                                        <Link to="/blog-details.html"><img src="assets/img/blog/2.jpg" alt="#" /></Link>
                                    </div>
                                    <div className="ltn__blog-brief">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-author">
                                                    <Link to="/#"><i className="far fa-user" />by: Admin</Link>
                                                </li>
                                                <li className="ltn__blog-tags">
                                                    <Link to="/#"><i className="fas fa-tags" />Interior</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="ltn__blog-title"><Link to="/blog-details.html">The Most Inspiring Interior Design Of 2021</Link></h3>
                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2021</li>
                                                </ul>
                                            </div>
                                            <div className="ltn__blog-btn">
                                                <Link to="/blog-details.html">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Item */}
                            <div className="col-lg-12">
                                <div className="ltn__blog-item ltn__blog-item-3">
                                    <div className="ltn__blog-img">
                                        <Link to="/blog-details.html"><img src="assets/img/blog/3.jpg" alt="#" /></Link>
                                    </div>
                                    <div className="ltn__blog-brief">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-author">
                                                    <Link to="/#"><i className="far fa-user" />by: Admin</Link>
                                                </li>
                                                <li className="ltn__blog-tags">
                                                    <Link to="/#"><i className="fas fa-tags" />Estate</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="ltn__blog-title"><Link to="/blog-details.html">Recent Commercial Real Estate Transactions</Link></h3>
                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="far fa-calendar-alt" />May 22, 2021</li>
                                                </ul>
                                            </div>
                                            <div className="ltn__blog-btn">
                                                <Link to="/blog-details.html">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Item */}
                            <div className="col-lg-12">
                                <div className="ltn__blog-item ltn__blog-item-3">
                                    <div className="ltn__blog-img">
                                        <Link to="/blog-details.html"><img src="assets/img/blog/4.jpg" alt="#" /></Link>
                                    </div>
                                    <div className="ltn__blog-brief">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-author">
                                                    <Link to="/#"><i className="far fa-user" />by: Admin</Link>
                                                </li>
                                                <li className="ltn__blog-tags">
                                                    <Link to="/#"><i className="fas fa-tags" />Room</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="ltn__blog-title"><Link to="/blog-details.html">Renovating a Living Room? Experts Share Their Secrets</Link></h3>
                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
                                                </ul>
                                            </div>
                                            <div className="ltn__blog-btn">
                                                <Link to="/blog-details.html">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Item */}
                            <div className="col-lg-12">
                                <div className="ltn__blog-item ltn__blog-item-3">
                                    <div className="ltn__blog-img">
                                        <Link to="/blog-details.html"><img src="assets/img/blog/5.jpg" alt="#" /></Link>
                                    </div>
                                    <div className="ltn__blog-brief">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-author">
                                                    <Link to="/#"><i className="far fa-user" />by: Admin</Link>
                                                </li>
                                                <li className="ltn__blog-tags">
                                                    <Link to="/#"><i className="fas fa-tags" />Trends</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="ltn__blog-title"><Link to="/blog-details.html">7 home trends that will shape your house in 2021</Link></h3>
                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
                                                </ul>
                                            </div>
                                            <div className="ltn__blog-btn">
                                                <Link to="/blog-details.html">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                </div>
                {/* BLOG AREA END */}
                {/* BRAND LOGO AREA START */}
                <div className="ltn__brand-logo-area ltn__brand-logo-1 pt-80--- pb-110 plr--9">
                    <div className="container-fluid">
                        <div className="row ltn__brand-logo-active">
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/1.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/2.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/3.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/4.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/5.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/3.png" alt="Brand Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BRAND LOGO AREA END */}
            </div>

        </>
    )
}
