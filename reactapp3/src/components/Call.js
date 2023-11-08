import React from "react";

export default function Call() {
  return (
    <>
      {/* <!-- Call To Action Start --> */}
      <div
        className="container-fluid py-5 call-to-action wow fadeInUp"
        data-wow-delay=".3s"
        style={{margin: "6rem 0;"}}
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
    </>
  );
}
