import React from "react";
import Slider from "../components/Slider";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <Slider />

      {/* <!-- Get In Touch Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay=".3s">
        <div className="container py-5">
          <div className="bg-light px-4 py-5 rounded">
            <div className="text-center">
              <h1 className="display-5 mb-5">
                Find Your Pest Control Services
              </h1>
            </div>
            <form className="text-center mb-4" action="#">
              <div className="row g-4">
                <div className="col-xl-10 col-lg-12">
                  <div className="row g-4">
                    <div className="col-md-6 col-xl-3">
                      <select className="form-select p-3 border-0">
                        <option value="Type Of Service" className="">
                          Type Of Service
                        </option>
                        <option value="Pest Control-2">Pest Control-2</option>
                        <option value="Pest Control-3">Pest Control-3</option>
                        <option value="Pest Control-4">Pest Control-4</option>
                        <option value="Pest Control-5">Pest Control-5</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-xl-3">
                      <input
                        type="text"
                        className="form-control p-3 border-0"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-6 col-xl-3">
                      <input
                        type="text"
                        className="form-control p-3 border-0"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-md-6 col-xl-3">
                      <input
                        type="email"
                        className="form-control p-3 border-0"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-12">
                  <input
                    type="button"
                    className="btn btn-primary w-100 p-3 border-0"
                    value="GET STARTED"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Get In Touch End --> */}

        <AboutUs></AboutUs>

      {/* <!-- Services Start --> */}
      <div className="container-fluid services py-5">
        <div className="container text-center py-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
              Our Services
            </h5>
            <h1 className="display-5">Common Pest Control Services</h1>
          </div>
          <div className="row g-5">
            <div
              className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="bg-light rounded p-5 services-item">
                <div
                  className="d-flex"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <div className="mb-4 rounded-circle services-inner-icon">
                    <i className="fa fa-spider fa-3x text-primary"></i>
                  </div>
                </div>
                <h4>Spiders</h4>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisc elit sed.
                </p>
                <button
                  type="button"
                  className="btn btn-primary border-0 rounded-pill px-4 py-3"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="bg-light rounded p-5 services-item">
                <div
                  className="d-flex"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <div className="mb-4 rounded-circle services-inner-icon">
                    <i className="fa fa-spider fa-3x text-primary"></i>
                  </div>
                </div>
                <h4 className="text-center">Mosquitos</h4>
                <p className="text-center fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisc elit sed.
                </p>
                <button
                  type="button"
                  className="btn btn-primary border-0 rounded-pill px-4 py-3"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="bg-light rounded p-5 services-item">
                <div
                  className="d-flex"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <div className="mb-4 rounded-circle services-inner-icon">
                    <i className="fa fa-spider fa-3x text-primary"></i>
                  </div>
                </div>
                <h4 className="text-center">Rodents</h4>
                <p className="text-center fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisc elit sed.
                </p>
                <button
                  type="button"
                  className="btn btn-primary border-0 rounded-pill px-4 py-3"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="bg-light rounded p-5 services-item">
                <div
                  className="d-flex"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <div className="mb-4 rounded-circle services-inner-icon">
                    <i className="fa fa-spider fa-3x text-primary"></i>
                  </div>
                </div>
                <h4 className="text-center">Termites</h4>
                <p className="text-center fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisc elit sed.
                </p>
                <button
                  type="button"
                  className="btn btn-primary border-0 rounded-pill px-4 py-3"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp"
            data-wow-delay=".3s"
          >
            More Services
          </button>
        </div>
      </div>
      {/* <!-- Services End --> */}

      {/* <!-- Project Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
              Our Project
            </h5>
            <h1 className="display-5">Our recently completed projects</h1>
          </div>
          <div className="row g-5">
            <div
              className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="project-item">
                <div className="project-left bg-dark"></div>
                <div className="project-right bg-dark"></div>
                <img
                  src="assets/img/project-1.jpg"
                  className="img-fluid h-100"
                  alt="img"
                />
                <a href="" className="fs-4 fw-bold text-center">
                  Whole Home Sanitizing
                </a>
              </div>
            </div>
            <div
              className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="project-item">
                <div className="project-left bg-dark"></div>
                <div className="project-right bg-dark"></div>
                <img
                  src="assets/img/project-2.jpg"
                  className="img-fluid h-100"
                  alt="img"
                />
                <a href="" className="fs-4 fw-bold text-center">
                  Education center Cleaning
                </a>
              </div>
            </div>
            <div
              className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="project-item">
                <div className="project-left bg-dark"></div>
                <div className="project-right bg-dark"></div>
                <img
                  src="assets/img/project-3.jpg"
                  className="img-fluid h-100"
                  alt="img"
                />
                <a href="" className="fs-4 fw-bold text-center">
                  Warehouse Cleaning
                </a>
              </div>
            </div>
            <div
              className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="project-item">
                <div className="project-left bg-dark"></div>
                <div className="project-right bg-dark"></div>
                <img
                  src="assets/img/project-4.jpg"
                  className="img-fluid h-100"
                  alt="img"
                />
                <a href="" className="fs-4 fw-bold text-center">
                  Hospital Cleaning
                </a>
              </div>
            </div>
            <div
              className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="project-item">
                <div className="project-left bg-dark"></div>
                <div className="project-right bg-dark"></div>
                <img
                  src="assets/img/project-5.jpg"
                  className="img-fluid h-100"
                  alt="img"
                />
                <a href="" className="fs-4 fw-bold text-center">
                  Factory Cleaning
                </a>
              </div>
            </div>
            <div
              className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="project-item">
                <div className="project-left bg-dark"></div>
                <div className="project-right bg-dark"></div>
                <img
                  src="assets/img/project-6.jpg"
                  className="img-fluid h-100"
                  alt="img"
                />
                <a href="" className="fs-4 fw-bold text-center">
                  Furniture Sanitizing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project End --> */}

      {/* <!-- Blog Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
              Our Blog
            </h5>
            <h1 className="display-5">Latest Blog & News</h1>
          </div>
          <div
            className="owl-carousel blog-carousel wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="blog-item">
              <img
                src="assets/img/blog-1.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
              <div className="rounded-bottom bg-light">
                <div className="d-flex justify-content-between p-4 pb-2">
                  <span className="pe-2 text-dark">
                    <i className="fa fa-user me-2"></i>By Admin
                  </span>
                  <span className="text-dark">
                    <i className="fas fa-calendar-alt me-2"></i>10 Feb, 2023
                  </span>
                </div>
                <div className="px-4 pb-0">
                  <h4>How To Build A Cleaning Plan</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod
                    tempor.
                  </p>
                </div>
                <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                  <a
                    href="#"
                    type="button"
                    className="btn btn-primary border-0"
                  >
                    Learn More
                  </a>
                  <a href="#" className="my-auto btn-primary border-0">
                    <i className="fa fa-comments me-2"></i>23 Comments
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-item">
              <img
                src="assets/img/blog-3.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
              <div className="rounded-bottom bg-light">
                <div className="d-flex justify-content-between p-4 pb-2">
                  <span className="pe-2 text-dark">
                    <i className="fa fa-user me-2"></i>By Admin
                  </span>
                  <span className="text-dark">
                    <i className="fas fa-calendar-alt me-2"></i>10 Feb, 2023
                  </span>
                </div>
                <div className="px-4 pb-0">
                  <h4>How To Build A Cleaning Plan</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod
                    tempor.
                  </p>
                </div>
                <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                  <a
                    href="#"
                    type="button"
                    className="btn btn-primary border-0"
                  >
                    Learn More
                  </a>
                  <a href="#" className="my-auto text-dark">
                    <i className="fa fa-comments me-2"></i>23 Comments
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-item">
              <img
                src="assets/img/blog-2.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
              <div className="rounded-bottom bg-light">
                <div className="d-flex justify-content-between p-4 pb-2">
                  <span className="pe-2 text-dark">
                    <i className="fa fa-user me-2"></i>By Admin
                  </span>
                  <span className="text-dark">
                    <i className="fas fa-calendar-alt me-2"></i>10 Feb, 2023
                  </span>
                </div>
                <div className="px-4 pb-0">
                  <h4>How To Build A Cleaning Plan</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod
                    tempor.
                  </p>
                </div>
                <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                  <a
                    href="#"
                    type="button"
                    className="btn btn-primary border-0"
                  >
                    Learn More
                  </a>
                  <a href="#" className="my-auto text-dark">
                    <i className="fa fa-comments me-2"></i>23 Comments
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-item">
              <img
                src="assets/img/blog-1.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
              <div className="rounded-bottom bg-light">
                <div className="d-flex justify-content-between p-4 pb-2">
                  <span className="pe-2 text-dark">
                    <i className="fa fa-user me-2"></i>By Admin
                  </span>
                  <span className="text-dark">
                    <i className="fas fa-calendar-alt me-2"></i>10 Feb, 2023
                  </span>
                </div>
                <div className="px-4 pb-0">
                  <h4>How To Build A Cleaning Plan</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectur adip sed eiusmod
                    tempor.
                  </p>
                </div>
                <div className="p-4 py-2 d-flex justify-content-between bg-primary rounded-bottom blog-btn">
                  <a
                    href="#"
                    type="button"
                    className="btn btn-primary border-0"
                  >
                    Learn More
                  </a>
                  <a href="#" className="my-auto text-dark">
                    <i className="fa fa-comments me-2"></i>23 Comments
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog End --> */}

      {/* <!-- Call To Action Start --> */}
      <div
        className="container-fluid py-5 call-to-action wow fadeInUp"
        data-wow-delay=".3s"
        style={{ margin: "6rem 0" }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <img
                src="assets/img/action.jpg"
                className="img-fluid w-100 rounded-circle p-5"
                alt=""
              />
            </div>
            <div className="col-lg-6 my-auto">
              <div className="text-start mt-4">
                <h1 className="pb-4 text-white">
                  Sign Up To Our Newsletter To Get The Latest Offers
                </h1>
              </div>
              <form method="post" action="index.html">
                <div className="form-group">
                  <div className="d-flex call-btn">
                    <input
                      type="search"
                      className="form-control py-3 px-4 w-100 border-0 rounded-0 rounded-end rounded-pill"
                      name="search-input"
                      value=""
                      placeholder="Enter Your Email Address"
                      required="Please enter a valid email"
                    />
                    <button
                      type="email"
                      value="Search Now!"
                      className="btn btn-primary border-0 rounded-pill rounded rounded-start px-5"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Call To Action End --> */}

      {/* <!-- pricing Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
              Our Pricing
            </h5>
            <h1 className="display-5 w-50 mx-auto">
              Affordable Pricing Plan For Pest Control Services
            </h1>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="rounded bg-light pricing-item">
                <div className="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
                  <h2 className="m-0">Basic</h2>
                </div>
                <div className="px-4 py-5 text-center bg-primary pricing-label mb-2">
                  <h1 className="mb-0">
                    $60
                    <span className="text-secondary fs-5 fw-normal">/mo</span>
                  </h1>
                  <p className="mb-0">Basic Pest Control</p>
                </div>
                <div className="p-4 text-center fs-5">
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Household
                    pests Control
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Rodent
                    Control
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Re-Service
                    at No-Charge
                  </p>
                  <p>
                    <i className="fa fa-times text-danger me-2"></i>Termite
                    Control
                  </p>
                  <p>
                    <i className="fa fa-times text-danger me-2"></i>Mosquito
                    Reduction
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="rounded bg-light pricing-item">
                <div className="bg-dark py-3 px-5 text-center rounded-top border-bottom border-primary">
                  <h2 className="m-0 text-primary">Standerd</h2>
                </div>
                <div className="px-4 py-5 text-center bg-dark pricing-label pricing-featured mb-2">
                  <h1 className="mb-0 text-primary">
                    $80<span className="fs-5 fw-normal">/mo</span>
                  </h1>
                  <p className="mb-0 text-white">Standard Pest Control</p>
                </div>
                <div className="p-4 text-center fs-5">
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Household
                    pests Control
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Rodent
                    Control
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Re-Service
                    at No-Charge
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Termite
                    Control
                  </p>
                  <p>
                    <i className="fa fa-times text-danger me-2"></i>Mosquito
                    Reduction
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark border-0 text-primary rounded-pill px-4 py-3 mt-3"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="rounded bg-light pricing-item">
                <div className="bg-primary py-3 px-5 text-center rounded-top border-bottom border-dark">
                  <h2 className="m-0">Premium</h2>
                </div>
                <div className="px-4 py-5 text-center bg-primary pricing-label mb-2">
                  <h1 className="mb-0">
                    $120
                    <span className="text-secondary fs-5 fw-normal">/mo</span>
                  </h1>
                  <p className="mb-0">Premium Pest Control</p>
                </div>
                <div className="p-4 text-center fs-5">
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Household
                    pests Control
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Rodent
                    Control
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Re-Service
                    at No-Charge
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Termite
                    Control
                  </p>
                  <p>
                    <i className="fa fa-check text-success me-2"></i>Mosquito
                    Reduction
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-3"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pricing End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
              Our Team
            </h5>
            <h1 className="display-5 w-50 mx-auto">Our Team Members</h1>
          </div>
          <div className="row g-5">
            <div
              className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="rounded team-item">
                <img
                  src="assets/img/team-1..jpg"
                  className="img-fluid w-100 rounded-top border border-bottom-0"
                  alt=""
                />
                <div className="team-content bg-primary text-dark text-center py-3">
                  <span className="fs-4 fw-bold">Full Name</span>
                  <p className="text-muted mb-0">Designation</p>
                </div>
                <div className="team-icon d-flex flex-column ">
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="rounded team-item">
                <img
                  src="assets/img/team-2.jpg"
                  className="img-fluid w-100 rounded-top border border-bottom-0"
                  alt=""
                />
                <div className="team-content bg-primary text-dark text-center py-3">
                  <span className="fs-4 fw-bold">Full Name</span>
                  <p className="text-muted mb-0">Designation</p>
                </div>
                <div className="team-icon d-flex flex-column ">
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="rounded team-item">
                <img
                  src="assets/img/team-3.jpg"
                  className="img-fluid w-100 rounded-top border border-bottom-0"
                  alt=""
                />
                <div className="team-content bg-primary text-dark text-center py-3">
                  <span className="fs-4 fw-bold">Full Name</span>
                  <p className="text-muted mb-0">Designation</p>
                </div>
                <div className="team-icon d-flex flex-column ">
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="rounded team-item">
                <img
                  src="assets/img/team-4.jpg"
                  className="img-fluid w-100 rounded-top border border-bottom-0"
                  alt=""
                />
                <div className="team-content bg-primary text-dark text-center py-3">
                  <span className="fs-4 fw-bold">Full Name</span>
                  <p className="text-muted mb-0">Designation</p>
                </div>
                <div className="team-icon d-flex flex-column ">
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-primary border-0">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Testiminial Start --> */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
              Testimonial
            </h5>
            <h1 className="display-5 w-50 mx-auto">
              What Clients Say About Our Services
            </h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="testimonial-item">
              <div className="testimonial-content rounded mb-4 p-4">
                <p className="fs-5 m-0">
                  Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam quis
                  tempor.
                </p>
              </div>
              <div
                className="d-flex align-items-center  mb-4"
                style={{ padding: "0 0 0 25px" }}
              >
                <div className="position-relative">
                  <img
                    src="assets/img/testimonial-1.jpg"
                    className="img-fluid rounded-circle py-2"
                    alt=""
                  />
                  <div
                    className="position-absolute"
                    style={{ top: "33px", left: "-25px" }}
                  >
                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                  </div>
                </div>
                <div className="ms-3">
                  <h4 className="mb-0">Client Name</h4>
                  <p className="mb-1">Profession</p>
                  <div className="d-flex">
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-content rounded mb-4 p-4">
                <p className="fs-5 m-0">
                  Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam quis
                  tempor.
                </p>
              </div>
              <div
                className="d-flex align-items-center  mb-4"
                style={{ padding: "0 0 0 25px" }}
              >
                <div className="position-relative">
                  <img
                    src="assets/img/testimonial-2.jpg"
                    className="img-fluid rounded-circle py-2"
                    alt=""
                  />
                  <div
                    className="position-absolute"
                    style={{ top: "33px", left: "-25px" }}
                  >
                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                  </div>
                </div>
                <div className="ms-3">
                  <h4 className="mb-0">Client Name</h4>
                  <p className="mb-1">Profession</p>
                  <div className="d-flex">
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-content rounded mb-4 p-4">
                <p className="fs-5 m-0">
                  Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam quis
                  tempor.
                </p>
              </div>
              <div
                className="d-flex align-items-center  mb-4"
                style={{ padding: "0 0 0 25px" }}
              >
                <div className="position-relative">
                  <img
                    src="assets/img/testimonial-3.jpg"
                    className="img-fluid rounded-circle py-2"
                    alt=""
                  />
                  <div
                    className="position-absolute"
                    style={{ top: "33px", left: "-25px" }}
                  >
                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                  </div>
                </div>
                <div className="ms-3">
                  <h4 className="mb-0">Client Name</h4>
                  <p className="mb-1">Profession</p>
                  <div className="d-flex">
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-content rounded mb-4 p-4">
                <p className="fs-5 m-0">
                  Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam quis
                  tempor.
                </p>
              </div>
              <div
                className="d-flex align-items-center  mb-4"
                style={{ padding: "0 0 0 25px" }}
              >
                <div className="position-relative">
                  <img
                    src="assets/img/testimonial-4.jpg"
                    className="img-fluid rounded-circle py-2"
                    alt=""
                  />
                  <div
                    className="position-absolute"
                    style={{ top: "33px", left: "-25px" }}
                  >
                    <i className="fa fa-quote-left rounded-pill bg-primary text-dark p-3"></i>
                  </div>
                </div>
                <div className="ms-3">
                  <h4 className="mb-0">Client Name</h4>
                  <p className="mb-1">Profession</p>
                  <div className="d-flex">
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                    <small className="fas fa-star text-primary me-1"></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testiminial End --> */}
    </>
  );
}