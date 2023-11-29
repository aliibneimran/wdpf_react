import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className="ltn__footer-area  ">
                <div className="footer-top-area  section-bg-2 plr--5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-about-widget">
                                    <div className="footer-logo">
                                        <div className="site-logo">
                                            <img src="assets/img/logo-2.png" alt="Logo" />
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                                    <div className="footer-address">
                                        <ul>
                                            <li>
                                                <div className="footer-address-icon">
                                                    <i className="icon-placeholder"></i>
                                                </div>
                                                <div className="footer-address-info">
                                                    <p>Brooklyn, New York, United States</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-address-icon">
                                                    <i className="icon-call"></i>
                                                </div>
                                                <div className="footer-address-info">
                                                    <p><Link to="tel:+0123-456789">+0123-456789</Link></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-address-icon">
                                                    <i className="icon-mail"></i>
                                                </div>
                                                <div className="footer-address-info">
                                                    <p><Link to="mailto:example@example.com">example@example.com</Link></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ltn__social-media mt-20">
                                        <ul>
                                            <li><Link to="#" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="#" title="Twitter"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link to="#" title="Linkedin"><i className="fab fa-linkedin"></i></Link></li>
                                            <li><Link to="#" title="Youtube"><i className="fab fa-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-menu-widget clearfix">
                                    <h4 className="footer-title">Company</h4>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="about.html">About</Link></li>
                                            <li><Link to="blog.html">Blog</Link></li>
                                            <li><Link to="shop.html">All Products</Link></li>
                                            <li><Link to="locations.html">Locations Map</Link></li>
                                            <li><Link to="faq.html">FAQ</Link></li>
                                            <li><Link to="contact.html">Contact us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-menu-widget clearfix">
                                    <h4 className="footer-title">Services</h4>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="order-tracking.html">Order tracking</Link></li>
                                            <li><Link to="wishlist.html">Wish List</Link></li>
                                            <li><Link to="login.html">Login</Link></li>
                                            <li><Link to="account.html">My account</Link></li>
                                            <li><Link to="about.html">Terms & Conditions</Link></li>
                                            <li><Link to="about.html">Promotional Offers</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget footer-menu-widget clearfix">
                                    <h4 className="footer-title">Customer Care</h4>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="login.html">Login</Link></li>
                                            <li><Link to="account.html">My account</Link></li>
                                            <li><Link to="wishlist.html">Wish List</Link></li>
                                            <li><Link to="order-tracking.html">Order tracking</Link></li>
                                            <li><Link to="faq.html">FAQ</Link></li>
                                            <li><Link to="contact.html">Contact us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                                <div className="footer-widget footer-newsletter-widget">
                                    <h4 className="footer-title">Newsletter</h4>
                                    <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                                    <div className="footer-newsletter">
                                        <form action="#">
                                            <input type="email" name="email" placeholder="Email*" />
                                            <div className="btn-wrapper">
                                                <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                    <h5 className="mt-30">We Accept</h5>
                                    <img src="assets/img/icons/payment-4.png" alt="Payment Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
                    <div className="container-fluid ltn__border-top-2">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="ltn__copyright-design clearfix">
                                    <p>All Rights Reserved @ Company <span className="current-year"></span></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 align-self-center">
                                <div className="ltn__copyright-menu text-end">
                                    <ul>
                                        <li><Link to="#">Terms & Conditions</Link></li>
                                        <li><Link to="#">Claim</Link></li>
                                        <li><Link to="#">Privacy & Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
