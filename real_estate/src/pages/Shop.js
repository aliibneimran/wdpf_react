import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
    alluser();
  }, []);

  const [isproperty, setproperty] = useState([]);
  const alluser = async (ids) => {
    try {
      axios.get(`http://localhost/wdpf_react/real_estate/api/property.php`)
        .then(res => {
          console.log(res.data.property)
          setproperty(res.data.property);
        })
    } catch (error) { throw error; }
  }
  return (
    <>
      {/* BREADCRUMB AREA START */}
      <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner">
                <h1 className="page-title">Property</h1>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                    <li>Property</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB AREA END */}

      {/* PRODUCT DETAILS AREA START */}
      <div className="ltn__product-area ltn__product-gutter mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="ltn__shop-options">
                <ul className="justify-content-start">
                  <li>
                    <div className="ltn__grid-list-tab-menu ">
                      <div className="nav">
                        <Link className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large" /></Link>
                        <Link data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></Link>
                      </div>
                    </div>
                  </li>
                  <li className="d-none">
                    <div className="showing-product-number text-right">
                      <span>Showing 1–12 of 18 results</span>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select">
                        <option>Default Sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by new arrivals</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select className="nice-select">
                        <option>Per Page: 12</option>
                        <option>Per Page: 20</option>
                        <option>Per Page: 30</option>
                        <option>Per Page: 50</option>
                        <option>Per Page: 100</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_product_grid">
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      <div className="col-lg-12">
                        {/* Search Widget */}
                        <div className="ltn__search-widget mb-30">
                          <form action="#">
                            <input type="text" name="search" placeholder="Search your keyword..." />
                            <button type="submit"><i className="fas fa-search" /></button>
                          </form>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      {
                        isproperty.map((item)=>  
                      <div className="col-xl-6 col-sm-6 col-12">
                        <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                          <div className="product-img">
                            <Link to="/product-details"><img src="assets/img/product-3/2.jpg" alt="#" /></Link>
                            <div className="real-estate-agent">
                              <div className="agent-img">
                                <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                              </div>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badg">{item.type}</li>
                              </ul>
                            </div>
                            <h2 className="product-title"><Link to="/product-details">{item.title}</Link></h2>
                            <div className="product-img-location">
                              <ul>
                                <li>
                                  <Link to="/locations"><i className="flaticon-pin" /> {item.address}</Link>
                                </li>
                              </ul>
                            </div>
                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                              <li><span>{item.bed}</span>
                                Bed
                              </li>
                              <li><span>{item.bath}</span>
                                Bath
                              </li>
                              <li><span>{item.size}</span>
                                Square Ft
                              </li>
                            </ul>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                    <i className="flaticon-expand" />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                    <i className="flaticon-heart-1" /></Link>
                                </li>
                                <li>
                                  <Link to="/product-details" title="Product Details">
                                    <i className="flaticon-add" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info-bottom">
                            <div className="product-price">
                              <span>{item.price}<label>/Month</label></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ltn__pagination-area text-center">
                <div className="ltn__pagination">
                  <ul>
                    <li><Link to="/#"><i className="fas fa-angle-double-left" /></Link></li>
                    <li><Link to="/#">1</Link></li>
                    <li className="active"><Link to="/#">2</Link></li>
                    <li><Link to="/#">3</Link></li>
                    <li><Link to="/#">...</Link></li>
                    <li><Link to="/#">10</Link></li>
                    <li><Link to="/#"><i className="fas fa-angle-double-right" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                <h3 className="mb-10">Advance Information</h3>
                <label className="mb-30"><small>About 9,620 results (0.62 seconds) </small></label>
                {/* Advance Information widget */}
                <div className="widget ltn__menu-widget">
                  <h4 className="ltn__widget-title">Property Type</h4>
                  <ul>
                    <li>
                      <Link to="/shop-right-sidebar">
                        <label className="checkbox-item">House
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="checkmark" />
                        </label>
                        <span className="categorey-no">3,924</span>
                      </Link>
                    </li>
                    <li>
                      <label className="checkbox-item">Single Family
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">3,610</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Apartment
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">2,912</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Office Villa
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">2,687</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Luxary Home
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">1,853</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Studio
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">893</span>
                    </li>
                  </ul>
                  <hr />
                  <h4 className="ltn__widget-title">Amenities</h4>
                  <ul>
                    <li>
                      <label className="checkbox-item">Dishwasher
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">3,924</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Floor Coverings
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">3,610</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Internet
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">2,912</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Build Wardrobes
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">2,687</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Supermarket
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">1,853</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Kids Zone
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">893</span>
                    </li>
                  </ul>
                  <hr />
                  <h4 className="ltn__widget-title">Price Renge</h4>
                  <ul>
                    <li>
                      <label className="checkbox-item">Low Budget
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">$5,000 - $10,000</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Medium
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">$10,000 - $30,000</span>
                    </li>
                    <li>
                      <label className="checkbox-item">High Budget
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">$30,000 Up</span>
                    </li>
                  </ul>
                  <hr />
                  {/* Price Filter Widget */}
                  <div className="widget--- ltn__price-filter-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border---">Filter by price</h4>
                    <div className="price_filter">
                      <div className="price_slider_amount">
                        <input type="submit" defaultValue="Your range:" />
                        <input type="text" className="amount" name="price" placeholder="Add Your Price" />
                      </div>
                      <div className="slider-range" />
                    </div>
                  </div>
                  <hr />
                  <h4 className="ltn__widget-title">Bed/bath</h4>
                  <ul>
                    <li>
                      <label className="checkbox-item">Single
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">3,924</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Double
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">3,610</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Up To 3
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">2,912</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Up To 5
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">2,687</span>
                    </li>
                  </ul>
                  <hr />
                  <h4 className="ltn__widget-title">Catagory</h4>
                  <ul>
                    <li>
                      <label className="checkbox-item">Buying
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">3,924</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Renting
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">3,610</span>
                    </li>
                    <li>
                      <label className="checkbox-item">Selling
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <span className="categorey-no">2,912</span>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT DETAILS AREA END */}

    </>
  )
}
