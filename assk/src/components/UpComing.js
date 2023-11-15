import React from 'react'

export default function UpComing() {
  return (
    <>
     <section id="Upcoming" className="properties background-aliceblue">
        <div className="container">
          {/* <!--======= TITTLE =========--> */}
          <div className="tittle">
            {" "}
            <img src="assets/images/head-top.png" alt="" />
            <h3>Our Upcoming Project</h3>
            <p>See the Upcoming projects of ASSK</p>
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
                    src="assets/images/project/feature-bagal-bilash.jpg"
                    alt="Mayer-Anchal"
                  />
                  {/* <!--======= IMAGE HOVER =========--> */}
                  <div className="over-proper">
                    {" "}
                    <a href="bagan-bilash.php" className="btn font-montserrat">
                      more details
                    </a>{" "}
                  </div>
                </div>
                {/* <!--======= HOME INNER DETAILS =========--> */}
                <ul className="home-in">
                  <li>
                    <span>
                      <i className="fa fa-home"></i> 24 Katha
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
                  <a href="bagan-bilash.php" className="font-montserrat">
                    ASSK Manhattan City
                  </a>{" "}
                  <span className="locate">
                    <i className="fa fa-map-marker"></i> Nandipara(Baganbari),
                    Banasree, Dhaka.{" "}
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
                    src="assets/images/project/Shabuddin-Fortune/"
                    alt=""
                  />
                  {/* <!--======= IMAGE HOVER =========--> */}
                  <div className="over-proper">
                    {" "}
                    <a href="#" className="btn font-montserrat">
                      more details
                    </a>{" "}
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
                  <a href="#" className="font-montserrat">
                    Sahabuddin Fortune
                  </a>{" "}
                  <span className="locate">
                    <i className="fa fa-map-marker"></i> Dag - 6379 & 6380,
                    Mouza: Vatara, Dhaka{" "}
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
                    src="assets/images/project/Spanish-Velabista"
                    alt=""
                  />
                  {/* <!--======= IMAGE HOVER =========-->
                   */}
                  <div className="over-proper">
                    {" "}
                    <a href="#" className="btn font-montserrat">
                      more details
                    </a>{" "}
                  </div>
                </div>
                {/* <!--======= HOME INNER DETAILS =========--> */}
                <ul className="home-in">
                  <li>
                    <span>
                      <i className="fa fa-home"></i> 8.5 Katha
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
                  <a href="#" className="font-montserrat">
                    Spanish Velabista (United city)
                  </a>{" "}
                  <span className="locate">
                    <i className="fa fa-map-marker"></i> Nurerchala, Vatara,
                    Baridhara, Dhaka.{" "}
                  </span>
                  {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}
                </div>
              </section>
            </li>
          </ul>
        </div>
        <div className="custom-btn">
          {" "}
          <a href="Projects.php" className="load-more font-montserrat">
            See More Project
          </a>{" "}
        </div>
      </section>
    </>
  )
}
