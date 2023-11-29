import React from 'react'
import { Link } from 'react-router-dom'

import Slider from '../components/Slider'

export default function Home() {
    return (
        <>

    <div className="ltn__utilize-overlay"></div>

<Slider></Slider>

    {/* <!-- CAR DEALER FORM AREA START --> */}
    <div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__car-dealer-form-tab">
                        <div className="ltn__tab-menu  text-uppercase d-none">
                            <div className="nav">
                                <Link className="active show" data-bs-toggle="tab" href="#ltn__form_tab_1_1"><i className="fas fa-car"></i>Find A Car</Link>
                                <Link data-bs-toggle="tab" href="#ltn__form_tab_1_2" className=""><i className="far fa-user"></i>Get a Dealer</Link>
                            </div>
                        </div>
                        <div className="tab-content bg-white box-shadow-1 ltn__border position-relative pb-10">
                            <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
                                <div className="car-dealer-form-inner">
                                    <form action="#" className="ltn__car-dealer-form-box row">
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                                            <select className="nice-select">
                                                <option>Choose Area</option>
                                                <option>chicago</option>
                                                <option>London</option>
                                                <option>Los Angeles</option>
                                                <option>New York</option>
                                                <option>New Jersey</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                                            <select className="nice-select">
                                                <option>Property Status</option>
                                                <option>Open house</option>
                                                <option>Rent</option>
                                                <option>Sale</option>
                                                <option>Sold</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
                                            <select className="nice-select">
                                                <option>Property Type</option>
                                                <option>Apartment</option>
                                                <option>Co-op</option>
                                                <option>Condo</option>
                                                <option>Single Family Home</option>
                                            </select>
                                        </div>
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                            <div className="btn-wrapper text-center mt-0">
                                                {/* <!-- <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> --> */}
                                                <Link to="/shop-right-sidebar.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Find Now</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ltn__form_tab_1_2">
                                <div className="car-dealer-form-inner">
                                    <form action="#" className="ltn__car-dealer-form-box row">
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                                            <select className="nice-select">
                                                <option>Choose Area</option>
                                                <option>chicago</option>
                                                <option>London</option>
                                                <option>Los Angeles</option>
                                                <option>New York</option>
                                                <option>New Jersey</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                                            <select className="nice-select">
                                                <option>Property Status</option>
                                                <option>Open house</option>
                                                <option>Rent</option>
                                                <option>Sale</option>
                                                <option>Sold</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
                                            <select className="nice-select">
                                                <option>Property Type</option>
                                                <option>Apartment</option>
                                                <option>Co-op</option>
                                                <option>Condo</option>
                                                <option>Single Family Home</option>
                                            </select>
                                        </div>
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                                            <div className="btn-wrapper text-center mt-0">
                                                {/* <!-- <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> --> */}
                                                <Link to="/shop-right-sidebar.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Properties</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- CAR DEALER FORM AREA END --> */}

    {/* <!-- FEATURE AREA START ( Feature - 6) --> */}
    <div className="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2--- text-center">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
                        <h1 className="section-title">Our Main Focus</h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__custom-gutter---  justify-content-center">
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                        <div className="ltn__feature-icon">
                            {/* <!-- <span><i className="flaticon-house"></i></span> --> */}
                            <img src="assets/img/icons/icon-img/21.png" alt="#"/>
                        </div>
                        <div className="ltn__feature-info">
                            <h3><Link to="/service-details.html">Buy a home</Link></h3>
                            <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                            <Link className="ltn__service-btn" href="service-details.html">Find A Home <i className="flaticon-right-arrow"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                        <div className="ltn__feature-icon">
                            {/* <!-- <span><i className="flaticon-house-3"></i></span> --> */}
                            <img src="assets/img/icons/icon-img/22.png" alt="#"/>
                        </div>
                        <div className="ltn__feature-info">
                            <h3><Link to="/service-details.html">Rent a home</Link></h3>
                            <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                            <Link className="ltn__service-btn" href="service-details.html">Find A Home <i className="flaticon-right-arrow"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                        <div className="ltn__feature-icon">
                            {/* <!-- <span><i className="flaticon-deal-1"></i></span> --> */}
                            <img src="assets/img/icons/icon-img/23.png" alt="#"/>
                        </div>
                        <div className="ltn__feature-info">
                            <h3><Link to="/service-details.html">Sell a home</Link></h3>
                            <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                            <Link className="ltn__service-btn" href="service-details.html">Find A Home <i className="flaticon-right-arrow"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- FEATURE AREA END --> */}

    {/* <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
    <div className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70" data-bs-bg="img/bg/20.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2--- text-center">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Area Properties</h6>
                        <h1 className="section-title">Properties By Location</h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__search-by-place-slider-1-active slick-arrow-1">
                <div className="col-lg-4">
                    <div className="ltn__search-by-place-item">
                        <div className="search-by-place-img">
                            <Link to="/product-details.html"><img src="assets/img/product-3/1.jpg" alt="#"/></Link>
                            <div className="search-by-place-badge">
                                <ul>
                                    <li>2 Properties</li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-by-place-info">
                            <h6><Link to="/locations.html">San Francisco</Link></h6>
                            <h4><Link to="/product-details.html">Mission District Area</Link></h4>
                            <div className="search-by-place-btn">
                                <Link to="/product-details.html">View Property <i className="flaticon-right-arrow"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="ltn__search-by-place-item">
                        <div className="search-by-place-img">
                            <Link to="/product-details.html"><img src="assets/img/product-3/2.jpg" alt="#"/></Link>
                            <div className="search-by-place-badge">
                                <ul>
                                    <li>5 Properties</li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-by-place-info">
                            <h6><Link to="/locations.html">New York</Link></h6>
                            <h4><Link to="/product-details.html">Pacific Heights Area</Link></h4>
                            <div className="search-by-place-btn">
                                <Link to="/product-details.html">View Property <i className="flaticon-right-arrow"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="ltn__search-by-place-item">
                        <div className="search-by-place-img">
                            <Link to="/product-details.html"><img src="assets/img/product-3/3.jpg" alt="#"/></Link>
                            <div className="search-by-place-badge">
                                <ul>
                                    <li>9 Properties</li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-by-place-info">
                            <h6><Link to="/locations.html">Sedona, Arizona</Link></h6>
                            <h4><Link to="/product-details.html">Noe Valley Zones</Link></h4>
                            <div className="search-by-place-btn">
                                <Link to="/product-details.html">View Property <i className="flaticon-right-arrow"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="ltn__search-by-place-item">
                        <div className="search-by-place-img">
                            <Link to="/product-details.html"><img src="assets/img/product-3/2.jpg" alt="#"/></Link>
                            <div className="search-by-place-badge">
                                <ul>
                                    <li>5 Properties</li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-by-place-info">
                            <h6><Link to="/locations.html">New York</Link></h6>
                            <h4><Link to="/product-details.html">Pacific Heights Area</Link></h4>
                            <div className="search-by-place-btn">
                                <Link to="/product-details.html">View Property <i className="flaticon-right-arrow"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- SEARCH BY PLACE AREA END --> */}

    {/* <!-- PRODUCT SLIDER AREA START --> */}
    <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2--- text-center">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Properties</h6>
                        <h1 className="section-title">Featured Listings</h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__product-slider-item-three-active slick-arrow-1">
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-4 text-center---">
                        <div className="product-img">
                            <Link to="/product-details.html"><img src="assets/img/product-3/1.jpg" alt="#"/></Link>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge bg-green">For Rent</li>
                                </ul>
                            </div>
                            <div className="product-img-location-gallery">
                                <div className="product-img-location">
                                    <ul>
                                        <li>
                                            <Link to="/locations.html"><i className="flaticon-pin"></i> Belmont Gardens, Chicago</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-img-gallery">
                                    <ul>
                                        <li>
                                            <Link to="/product-details.html"><i className="fas fa-camera"></i> 4</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-details.html"><i className="fas fa-film"></i> 2</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-price">
                                <span>$34,900<label>/Month</label></span>
                            </div>
                            <h2 className="product-title"><Link to="/product-details.html">New Apartment Nice View</Link></h2>
                            <div className="product-description">
                                <p>Beautiful Huge 1 Family House In Heart Of <br/>
                                    Westbury. Newly Renovated With New Wood</p>
                            </div>
                            <ul className="ltn__list-item-2 ltn__list-item-2-before">
                                <li><span>3 <i className="flaticon-bed"></i></span>
                                    Bedrooms
                                </li>
                                <li><span>2 <i className="flaticon-clean"></i></span>
                                    Bathrooms
                                </li>
                                <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol"></i></span>
                                    square Ft
                                </li>
                            </ul>
                        </div>
                        <div className="product-info-bottom">
                            <div className="real-estate-agent">
                                <div className="agent-img">
                                    <Link to="/team-details.html"><img src="assets/img/blog/author.jpg" alt="#"/></Link>
                                </div>
                                <div className="agent-brief">
                                    <h6><Link to="/team-details.html">William Seklo</Link></h6>
                                    <small>Estate Agents</small>
                                </div>
                            </div>
                            <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="flaticon-expand"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="flaticon-heart-1"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/product-details.html" title="Product Details">
                                            <i className="flaticon-add"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-4 text-center---">
                        <div className="product-img">
                            <Link to="/product-details.html"><img src="assets/img/product-3/2.jpg" alt="#"/></Link>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge bg-green---">For Sale</li>
                                </ul>
                            </div>
                            <div className="product-img-location-gallery">
                                <div className="product-img-location">
                                    <ul>
                                        <li>
                                            <Link to="/locations.html"><i className="flaticon-pin"></i> Belmont Gardens, Chicago</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-img-gallery">
                                    <ul>
                                        <li>
                                            <Link to="/product-details.html"><i className="fas fa-camera"></i> 4</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-details.html"><i className="fas fa-film"></i> 2</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-price">
                                <span>$34,900<label>/Month</label></span>
                            </div>
                            <h2 className="product-title"><Link to="/product-details.html">Modern Apartments</Link></h2>
                            <div className="product-description">
                                <p>Beautiful Huge 1 Family House In Heart Of <br/>
                                    Westbury. Newly Renovated With New Wood</p>
                            </div>
                            <ul className="ltn__list-item-2 ltn__list-item-2-before">
                                <li><span>3 <i className="flaticon-bed"></i></span>
                                    Bedrooms
                                </li>
                                <li><span>2 <i className="flaticon-clean"></i></span>
                                    Bathrooms
                                </li>
                                <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol"></i></span>
                                    square Ft
                                </li>
                            </ul>
                        </div>
                        <div className="product-info-bottom">
                            <div className="real-estate-agent">
                                <div className="agent-img">
                                    <Link to="/team-details.html"><img src="assets/img/blog/author.jpg" alt="#"/></Link>
                                </div>
                                <div className="agent-brief">
                                    <h6><Link to="/team-details.html">William Seklo</Link></h6>
                                    <small>Estate Agents</small>
                                </div>
                            </div>
                            <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="flaticon-expand"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="flaticon-heart-1"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/product-details.html" title="Product Details">
                                            <i className="flaticon-add"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-4 text-center---">
                        <div className="product-img">
                            <Link to="/product-details.html"><img src="assets/img/product-3/3.jpg" alt="#"/></Link>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge bg-green">For Rent</li>
                                </ul>
                            </div>
                            <div className="product-img-location-gallery">
                                <div className="product-img-location">
                                    <ul>
                                        <li>
                                            <Link to="/locations.html"><i className="flaticon-pin"></i> Belmont Gardens, Chicago</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-img-gallery">
                                    <ul>
                                        <li>
                                            <Link to="/product-details.html"><i className="fas fa-camera"></i> 4</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-details.html"><i className="fas fa-film"></i> 2</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-price">
                                <span>$34,900<label>/Month</label></span>
                            </div>
                            <h2 className="product-title"><Link to="/product-details.html">Comfortable Apartment</Link></h2>
                            <div className="product-description">
                                <p>Beautiful Huge 1 Family House In Heart Of <br/>
                                    Westbury. Newly Renovated With New Wood</p>
                            </div>
                            <ul className="ltn__list-item-2 ltn__list-item-2-before">
                                <li><span>3 <i className="flaticon-bed"></i></span>
                                    Bedrooms
                                </li>
                                <li><span>2 <i className="flaticon-clean"></i></span>
                                    Bathrooms
                                </li>
                                <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol"></i></span>
                                    square Ft
                                </li>
                            </ul>
                        </div>
                        <div className="product-info-bottom">
                            <div className="real-estate-agent">
                                <div className="agent-img">
                                    <Link to="/team-details.html"><img src="assets/img/blog/author.jpg" alt="#"/></Link>
                                </div>
                                <div className="agent-brief">
                                    <h6><Link to="/team-details.html">William Seklo</Link></h6>
                                    <small>Estate Agents</small>
                                </div>
                            </div>
                            <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="flaticon-expand"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="flaticon-heart-1"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/product-details.html" title="Product Details">
                                            <i className="flaticon-add"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-4 text-center---">
                        <div className="product-img">
                            <Link to="/product-details.html"><img src="assets/img/product-3/4.jpg" alt="#"/></Link>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge bg-green">For Rent</li>
                                </ul>
                            </div>
                            <div className="product-img-location-gallery">
                                <div className="product-img-location">
                                    <ul>
                                        <li>
                                            <Link to="/locations.html"><i className="flaticon-pin"></i> Belmont Gardens, Chicago</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-img-gallery">
                                    <ul>
                                        <li>
                                            <Link to="/product-details.html"><i className="fas fa-camera"></i> 4</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-details.html"><i className="fas fa-film"></i> 2</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-price">
                                <span>$34,900<label>/Month</label></span>
                            </div>
                            <h2 className="product-title"><Link to="/product-details.html">Luxury villa in Rego Park </Link></h2>
                            <div className="product-description">
                                <p>Beautiful Huge 1 Family House In Heart Of <br/>
                                    Westbury. Newly Renovated With New Wood</p>
                            </div>
                            <ul className="ltn__list-item-2 ltn__list-item-2-before">
                                <li><span>3 <i className="flaticon-bed"></i></span>
                                    Bedrooms
                                </li>
                                <li><span>2 <i className="flaticon-clean"></i></span>
                                    Bathrooms
                                </li>
                                <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol"></i></span>
                                    square Ft
                                </li>
                            </ul>
                        </div>
                        <div className="product-info-bottom">
                            <div className="real-estate-agent">
                                <div className="agent-img">
                                    <Link to="/team-details.html"><img src="assets/img/blog/author.jpg" alt="#"/></Link>
                                </div>
                                <div className="agent-brief">
                                    <h6><Link to="/team-details.html">William Seklo</Link></h6>
                                    <small>Estate Agents</small>
                                </div>
                            </div>
                            <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="flaticon-expand"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="flaticon-heart-1"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/product-details.html" title="Product Details">
                                            <i className="flaticon-add"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-4 text-center---">
                        <div className="product-img">
                            <Link to="/product-details.html"><img src="assets/img/product-3/5.jpg" alt="#"/></Link>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge bg-green">For Rent</li>
                                </ul>
                            </div>
                            <div className="product-img-location-gallery">
                                <div className="product-img-location">
                                    <ul>
                                        <li>
                                            <Link to="/locations.html"><i className="flaticon-pin"></i> Belmont Gardens, Chicago</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-img-gallery">
                                    <ul>
                                        <li>
                                            <Link to="/product-details.html"><i className="fas fa-camera"></i> 4</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-details.html"><i className="fas fa-film"></i> 2</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-price">
                                <span>$34,900<label>/Month</label></span>
                            </div>
                            <h2 className="product-title"><Link to="/product-details.html">Beautiful Flat in Manhattan </Link></h2>
                            <div className="product-description">
                                <p>Beautiful Huge 1 Family House In Heart Of <br/>
                                    Westbury. Newly Renovated With New Wood</p>
                            </div>
                            <ul className="ltn__list-item-2 ltn__list-item-2-before">
                                <li><span>3 <i className="flaticon-bed"></i></span>
                                    Bedrooms
                                </li>
                                <li><span>2 <i className="flaticon-clean"></i></span>
                                    Bathrooms
                                </li>
                                <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol"></i></span>
                                    square Ft
                                </li>
                            </ul>
                        </div>
                        <div className="product-info-bottom">
                            <div className="real-estate-agent">
                                <div className="agent-img">
                                    <Link to="/team-details.html"><img src="assets/img/blog/author.jpg" alt="#"/></Link>
                                </div>
                                <div className="agent-brief">
                                    <h6><Link to="/team-details.html">William Seklo</Link></h6>
                                    <small>Estate Agents</small>
                                </div>
                            </div>
                            <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                            <i className="flaticon-expand"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                            <i className="flaticon-heart-1"></i></Link>
                                    </li>
                                    <li>
                                        <Link to="/product-details.html" title="Product Details">
                                            <i className="flaticon-add"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- PRODUCT SLIDER AREA END --> */}

    {/* <!-- VIDEO AREA START --> */}
    <div className="ltn__video-popup-area ltn__video-popup-margin---">
        <div className="ltn__video-bg-img ltn__video-popup-height-600--- bg-overlay-black-30 bg-image bg-fixed ltn__animation-pulse1" data-bs-bg="img/bg/19.jpg">
            <Link className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                <i className="fa fa-play"></i>
            </Link>
        </div>
    </div>
    {/* <!-- VIDEO AREA END --> */}

    {/* <!-- TESTIMONIAL AREA START --> */}
    <div className="ltn__testimonial-area ltn__testimonial-4 pt-115 pb-100 plr--9">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2--- text-center">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonial</h6>
                        <h1 className="section-title">Clients Feedback</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__testimonial-slider-4 ltn__testimonial-slider-4-active slick-arrow-1">
                        <div className="ltn__testimonial-item-5">
                            <div className="ltn__quote-icon">
                                <i className="far fa-comments"></i>
                            </div>
                            <div className="ltn__testimonial-image">
                                <img src="assets/img/testimonial/1.jpg" alt="quote"/>
                            </div>
                            <div className="ltn__testimonial-info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea commodo.  </p>
                                <h4>Jacob William</h4>
                                <h6>Manager</h6>
                            </div>
                        </div>
                        <div className="ltn__testimonial-item-5">
                            <div className="ltn__quote-icon">
                                <i className="far fa-comments"></i>
                            </div>
                            <div className="ltn__testimonial-image"><img src="assets/img/testimonial/2.jpg" alt="quote"/></div>
                            <div className="ltn__testimonial-info">
                                <p>Quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea. </p>
                                <h4>Ethan James</h4>
                                <h6>Admin</h6>
                            </div>
                        </div>
                        
                        <div className="ltn__testimonial-item-5">
                            <div className="ltn__quote-icon">
                                <i className="far fa-comments"></i>
                            </div>
                            <div className="ltn__testimonial-image"><img src="assets/img/testimonial/3.jpg" alt="quote"/></div>
                            <div className="ltn__testimonial-info">
                                <p>Dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco nisi ut aliquip ex ea commodo. </p>
                                <h4>Noah Alexander</h4>
                                <h6>Professor</h6>
                            </div>
                        </div>

                        <div className="ltn__testimonial-item-5">
                            <div className="ltn__quote-icon">
                                <i className="far fa-comments"></i>
                            </div>
                            <div className="ltn__testimonial-image"><img src="assets/img/testimonial/4.jpg" alt="quote"/></div>
                            <div className="ltn__testimonial-info">
                                <p>Amet Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  nisi ut aliquip ex ea commodo.  </p>
                                <h4>Liam Mason</h4>
                                <h6>Officer</h6>
                            </div>
                        </div>
                    </div>
                    <ul className="ltn__testimonial-quote-menu d-none d-lg-block">
                        <li><img src="assets/img/testimonial/1.jpg" alt="Quote image"/></li>
                        <li><img src="assets/img/testimonial/2.jpg" alt="Quote image"/></li>
                        <li><img src="assets/img/testimonial/3.jpg" alt="Quote image"/></li>
                        <li><img src="assets/img/testimonial/4.jpg" alt="Quote image"/></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- TESTIMONIAL AREA END --> */}

    {/* <!-- BRAND LOGO AREA START --> */}
    <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 pt-110 pb-110 plr--9 d-none---">
        <div className="container-fluid">
            <div className="row ltn__brand-logo-active">
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/1.png" alt="Brand Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/2.png" alt="Brand Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/3.png" alt="Brand Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/4.png" alt="Brand Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/5.png" alt="Brand Logo"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/3.png" alt="Brand Logo"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- BRAND LOGO AREA END --> */}

    {/* <!-- BLOG AREA START (blog-3) --> */}
    <div className="ltn__blog-area pt-120 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2--- text-center">
                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">News & Blogs</h6>
                        <h1 className="section-title">Leatest News Feeds</h1>
                    </div>
                </div>
            </div>
            <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
                {/* <!-- Blog Item --> */}
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-3">
                        <div className="ltn__blog-img">
                            <Link to="/blog-details.html"><img src="assets/img/blog/1.jpg" alt="#"/></Link>
                        </div>
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <Link to="/#"><i className="far fa-user"></i>by: Admin</Link>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <Link to="/#"><i className="fas fa-tags"></i>Decorate</Link>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><Link to="/blog-details.html">10 Brilliant Ways To Decorate Your Home</Link></h3>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2021</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <Link to="/blog-details.html">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog Item --> */}
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-3">
                        <div className="ltn__blog-img">
                            <Link to="/blog-details.html"><img src="assets/img/blog/2.jpg" alt="#"/></Link>
                        </div>
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <Link to="/#"><i className="far fa-user"></i>by: Admin</Link>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <Link to="/#"><i className="fas fa-tags"></i>Interior</Link>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><Link to="/blog-details.html">The Most Inspiring Interior Design Of 2021</Link></h3>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>July 23, 2021</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <Link to="/blog-details.html">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog Item --> */}
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-3">
                        <div className="ltn__blog-img">
                            <Link to="/blog-details.html"><img src="assets/img/blog/3.jpg" alt="#"/></Link>
                        </div>
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <Link to="/#"><i className="far fa-user"></i>by: Admin</Link>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <Link to="/#"><i className="fas fa-tags"></i>Estate</Link>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><Link to="/blog-details.html">Recent Commercial Real Estate Transactions</Link></h3>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>May 22, 2021</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <Link to="/blog-details.html">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog Item --> */}
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-3">
                        <div className="ltn__blog-img">
                            <Link to="/blog-details.html"><img src="assets/img/blog/4.jpg" alt="#"/></Link>
                        </div>
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <Link to="/#"><i className="far fa-user"></i>by: Admin</Link>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <Link to="/#"><i className="fas fa-tags"></i>Room</Link>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><Link to="/blog-details.html">Renovating a Living Room? Experts Share Their Secrets</Link></h3>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2021</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <Link to="/blog-details.html">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog Item --> */}
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-3">
                        <div className="ltn__blog-img">
                            <Link to="/blog-details.html"><img src="assets/img/blog/5.jpg" alt="#"/></Link>
                        </div>
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <Link to="/#"><i className="far fa-user"></i>by: Admin</Link>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <Link to="/#"><i className="fas fa-tags"></i>Trends</Link>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><Link to="/blog-details.html">7 home trends that will shape your house in 2021</Link></h3>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2021</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
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

    {/* <!-- CALL TO ACTION START (call-to-action-6) --> */}
    <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom" data-bs-bg="img/1.jpg--">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                        <div className="coll-to-info text-color-white">
                            <h1>Looking for a dream home?</h1>
                            <p>We can help you realize your dream of a new home</p>
                        </div>
                        <div className="btn-wrapper">
                            <Link className="btn btn-effect-3 btn-white" href="contact.html">Explore Properties <i className="icon-next"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- CALL TO ACTION END --> */}



    {/* <!-- MODAL AREA START (Quick View Modal) --> */}
    <div className="ltn__modal-area ltn__quick-view-modal-area">
        <div className="modal fade" id="quick_view_modal" tabindex="-1">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            {/* <!-- <i className="fas fa-times"></i> --> */}
                        </button>
                    </div>
                    <div className="modal-body">
                         <div className="ltn__quick-view-modal-inner">
                             <div className="modal-product-item">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="modal-product-img">
                                            <img src="assets/img/product/4.png" alt="#"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="modal-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><Link to="/#"><i className="fas fa-star"></i></Link></li>
                                                    <li><Link to="/#"><i className="fas fa-star"></i></Link></li>
                                                    <li><Link to="/#"><i className="fas fa-star"></i></Link></li>
                                                    <li><Link to="/#"><i className="fas fa-star-half-alt"></i></Link></li>
                                                    <li><Link to="/#"><i className="far fa-star"></i></Link></li>
                                                    <li className="review-total"> <Link to="/#"> ( 95 Reviews )</Link></li>
                                                </ul>
                                            </div>
                                            <h3><Link to="/product-details.html">3 Rooms Manhattan</Link></h3>
                                            <div className="product-price">
                                                <span>$34,900</span>
                                                <del>$36,500</del>
                                            </div>
                                            <hr/>
                                            <div className="modal-product-brief">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repellendus repudiandae incidunt quidem pariatur expedita, quo quis modi tempore non.</p>
                                            </div>
                                            <div className="modal-product-meta ltn__product-details-menu-1 d-none">
                                                <ul>
                                                    <li>
                                                        <strong>Categories:</strong> 
                                                        <span>
                                                            <Link to="/#">Parts</Link>
                                                            <Link to="/#">Car</Link>
                                                            <Link to="/#">Seat</Link>
                                                            <Link to="/#">Cover</Link>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ltn__product-details-menu-2 d-none">
                                                <ul>
                                                    <li>
                                                        <div className="cart-plus-minus">
                                                            <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box"/>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <Link to="/#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                                                            <i className="fas fa-shopping-cart"></i>
                                                            <span>ADD TO CART</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <!-- <hr> --> */}
                                            <div className="ltn__product-details-menu-3">
                                                <ul>
                                                    <li>
                                                        <Link to="/#" className="" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                                            <i className="far fa-heart"></i>
                                                            <span>Add to Wishlist</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/#" className="" title="Compare" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                            <i className="fas fa-exchange-alt"></i>
                                                            <span>Compare</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <hr/>
                                            <div className="ltn__social-media">
                                                <ul>
                                                    <li>Share:</li>
                                                    <li><Link to="/#" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link to="/#" title="Twitter"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link to="/#" title="Linkedin"><i className="fab fa-linkedin"></i></Link></li>
                                                    <li><Link to="/#" title="Instagram"><i className="fab fa-instagram"></i></Link></li>
                                                    
                                                </ul>
                                            </div>
                                            <label className="float-end mb-0"><Link className="text-decoration" href="product-details.html"><small>View Details</small></Link></label>
                                        </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- MODAL AREA END --> */}

    {/* <!-- MODAL AREA START (Add To Cart Modal) --> */}
    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="add_to_cart_modal" tabindex="-1">
            <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                         <div className="ltn__quick-view-modal-inner">
                             <div className="modal-product-item">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="modal-product-img">
                                            <img src="assets/img/product/1.png" alt="#"/>
                                        </div>
                                         <div className="modal-product-info">
                                            <h5><Link to="/product-details.html">3 Rooms Manhattan</Link></h5>
                                            <p className="added-cart"><i className="fa fa-check-circle"></i>  Successfully added to your Cart</p>
                                            <div className="btn-wrapper">
                                                <Link to="/cart.html" className="theme-btn-1 btn btn-effect-1">View Cart</Link>
                                                <Link to="/checkout.html" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
                                            </div>
                                         </div>
                                         {/* <!-- additional-info --> */}
                                         <div className="additional-info d-none">
                                            <p>We want to give you <b>10% discount</b> for your first order, <br/>  Use discount code at checkout</p>
                                            <div className="payment-method">
                                                <img src="assets/img/icons/payment.png" alt="#"/>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- MODAL AREA END --> */}

    {/* <!-- MODAL AREA START (Wishlist Modal) --> */}
    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="liton_wishlist_modal" tabindex="-1">
            <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                         <div className="ltn__quick-view-modal-inner">
                             <div className="modal-product-item">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="modal-product-img">
                                            <img src="assets/img/product/7.png" alt="#"/>
                                        </div>
                                         <div className="modal-product-info">
                                            <h5><Link to="/product-details.html">3 Rooms Manhattan</Link></h5>
                                            <p className="added-cart"><i className="fa fa-check-circle"></i>  Successfully added to your Wishlist</p>
                                            <div className="btn-wrapper">
                                                <Link to="/wishlist.html" className="theme-btn-1 btn btn-effect-1">View Wishlist</Link>
                                            </div>
                                         </div>
                                         {/* <!-- additional-info --> */}
                                         <div className="additional-info d-none">
                                            <p>We want to give you <b>10% discount</b> for your first order, <br/>  Use discount code at checkout</p>
                                            <div className="payment-method">
                                                <img src="assets/img/icons/payment.png" alt="#"/>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- MODAL AREA END --> */}
        </>
    )
}
