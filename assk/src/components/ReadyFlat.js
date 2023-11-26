import React from 'react'
import { Link } from 'react-router-dom'

export default function ReadyFlat() {
  return (
    <>
    {/* <!--======= Ready Flat portion =========-->
       */}
      {/* <!--======= PROPERTY =========--> */}
      <section id="completed" className="properties background-aliceblue">
        <div className="container">
          {/* <!--======= TITTLE =========--> */}
          <div className="tittle">
            <img src="images/head-top.png" alt="" />
            <h3>Our Ready Project</h3>
            <p>See the ready projects of ASSK</p>
          </div>

          {/* <!--======= PROPERTIES ROW =========--> */}
          <ul className="row">
            {/* <!--======= PROPERTY =========--> */}
            <li className="col-sm-4">
              {/* <!--======= TAGS =========-->  */}

              <section>
                {/* <!--======= IMAGE =========--> */}
                <div className="z-hover img">
                  <img
                    className="img-responsive"
                    src="assets/images/project/m-anchal-featured.jpg"
                    alt="Mayer-Anchal"
                  />
                  {/* <!--======= IMAGE HOVER =========--> */}
                  <div className="over-proper">
                    <Link to="/single" className="btn font-montserrat">
                      more details
                    </Link>
                  </div>
                </div>
                {/* <!--======= HOME INNER DETAILS =========--> */}
                <ul className="home-in">
                  <li>
                    <span>
                      <i className="fa fa-home"></i> 14 Katha
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-bed"></i> 3 Bedrooms
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-tty"></i> 3 Bathrooms
                    </span>
                  </li>
                </ul>
                {/* <!--======= HOME DETAILS =========--> */}
                <div className="detail-sec">
                  <Link to="mayer-anchal.php" className="font-montserrat">
                    Mayer Anchal
                  </Link>
                  <span className="locate">
                    <i className="fa fa-map-marker"></i>Jagannathpur Shaheed
                    Abdul Aziz Sarak, Vatara, Dhaka
                  </span>
                  {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}
                </div>
              </section>
            </li>

            <li className="col-sm-4">
              {/* <!--======= TAGS =========-->  */}

              <section>
                {/* <!--======= IMAGE =========--> */}
                <div className="z-hover img">
                  {" "}
                  <img
                    className="img-responsive"
                    src="assets/images/project/featured-sas-castle.jpg"
                    alt="sas-castle"
                  />
                  {/* <!--======= IMAGE HOVER =========--> */}
                  <div className="over-proper">
                    <Link to="sas-castle.php" className="btn font-montserrat">
                      more details
                    </Link>
                  </div>
                </div>
                {/* <!--======= HOME INNER DETAILS =========--> */}
                <ul className="home-in">
                  <li>
                    <span>
                      <i className="fa fa-home"></i> 7 Katha
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-bed"></i> 3 and 4 Bedrooms
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-tty"></i> 3 Bathrooms
                    </span>
                  </li>
                </ul>
                {/* <!--======= HOME DETAILS =========--> */}
                <div className="detail-sec">
                  {" "}
                  <Link to="sas-castle.php" className="font-montserrat">
                    The SAS Castle
                  </Link>{" "}
                  <span className="locate">
                    <i className="fa fa-map-marker"></i> Queen's Garden,
                    Nurerchala, Vatara, Baridhara, Dhaka.{" "}
                  </span>
                  {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}
                </div>
              </section>
            </li>

            {/* <!--======= PROPERTY =========--> */}
            <li className="col-sm-4">
              {/* <!--======= TAGS =========-->  */}

              <section>
                {/* <!--======= IMAGE =========--> */}
                <div className="z-hover img">
                  <img
                    className="img-responsive"
                    src="assets/images/project/d-dream-featured.jpg"
                    alt="D Dream"
                  />
                  {/* <!--======= IMAGE HOVER =========--> */}
                  <div className="over-proper">
                    <Link to="d-dream.php" className="btn font-montserrat">
                      more details
                    </Link>
                  </div>
                </div>
                {/* <!--======= HOME INNER DETAILS =========--> */}
                <ul className="home-in">
                  <li>
                    <span>
                      <i className="fa fa-home"></i> 29 Katha
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-bed"></i> 3 Bedrooms
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-tty"></i> 2 or 3 Bathrooms
                    </span>
                  </li>
                </ul>
                {/* <!--======= HOME DETAILS =========--> */}
                <div className="detail-sec">
                  <Link to="d-dream.php" className="font-montserrat">
                    D Dream
                  </Link>
                  <span className="locate">
                    <i className="fa fa-map-marker"></i> Queen's Garden,
                    Nurerchala Baridhara, Vatara, Dhaka.
                  </span>
                  {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}
                </div>
              </section>
            </li>
          </ul>
        </div>
        <div className="custom-btn">
          <Link to="projects.php" className="load-more font-montserrat">
            See More Project
          </Link>
        </div>
      </section>
    </>
  )
}
