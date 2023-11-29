import React from 'react'
import { Link } from 'react-router-dom'

import Call from '../components/Call'

export default function About() {
  return (
    <div>
      {/* <!-- BREADCRUMB AREA START --> */}
      <div class="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__breadcrumb-inner">
                <h1 class="page-title">About Us</h1>
                <div class="ltn__breadcrumb-list">
                  <ul>
                    <li><Link to="/index.html"><span class="ltn__secondary-color"><i class="fas fa-home"></i></span> Home</Link></li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BREADCRUMB AREA END --> */}

      {/* <!-- ABOUT US AREA START --> */}
      <div class="ltn__about-us-area pt-120--- pb-90 mt--30">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="about-us-img-wrap about-img-left">
                <img src="assets/img/others/13.png" alt="About Us Image" />
                <div class="about-us-img-info about-us-img-info-2 about-us-img-info-3">

                  <div class="ltn__video-img ltn__animation-pulse1">
                    <img src="assets/img/others/8.png" alt="video popup bg image" />
                    <Link class="ltn__video-icon-2 ltn__video-icon-2-border---" to="/https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                      <i class="fa fa-play"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div class="about-us-info-wrap">
                <div class="section-title-area ltn__section-title-2--- mb-20">
                  <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
                  <h1 class="section-title">The Leading Real Estate
                    Rental Marketplace<span>.</span></h1>
                  <p>Over 39,000 people work for us in more than 70 countries all over the
                    This breadth of global coverage, combined with specialist services</p>
                </div>
                <ul class="ltn__list-item-half clearfix">
                  <li>
                    <i class="flaticon-home-2"></i>
                    Smart Home Design
                  </li>
                  <li>
                    <i class="flaticon-mountain"></i>
                    Beautiful Scene Around
                  </li>
                  <li>
                    <i class="flaticon-heart"></i>
                    Exceptional Lifestyle
                  </li>
                  <li>
                    <i class="flaticon-secure"></i>
                    Complete 24/7 Security
                  </li>
                </ul>
                <div class="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>"Enimad minim veniam quis nostrud exercitation <br />
                    llamco laboris. Lorem ipsum dolor sit amet" </p>
                </div>
                <div class="btn-wrapper animated">
                  <Link to="/service.html" class="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT US AREA END --> */}

      {/* <!-- FEATURE AREA START ( Feature - 6) --> */}
      <div class="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2--- text-center">
                <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
                <h1 class="section-title">Our Main Focus</h1>
              </div>
            </div>
          </div>
          <div class="row ltn__custom-gutter--- justify-content-center">
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div class="ltn__feature-icon">
                  {/* <!-- <span><i class="flaticon-house"></i></span> --> */}
                  <img src="assets/img/icons/icon-img/21.png" alt="#" />
                </div>
                <div class="ltn__feature-info">
                  <h3><Link to="/service-details.html">Buy a home</Link></h3>
                  <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                  <Link class="ltn__service-btn" to="/service-details.html">Find A Home <i class="flaticon-right-arrow"></i></Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                <div class="ltn__feature-icon">
                  {/* <!-- <span><i class="flaticon-house-3"></i></span> --> */}
                  <img src="assets/img/icons/icon-img/22.png" alt="#" />
                </div>
                <div class="ltn__feature-info">
                  <h3><Link to="/service-details.html">Rent a home</Link></h3>
                  <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                  <Link class="ltn__service-btn" to="/service-details.html">Find A Home <i class="flaticon-right-arrow"></i></Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div class="ltn__feature-icon">
                  {/* <!-- <span><i class="flaticon-deal-1"></i></span> --> */}
                  <img src="assets/img/icons/icon-img/23.png" alt="#" />
                </div>
                <div class="ltn__feature-info">
                  <h3><Link to="/service-details.html">Sell a home</Link></h3>
                  <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                  <Link class="ltn__service-btn" to="/service-details.html">Find A Home <i class="flaticon-right-arrow"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FEATURE AREA END --> */}

      {/* <!-- TEAM AREA START (Team - 3) --> */}
      <div class="ltn__team-area pt-115 pb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2--- text-center">
                <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">Team</h6>
                <h1 class="section-title">Property Agents</h1>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-6">
              <div class="ltn__team-item ltn__team-item-3---">
                <div class="team-img">
                  <img src="assets/img/team/4.jpg" alt="Image" />
                </div>
                <div class="team-info">
                  <h4><Link to="/team-details.html">Rosalina D. William</Link></h4>
                  <h6 class="ltn__secondary-color">Real Estate Broker</h6>
                  <div class="ltn__social-media">
                    <ul>
                      <li><Link to="/#"><i class="fab fa-facebook-f"></i></Link></li>
                      <li><Link to="/#"><i class="fab fa-twitter"></i></Link></li>
                      <li><Link to="/#"><i class="fab fa-linkedin"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="ltn__team-item ltn__team-item-3---">
                <div class="team-img">
                  <img src="assets/img/team/2.jpg" alt="Image" />
                </div>
                <div class="team-info">
                  <h4><Link to="/team-details.html">Kelian Anderson</Link></h4>
                  <h6 class="ltn__secondary-color">Selling Agents</h6>
                  <div class="ltn__social-media">
                    <ul>
                      <li><Link to="/#"><i class="fab fa-facebook-f"></i></Link></li>
                      <li><Link to="/#"><i class="fab fa-twitter"></i></Link></li>
                      <li><Link to="/#"><i class="fab fa-linkedin"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="ltn__team-item ltn__team-item-3---">
                <div class="team-img">
                  <img src="assets/img/team/5.jpg" alt="Image" />
                </div>
                <div class="team-info">
                  <h4><Link to="/team-details.html">Miranda H. Halim</Link></h4>
                  <h6 class="ltn__secondary-color">Property Seller</h6>
                  <div class="ltn__social-media">
                    <ul>
                      <li><Link to="/#"><i class="fab fa-facebook-f"></i></Link></li>
                      <li><Link to="/#"><i class="fab fa-twitter"></i></Link></li>
                      <li><Link to="/#"><i class="fab fa-linkedin"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- TEAM AREA END --> */}

      {/* <!-- TESTIMONIAL AREA START (testimonial-7) --> */}
      <div class="ltn__testimonial-area section-bg-1--- bg-image-top pt-120 pb-70" data-bs-bg="img/bg/20.jpg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2--- text-center">
                <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonial</h6>
                <h1 class="section-title">Clients Feedback</h1>
              </div>
            </div>
          </div>
          <div class="row ltn__testimonial-slider-5-active slick-arrow-1">
            <div class="col-lg-4">
              <div class="ltn__testimonial-item ltn__testimonial-item-7">
                <div class="ltn__testimoni-info">
                  <p><i class="flaticon-left-quote-1"></i>
                    Precious ipsum dolor sit amet
                    consectetur adipisicing elit, sed dos
                    mod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad min
                    veniam, quis nostrud Precious ips
                    um dolor sit amet, consecte</p>
                  <div class="ltn__testimoni-info-inner">
                    <div class="ltn__testimoni-img">
                      <img src="assets/img/testimonial/1.jpg" alt="#" />
                    </div>
                    <div class="ltn__testimoni-name-designation">
                      <h5>Jacob William</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="ltn__testimonial-item ltn__testimonial-item-7">
                <div class="ltn__testimoni-info">
                  <p><i class="flaticon-left-quote-1"></i>
                    Precious ipsum dolor sit amet
                    consectetur adipisicing elit, sed dos
                    mod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad min
                    veniam, quis nostrud Precious ips
                    um dolor sit amet, consecte</p>
                  <div class="ltn__testimoni-info-inner">
                    <div class="ltn__testimoni-img">
                      <img src="assets/img/testimonial/2.jpg" alt="#" />
                    </div>
                    <div class="ltn__testimoni-name-designation">
                      <h5>Kelian Anderson</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="ltn__testimonial-item ltn__testimonial-item-7">
                <div class="ltn__testimoni-info">
                  <p><i class="flaticon-left-quote-1"></i>
                    Precious ipsum dolor sit amet
                    consectetur adipisicing elit, sed dos
                    mod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad min
                    veniam, quis nostrud Precious ips
                    um dolor sit amet, consecte</p>
                  <div class="ltn__testimoni-info-inner">
                    <div class="ltn__testimoni-img">
                      <img src="assets/img/testimonial/3.jpg" alt="#" />
                    </div>
                    <div class="ltn__testimoni-name-designation">
                      <h5>Adam Joseph</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="ltn__testimonial-item ltn__testimonial-item-7">
                <div class="ltn__testimoni-info">
                  <p><i class="flaticon-left-quote-1"></i>
                    Precious ipsum dolor sit amet
                    consectetur adipisicing elit, sed dos
                    mod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad min
                    veniam, quis nostrud Precious ips
                    um dolor sit amet, consecte</p>
                  <div class="ltn__testimoni-info-inner">
                    <div class="ltn__testimoni-img">
                      <img src="assets/img/testimonial/4.jpg" alt="#" />
                    </div>
                    <div class="ltn__testimoni-name-designation">
                      <h5>James Carter</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- TESTIMONIAL AREA END --> */}

      {/* <!-- BLOG AREA START (blog-3) --> */}
      <div class="ltn__blog-area pt-115--- pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2--- text-center">
                <h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">News & Blogs</h6>
                <h1 class="section-title">Leatest News Feeds</h1>
              </div>
            </div>
          </div>
          <div class="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
            {/* <!-- Blog Item --> */}
            <div class="col-lg-12">
              <div class="ltn__blog-item ltn__blog-item-3">
                <div class="ltn__blog-img">
                  <Link to="/blog-details.html"><img src="assets/img/blog/1.jpg" alt="#" /></Link>
                </div>
                <div class="ltn__blog-brief">
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <Link to="/#"><i class="far fa-user"></i>by: Admin</Link>
                      </li>
                      <li class="ltn__blog-tags">
                        <Link to="/#"><i class="fas fa-tags"></i>Decorate</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title"><Link to="/blog-details.html">10 Brilliant Ways To Decorate Your Home</Link></h3>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>June 24, 2021</li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <Link to="/blog-details.html">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div class="col-lg-12">
              <div class="ltn__blog-item ltn__blog-item-3">
                <div class="ltn__blog-img">
                  <Link to="/blog-details.html"><img src="assets/img/blog/2.jpg" alt="#" /></Link>
                </div>
                <div class="ltn__blog-brief">
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <Link to="/#"><i class="far fa-user"></i>by: Admin</Link>
                      </li>
                      <li class="ltn__blog-tags">
                        <Link to="/#"><i class="fas fa-tags"></i>Interior</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title"><Link to="/blog-details.html">The Most Inspiring Interior Design Of 2021</Link></h3>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>July 23, 2021</li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <Link to="/blog-details.html">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div class="col-lg-12">
              <div class="ltn__blog-item ltn__blog-item-3">
                <div class="ltn__blog-img">
                  <Link to="/blog-details.html"><img src="assets/img/blog/3.jpg" alt="#" /></Link>
                </div>
                <div class="ltn__blog-brief">
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <Link to="/#"><i class="far fa-user"></i>by: Admin</Link>
                      </li>
                      <li class="ltn__blog-tags">
                        <Link to="/#"><i class="fas fa-tags"></i>Estate</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title"><Link to="/blog-details.html">Recent Commercial Real Estate Transactions</Link></h3>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>May 22, 2021</li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <Link to="/blog-details.html">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {/* <!-- Blog Item --> */}
            <div class="col-lg-12">
              <div class="ltn__blog-item ltn__blog-item-3">
                <div class="ltn__blog-img">
                  <Link to="/blog-details.html"><img src="assets/img/blog/4.jpg" alt="#" /></Link>
                </div>
                <div class="ltn__blog-brief">
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <Link to="/#"><i class="far fa-user"></i>by: Admin</Link>
                      </li>
                      <li class="ltn__blog-tags">
                        <Link to="/#"><i class="fas fa-tags"></i>Room</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title"><Link to="/blog-details.html">Renovating a Living Room? Experts Share Their Secrets</Link></h3>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>June 24, 2021</li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <Link to="/blog-details.html">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {/* <!-- Blog Item --> */}
            <div class="col-lg-12">
              <div class="ltn__blog-item ltn__blog-item-3">
                <div class="ltn__blog-img">
                  <Link to="/blog-details.html"><img src="assets/img/blog/5.jpg" alt="#" /></Link>
                </div>
                <div class="ltn__blog-brief">
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <Link to="/#"><i class="far fa-user"></i>by: Admin</Link>
                      </li>
                      <li class="ltn__blog-tags">
                        <Link to="/#"><i class="fas fa-tags"></i>Trends</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title"><Link to="/blog-details.html">7 home trends that will shape your house in 2021</Link></h3>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>June 24, 2021</li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <Link to="/blog-details.html">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BLOG AREA END --> */}

      <Call></Call>
    </div>
  )
}
