import React from 'react'

export default function Slider() {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade for-cmenu"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="assets/images/slider/7.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="assets/images/slider/6.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="assets/images/slider/4.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="assets/images/slider/2.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="assets/images/slider/1.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="assets/images/slider/3.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="assets/images/slider/5.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <!-- circle menu started--> */}
      <div className="banner-slider-wrapper">
        <div id="layerslider">
          <div className="circle-menu inactive">
            <div className="circle-inner">
              <h2 className="slogan">
                <span>Select </span>
                <span>Explore</span>
              </h2>
            </div>
            <ul className="circle-text text-uppercase">
              <li>
                <a href="#ongoing"> &nbsp; Ongoing &nbsp; |</a>
              </li>

              <li>
                <a href="#completed">&nbsp; Completed &nbsp; | &nbsp;</a>
              </li>

              <li>
                <a href="#Upcoming">&nbsp;Upcoming</a>
              </li>
            </ul>
            <div className="circle-bg"></div>
          </div>

          {/* <!--======= Video slider =========--> */}
          <section className="services video-portion">
            <div className="container">
              <div className="tittle">
                {" "}
                <img src="assets/images/head-top.png" alt="" />
                <h3 className="v-title">See at a Glance</h3>
                <p className="v-para">
                  This is our some demo designs. We always try to create new
                  design of buildings and implement those designs in our
                  projects.
                </p>
                <div className="row">
                  <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    {/* <!-- Carousel --> */}
                    <div id="carousel-example" className="carousel slide">
                      <ol className="carousel-indicators">
                        <li
                          data-target="#carousel-example"
                          data-slide-to="0"
                          className="active"
                        ></li>
                        <li
                          data-target="#carousel-example"
                          data-slide-to="1"
                        ></li>
                        <li
                          data-target="#carousel-example"
                          data-slide-to="2"
                        ></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              className="embed-responsive-item"
                              src="https://www.youtube.com/embed/gv0Ktpi2wA4?si=FKsGfxbHj9aFL2Ux"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              className="embed-responsive-item"
                              src="https://www.youtube.com/embed/MO19LW02FP8"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                              className="embed-responsive-item"
                              src="https://www.youtube.com/embed/J0JU7HW20FU"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>

                      <a
                        className="carousel-control-prev"
                        href="#carousel-example"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carousel-example"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                    {/* <!-- End carousel --> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
