import React from "react";

export default function Slider() {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid carousel px-0 mb-5 pb-5">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="First slide"
            ></li>
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="1"
              aria-label="Second slide"
            ></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="assets/img/carousel-2.jpg"
                className="img-fluid w-100"
                alt="First slide"
              />
              <div className="carousel-caption">
                <div className="container carousel-content">
                  <h4 className="text-white mb-4 animated slideInDown">
                    No 1 Pest Control Services
                  </h4>
                  <h1 className="text-white display-1 mb-4 animated slideInDown">
                    Enjoy Your Home Totally Pest Free
                  </h1>
                  <a href="" className="me-2">
                    <button
                      type="button"
                      className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown"
                    >
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="assets/img/carousel-1.jpg"
                className="img-fluid w-100"
                alt="Second slide"
              />
              <div className="carousel-caption">
                <div className="container carousel-content">
                  <h4 className="text-white mb-4 animated slideInDown">
                    No 1 Pest Control Services
                  </h4>
                  <h1 className="text-white display-1 mb-4 animated slideInDown">
                    Enjoy Your Home Totally Pest Free
                  </h1>
                  <a href="" className="me-2">
                    <button
                      type="button"
                      className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown"
                    >
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev btn btn-primary border border-2 border-start-0 border-primary"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next btn btn-primary border border-2 border-end-0 border-primary"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}
    </>
  );
}
