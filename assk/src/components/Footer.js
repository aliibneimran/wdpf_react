import React from 'react'

export default function Footer() {
  return (
    <>
        {/* <!--======= FOOTER =========--> */}
        <footer>
          <div className="container">
            {/* <!--======= NEWSLETTER =========--> */}
            <div className="subcribe"></div>
            <ul className="row">
              {/* <!--======= HAPPY CLIENTS =========--> */}
              <li className="col-sm-6">
                <h5>About us</h5>
                <hr />
                <p>
                  We are a US-based real estate company in Bangladesh having a
                  strong reputation for trust and reliability. We feel honesty,
                  integrity and trust play key roles in managing an excellent
                  relationship with the clients.
                </p>

                {/* <!--======= SOCIAL ICONS =========--> */}

                <ul className="social_icons">
                  <li className="facebook">
                    {" "}
                    <a href="https://www.facebook.com/asskamariway">
                      <i className="fa fa-facebook"></i>{" "}
                    </a>
                  </li>
                  <li className="twitter">
                    {" "}
                    <a href="#">
                      <i className="fa fa-twitter"></i>{" "}
                    </a>
                  </li>
                  <li className="linkedin">
                    {" "}
                    <a href="#">
                      <i className="fa fa-linkedin"></i>{" "}
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!--======= HAPPY CLIENTS =========--> */}
              <li className="col-sm-6">
                {/* <!--======= LINKS =========--> */}
                <h5>Contact</h5>
                <hr />
                <div className="loc-info">
                  <p>
                    <i className="fa fa-map-marker"></i> House: 11/B (1st Floor),
                    Road: 130, Gulshan-1, Dhaka-1212
                  </p>
                  <p>
                    <i className="fa fa-phone"></i> +88-02-588160305
                  </p>
                  <p>
                    <i className="fa fa-print"></i> +88 01844646688 (24 X 7)
                  </p>
                  <p>
                    <i className="fa fa-envelope-o"></i> info@asskamariway.com
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </footer>

        {/* <!--======= RIGHTS =========--> */}
        <div className="rights">
          <div className="container">
            <div className="col-sm-12">
              <div className="col-sm-6">
                <p>©2021 Assk Amari Way. All rights reserved</p>
              </div>
              {/* <!-- <div className="col-sm-6"><p >Developed By <a href="#">DiGiCart Solutions Ltd.</a></p></div> --> */}
            </div>
          </div>
        </div>
    </>
  )
}
