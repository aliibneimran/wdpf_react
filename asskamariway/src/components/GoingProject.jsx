// import React from "react";

export default function GoingProject() {
  return (
    <>
      <section id="ongoing" className="properties background-gradient-img">
        <div className="container">
          {/* <!--======= TITTLE =========--> */}
          <div className="tittle">
            {" "}
            <img src="images/head-top.png" alt="" />
            <h3>Our Ongoing Project</h3>
            <p>See the Ongoing Projects of ASSK</p>
          </div>

          {/* <!--======= PROPERTIES ROW =========--> */}
          <ul className="row">
            {/* <!--======= PROPERTY =========--> */}
            <li className="col-sm-4">
              {/* <!--======= TAGS =========-->  */}

              <section>
                {/* <!--======= IMAGE =========--> */}
                <div className="z-hover img">
                  {" "}
                  <img
                    className="img-responsive"
                    src="images/project/ASSK City/assk-city-featured.jpg"
                    alt=""
                  />
                  {/* <!--======= IMAGE HOVER =========--> */}
                  <div className="over-proper">
                    {" "}
                    <a href="assk-city.php" className="btn font-montserrat">
                      more details
                    </a>{" "}
                  </div>
                </div>
                {/* <!--======= HOME INNER DETAILS =========--> */}
                <ul className="home-in">
                  <li>
                    <span>
                      <i className="fa fa-home"></i> 20 Katha
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
                  {" "}
                  <a href="assk-city.php" className="font-montserrat">
                    ASSK City
                  </a>{" "}
                  <span className="locate">
                    <i className="fa fa-map-marker"></i> Boston,USA
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
                  {" "}
                  <img
                    className="img-responsive"
                    src="images/project/Newyork city/newyork-featured.jpg"
                    alt=""
                  />
                  {/* <!--======= IMAGE HOVER =========--> */}
                  <div className="over-proper">
                    {" "}
                    <a href="new-york-city.php" className="btn font-montserrat">
                      more details
                    </a>{" "}
                  </div>
                </div>
                {/* <!--======= HOME INNER DETAILS =========--> */}
                <ul className="home-in">
                  <li>
                    <span>
                      <i className="fa fa-home"></i> 18 Katha
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
                  {" "}
                  <a href="new-york-city.php" className="font-montserrat">
                    New York City
                  </a>{" "}
                  <span className="locate">
                    <i className="fa fa-map-marker"></i>North Badda, Gupipara
                    Road, Dhaka
                  </span>
                  {/* <!-- <p>Till the one day when the lady met this fellow </p> --> */}
                </div>
              </section>
            </li>

            {/* <!--======= PROPERTY =========--> */}
            <li className="col-sm-4">
              {/* <!--======= TAGS =========-->  */}

              <section>
                {/* <!--======= IMAGE =========--> */}
                <div className="z-hover img">
                  {" "}
                  <img
                    className="img-responsive"
                    src="images/project/Tisha Kutir/tisha-kutir-featured.jpg"
                    alt=""
                  />
                  {/* <!--======= IMAGE HOVER =========--> */}
                  <div className="over-proper">
                    {" "}
                    <a href="tisha-kuthir.php" className="btn font-montserrat">
                      more details
                    </a>{" "}
                  </div>
                </div>
                {/* <!--======= HOME INNER DETAILS =========--> */}
                <ul className="home-in">
                  <li>
                    <span>
                      <i className="fa fa-home"></i> 11 Katha
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-bed"></i> 3 Bedrooms
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-tty"></i> 4 Bathrooms
                    </span>
                  </li>
                </ul>
                {/* <!--======= HOME DETAILS =========--> */}
                <div className="detail-sec">
                  {" "}
                  <a href="tisha-kuthir.php" className="font-montserrat">
                    Tisha Kutir
                  </a>{" "}
                  <span className="locate">
                    <i className="fa fa-map-marker"></i> Mirbagh, Modhubag,
                    Hatirjheel, Dhaka
                  </span>
                  {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}
                </div>
              </section>
            </li>
          </ul>
        </div>
        <div className="custom-btn">
          {" "}
          <a href="projects.php" className="load-more font-montserrat">
            See More Project
          </a>{" "}
        </div>
      </section>
    </>
  );
}
