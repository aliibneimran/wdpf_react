import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
                {/* <!-- ltn__header-top-area start --> */}
                <div className="ltn__header-top-area top-area-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="ltn__top-bar-menu">
                                    <ul>
                                        <li><Link  to="/mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail"></i> info@webmail.com</Link></li>
                                        <li><Link  to="/locations"><i className="icon-placeholder"></i> 15/A, Nest Tower, NYC</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="top-bar-right text-end">
                                    <div className="ltn__top-bar-menu">
                                        <ul>
                                            <li>
                                                {/* <!-- ltn__language-menu --> */}
                                                <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                                    <ul>
                                                        <li><Link to="/#" className="dropdown-toggle"><span className="active-currency">English</span></Link>
                                                            <ul>
                                                                <li><Link  to="/#">Arabic</Link></li>
                                                                <li><Link  to="/#">Bengali</Link></li>
                                                                <li><Link  to="/#">Chinese</Link></li>
                                                                <li><Link  to="/#">English</Link></li>
                                                                <li><Link  to="/#">French</Link></li>
                                                                <li><Link  to="/#">Hindi</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                {/* <!-- ltn__social-media --> */}
                                                <div className="ltn__social-media">
                                                    <ul>
                                                        <li><Link  to="/#" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                                        <li><Link  to="/#" title="Twitter"><i className="fab fa-twitter"></i></Link></li>

                                                        <li><Link  to="/#" title="Instagram"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link  to="/#" title="Dribbble"><i className="fab fa-dribbble"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__header-top-area end --> */}

                {/* <!-- ltn__header-middle-area start --> */}
                <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="site-logo-wrap">
                                    <div className="site-logo">
                                        <Link  to="/index"><img src="assets/img/logo-2.png" alt="Logo" /></Link>
                                    </div>
                                    <div className="get-support clearfix d-none">
                                        <div className="get-support-icon">
                                            <i className="icon-call"></i>
                                        </div>
                                        <div className="get-support-info">
                                            <h6>Get Support</h6>
                                            <h4><Link  to="/tel:+123456789">123-456-789-10</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col header-menu-column menu-color-white">
                                <div className="header-menu d-none d-xl-block">
                                    <nav>
                                        <div className="ltn__main-menu">
                                            <ul>
                                                <li><Link  to="/#">Home</Link></li>
                                                <li className="menu-icon"><Link  to="/about">About</Link>
                                                    <ul>
                                                        <li><Link  to="/about">About</Link></li>
                                                        <li><Link  to="/service">Services</Link></li>
                                                        <li><Link  to="/service-details">Service Details</Link></li>
                                                        <li><Link  to="/portfolio">Portfolio</Link></li>
                                                        <li><Link  to="/portfolio-details">Portfolio Details</Link></li>
                                                        <li><Link  to="/team">Team</Link></li>
                                                        <li><Link  to="/team-details">Team Details</Link></li>
                                                        <li><Link  to="/faq">FAQ</Link></li>
                                                        <li><Link  to="/locations">Google Map Locations</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-icon"><Link  to="/shop">Property</Link>
                                                    <ul>
                                                        <li><Link  to="/shop">Property List</Link></li>
                                                        <li><Link  to="/product-details">Property details </Link></li>
                                                        <li><Link  to="/#">Other Pages <span className="float-end"></span></Link>
                                                            <ul>
                                                                <li><Link  to="/cart">Cart</Link></li>
                                                                <li><Link  to="/wishlist">Wishlist</Link></li>
                                                                <li><Link  to="/checkout">Checkout</Link></li>
                                                                <li><Link  to="/order-tracking">Order Tracking</Link></li>
                                                                <li><Link  to="/account">My Account</Link></li>
                                                                <li><Link  to="/login">Sign in</Link></li>
                                                                <li><Link  to="/register">Register</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-icon"><Link  to="/blog">News</Link>
                                                    <ul>
                                                        <li><Link  to="/blog">News</Link></li>
                                                        <li><Link  to="/blog-details">News details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-icon"><Link  to="/#">Pages</Link>
                                                    <ul className="mega-menu">
                                                        <li><Link  to="/#">Inner Pages</Link>
                                                            <ul>
                                                                <li><Link  to="/portfolio">Portfolio</Link></li>
                                                                <li><Link  to="/portfolio-2">Portfolio - 02</Link></li>
                                                                <li><Link  to="/portfolio-details">Portfolio Details</Link></li>
                                                                <li><Link  to="/team">Team</Link></li>
                                                                <li><Link  to="/team-details">Team Details</Link></li>
                                                                <li><Link  to="/faq">FAQ</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link  to="/#">Inner Pages</Link>
                                                            <ul>
                                                                <li><Link  to="/history">History</Link></li>
                                                                <li><Link  to="/add-listing">Add Listing</Link></li>
                                                                <li><Link  to="/locations">Google Map Locations</Link></li>
                                                                <li><Link  to="/404">404</Link></li>
                                                                <li><Link  to="/contact">Contact</Link></li>
                                                                <li><Link  to="/coming-soon">Coming Soon</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link  to="/#">Shop Pages</Link>
                                                            <ul>
                                                                <li><Link  to="/shop">Shop</Link></li>
                                                                <li><Link  to="/shop-left-sidebar">Shop Left sidebar</Link></li>
                                                                <li><Link  to="/shop-right-sidebar">Shop right sidebar</Link></li>
                                                                <li><Link  to="/shop-grid">Shop Grid</Link></li>
                                                                <li><Link  to="/product-details">Shop details </Link></li>
                                                                <li><Link  to="/cart">Cart</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link  to="/shop"><img src="assets/img/banner/menu-banner-1.jpg" alt="#" /></Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><Link  to="/contact">Contact</Link></li>
                                                <li className="special-link">
                                                    <Link  to="/add-listing">Add Listing</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="col--- ltn__header-options ltn__header-options-2 ">
                                {/* <!-- Mobile Menu Button --> */}
                                <div className="mobile-menu-toggle d-xl-none">
                                    <Link  to="/#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                        <svg viewBox="0 0 800 600">
                                            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                            <path d="M300,320 L540,320" id="middle"></path>
                                            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__header-middle-area end --> */}
            </header>

            {/* <!-- Utilize Cart Menu Start --> */}
            <div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
                <div className="ltn__utilize-menu-inner ltn__scrollbar">
                    <div className="ltn__utilize-menu-head">
                        <span className="ltn__utilize-menu-title">Cart</span>
                        <button className="ltn__utilize-close">×</button>
                    </div>
                    <div className="mini-cart-product-area ltn__scrollbar">
                        <div className="mini-cart-item clearfix">
                            <div className="mini-cart-img">
                                <Link  to="/#"><img src="assets/img/product/1.png" alt="img" /></Link>
                                <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                            </div>
                            <div className="mini-cart-info">
                                <h6><Link  to="/#">Wheel Bearing Retainer</Link></h6>
                                <span className="mini-cart-quantity">1 x $65.00</span>
                            </div>
                        </div>
                        <div className="mini-cart-item clearfix">
                            <div className="mini-cart-img">
                                <Link  to="/#"><img src="assets/img/product/2.png" alt="img" /></Link>
                                <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                            </div>
                            <div className="mini-cart-info">
                                <h6><Link  to="/#">3 Rooms Manhattan</Link></h6>
                                <span className="mini-cart-quantity">1 x $85.00</span>
                            </div>
                        </div>
                        <div className="mini-cart-item clearfix">
                            <div className="mini-cart-img">
                                <Link  to="/#"><img src="assets/img/product/3.png" alt="img" /></Link>
                                <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                            </div>
                            <div className="mini-cart-info">
                                <h6><Link  to="/#">OE Replica Wheels</Link></h6>
                                <span className="mini-cart-quantity">1 x $92.00</span>
                            </div>
                        </div>
                        <div className="mini-cart-item clearfix">
                            <div className="mini-cart-img">
                                <Link  to="/#"><img src="assets/img/product/4.png" alt="img" /></Link>
                                <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                            </div>
                            <div className="mini-cart-info">
                                <h6><Link  to="/#">Shock Mount Insulator</Link></h6>
                                <span className="mini-cart-quantity">1 x $68.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="mini-cart-footer">
                        <div className="mini-cart-sub-total">
                            <h5>Subtotal: <span>$310.00</span></h5>
                        </div>
                        <div className="btn-wrapper">
                            <Link  to="/cart" className="theme-btn-1 btn btn-effect-1">View Cart</Link>
                            <Link  to="/cart" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
                        </div>
                        <p>Free Shipping on All Orders Over $100!</p>
                    </div>

                </div>
            </div>
            {/* <!-- Utilize Cart Menu End --> */}

            {/* <!-- Utilize Mobile Menu Start --> */}
            <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
                <div className="ltn__utilize-menu-inner ltn__scrollbar">
                    <div className="ltn__utilize-menu-head">
                        <div className="site-logo">
                            <Link  to="/index"><img src="assets/img/logo.png" alt="Logo" /></Link>
                        </div>
                        <button className="ltn__utilize-close">×</button>
                    </div>
                    <div className="ltn__utilize-menu-search-form">
                        <form action="#">
                            <input type="text" placeholder="Search..." />
                            <button><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div className="ltn__utilize-menu">
                        <ul>
                            <li><Link  to="/">Home</Link></li>
                            <li><Link  to="/about">About</Link>
                                <ul className="sub-menu">
                                    <li><Link  to="/about">About</Link></li>
                                    <li><Link  to="/service">Services</Link></li>
                                    <li><Link  to="/service-details">Service Details</Link></li>
                                    <li><Link  to="/portfolio">Portfolio</Link></li>
                                    <li><Link  to="/portfolio-2">Portfolio - 02</Link></li>
                                    <li><Link  to="/portfolio-details">Portfolio Details</Link></li>
                                    <li><Link  to="/team">Team</Link></li>
                                    <li><Link  to="/team-details">Team Details</Link></li>
                                    <li><Link  to="/faq">FAQ</Link></li>
                                    <li><Link  to="/locations">Google Map Locations</Link></li>
                                </ul>
                            </li>
                            <li><Link  to="/#">Property</Link>
                                <ul className="sub-menu">
                                    <li><Link  to="/shop">Property Grid</Link></li>
                                    <li><Link  to="/shop-list">Property List</Link></li>
                                    <li><Link  to="/shop-grid">Property No Sidebar</Link></li>
                                    <li><Link  to="/shop-left-sidebar">Property Left sidebar</Link></li>
                                    <li><Link  to="/shop-right-sidebar">Property right sidebar</Link></li>
                                    <li><Link  to="/product-details">Property details </Link></li>
                                    <li><Link  to="/cart">Cart</Link></li>
                                    <li><Link  to="/wishlist">Wishlist</Link></li>
                                    <li><Link  to="/checkout">Checkout</Link></li>
                                    <li><Link  to="/order-tracking">Order Tracking</Link></li>
                                    <li><Link  to="/account">My Account</Link></li>
                                    <li><Link  to="/login">Sign in</Link></li>
                                    <li><Link  to="/register">Register</Link></li>
                                </ul>
                            </li>
                            <li><Link  to="/#">News</Link>
                                <ul className="sub-menu">
                                    <li><Link  to="/blog">News</Link></li>
                                    <li><Link  to="/blog-grid">News Grid</Link></li>
                                    <li><Link  to="/blog-left-sidebar">News Left sidebar</Link></li>
                                    <li><Link  to="/blog-right-sidebar">News Right sidebar</Link></li>
                                    <li><Link  to="/blog-details">News details</Link></li>
                                </ul>
                            </li>
                            <li><Link  to="/#">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link  to="/about">About</Link></li>
                                    <li><Link  to="/service">Services</Link></li>
                                    <li><Link  to="/service-details">Service Details</Link></li>
                                    <li><Link  to="/portfolio">Portfolio</Link></li>
                                    <li><Link  to="/portfolio-2">Portfolio - 02</Link></li>
                                    <li><Link  to="/portfolio-details">Portfolio Details</Link></li>
                                    <li><Link  to="/team">Team</Link></li>
                                    <li><Link  to="/team-details">Team Details</Link></li>
                                    <li><Link  to="/faq">FAQ</Link></li>
                                    <li><Link  to="/history">History</Link></li>
                                    <li><Link  to="/add-listing">Add Listing</Link></li>
                                    <li><Link  to="/locations">Google Map Locations</Link></li>
                                    <li><Link  to="/404">404</Link></li>
                                    <li><Link  to="/contact">Contact</Link></li>
                                    <li><Link  to="/coming-soon">Coming Soon</Link></li>
                                </ul>
                            </li>
                            <li><Link  to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                        <ul>
                            <li>
                                <Link  to="/account" title="My Account">
                                    <span className="utilize-btn-icon">
                                        <i className="far fa-user"></i>
                                    </span>
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link  to="/wishlist" title="Wishlist">
                                    <span className="utilize-btn-icon">
                                        <i className="far fa-heart"></i>
                                        <sup>3</sup>
                                    </span>
                                    Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link  to="/cart" title="Shoping Cart">
                                    <span className="utilize-btn-icon">
                                        <i className="fas fa-shopping-cart"></i>
                                        <sup>5</sup>
                                    </span>
                                    Shoping Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ltn__social-media-2">
                        <ul>
                            <li><Link  to="/#" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link  to="/#" title="Twitter"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link  to="/#" title="Linkedin"><i className="fab fa-linkedin"></i></Link></li>
                            <li><Link  to="/#" title="Instagram"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Utilize Mobile Menu End --> */}
        </div>
    )
}
