// import React from "react";

export default function Query() {
  return (
    <>
      <section id="" className="services background-skyish">
        <div className="container">
          {/* <!--======= TITTLE =========--> */}
          <div className="tittle">
            {" "}
            <img src="images/head-top.png" alt="" />
            <h3>Queries</h3>
            <p>
              This is the queries portion where you can connect to us in
              different ways.
            </p>
          </div>

          <ul className="row">
            {/* <!--======= SERVICE SECTION =========--> */}
            <li className="col-sm-4">
              <section>
                {/* <!--======= SERVICE IMG =========-->  */}
                <img
                  className="img-responsive"
                  src="../assets/images/home/home-loan.jpg"
                  alt=""
                />
                <div className="icon">
                  {" "}
                  <img src="images/icon-services-3.png" alt="" />{" "}
                </div>
                {/* <!--======= SERVICE HOVER =========--> */}
                <div className="ser-hover">
                  <p>
                    And when the odds are against him and their dangers work to
                    do. You bet your life Speed Racer{" "}
                    <a
                      href="home-loan.html"
                      target="_blank"
                      className="read-more"
                    >
                      Read more <i className="fa fa-angle-double-right"></i>
                    </a>{" "}
                  </p>
                </div>
                <a href="home-loan.php" target="_blank" className="heading">
                  HOME LOAN
                </a>{" "}
              </section>
            </li>

            {/* <!--======= SERVICE SECTION =========--> */}
            <li className="col-sm-4">
              <section>
                {/* <!--======= SERVICE IMG =========-->  */}
                <img
                  className="img-responsive"
                  src="../assets/images/home/appartment-query.jpg"
                  alt=""
                />
                <div className="icon">
                  {" "}
                  <img src="images/icon-services-3.png" alt="" />{" "}
                </div>

                {/* <!--======= SERVICE HOVER =========--> */}
                <div className="ser-hover">
                  <p>
                    And when the odds are against him and their dangers work to
                    do. You bet your life Speed Racer{" "}
                    <a
                      href="appt-query.html"
                      target="_blank"
                      className="read-more"
                    >
                      Read more <i className="fa fa-angle-double-right"></i>
                    </a>{" "}
                  </p>
                </div>
                <a href="appt-query.php" target="_blank" className="heading">
                  APARTMENT QUERY{" "}
                </a>
              </section>
            </li>

            {/* <!--======= SERVICE SECTION =========--> */}
            <li className="col-sm-4">
              <section>
                {/* <!--======= SERVICE IMG =========-->  */}
                <img
                  className="img-responsive"
                  src="images/home/joint-venture.jpg"
                  alt=""
                />
                <div className="icon">
                  {" "}
                  <img src="../assets/images/icon-services-3.png" alt="" />{" "}
                </div>
                {/* <!--======= SERVICE HOVER =========--> */}
                <div className="ser-hover">
                  <p>
                    And when the odds are against him and their dangers work to
                    do. You bet your life Speed Racer{" "}
                    <a
                      href="land-joint-venture.html"
                      target="_blank"
                      className="read-more"
                    >
                      Read more <i className="fa fa-angle-double-right"></i>
                    </a>{" "}
                  </p>
                </div>
                <a
                  href="land-joint-venture.php"
                  target="_blank"
                  className="heading"
                >
                  JOINT VENTURE LAND DEVELOPMENT
                </a>{" "}
              </section>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
