import React from "react";

export default function AboutUs() {
  return (
    <>
      {/* <!-- About Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-img">
                <div className="rotate-left bg-dark"></div>
                <div className="rotate-right bg-dark"></div>
                <img
                  src="assets/img/about-img.jpg"
                  className="img-fluid h-100"
                  alt="img"
                />
                <div className="bg-white experiences">
                  <h1 className="display-3">20</h1>
                  <h6 className="fw-bold">Years Of Experiences</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".6s">
              <div className="about-item overflow-hidden">
                <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">
                  About PestKit
                </h5>
                <h1 className="display-5 mb-2">
                  World Best Pest Control Services Since 2008
                </h1>
                <p className="fs-5" style={{textAlign: "justify"}}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiu smod tempor incididunt ut labore dolore magna aliqua.Quis
                  ipsum suspen disse ultrices gravida Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="row">
                  <div className="col-3">
                    <div className="text-center">
                      <div
                        className="p-4 bg-dark rounded d-flex"
                        style={{alignItems: "center", justifyContent: "center"}}
                      >
                        <i className="fas fa-city fa-4x text-primary"></i>
                      </div>
                      <div className="my-2">
                        <h5>Building</h5>
                        <h5>Cleaning</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="text-center">
                      <div
                        className="p-4 bg-dark rounded d-flex"
                        style={{alignItems: "center", justifyContent: "center"}}
                      >
                        <i className="fas fa-school fa-4x text-primary"></i>
                      </div>
                      <div className="my-2">
                        <h5>Education</h5>
                        <h5>center</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="text-center">
                      <div
                        className="p-4 bg-dark rounded d-flex"
                        style={{alignItems: "center", justifyContent: "center"}}
                      >
                        <i className="fas fa-warehouse fa-4x text-primary"></i>
                      </div>
                      <div className="my-2">
                        <h5>Warehouse</h5>
                        <h5>Cleaning</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="text-center">
                      <div
                        className="p-4 bg-dark rounded d-flex"
                        style={{alignItems: "center", justifyContent: "center"}}
                      >
                        <i className="fas fa-hospital fa-4x text-primary"></i>
                      </div>
                      <div className="my-2">
                        <h5>Hospital</h5>
                        <h5>Cleaning</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-5"
                >
                  Find Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
}
