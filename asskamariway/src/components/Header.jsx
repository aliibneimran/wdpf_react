// import React from 'react'

export default function Header() {
  return (
    <>
      {/* <!--======= TOP BAR =========--> */}
      <div className="top-bar">
        <div className="container">
          <ul className="left-bar-side">
            <li>
              <p>
                <i className="fa fa-mobile"></i> Call Us Now : +8801844646688
                (24 X 7){" "}
              </p>
              <span>|</span>{" "}
            </li>
            <li>
              <p>
                <i className="fa fa-envelope"></i> info@asskamariway.com{" "}
              </p>
              <span>|</span>{" "}
            </li>
            <li className="item-bro">
              <a target="_blank" href="ASSK-Brochure.pdf">
                Download Brochure
              </a>
            </li>
          </ul>
          <ul className="right-bar-side social_icons">
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
        </div>
      </div>
      {/* <!--======= HEADER =========--> */}
      <header className="sticky">
        <div className="container">
          {/* <!--======= LOGO =========--> */}
          <div className="logo">
            {" "}
            <a href="./">
              <img
                className="image-logo"
                src="images/logo-version1.gif"
                alt=""
              />
            </a>{" "}
          </div>
          {/* <!--======= NAV =========--> */}
          <nav>
            {/* <!--======= MENU START =========--> */}
            <ul className="ownmenu" id="myDIV">
              <li className="item active">
                <a href="./">Home</a>
              </li>
              <li className="item">
                <a href="#">About Us</a>
                <ul className="dropdown">
                  <li>
                    <a href="about-us.php">About ASSK</a>
                  </li>
                  <li>
                    <a href="#">Our Leaders</a>
                    <ul className="dropdown">
                      <li>
                        <a href="chairman-desk.php">Chairman Desk</a>
                      </li>
                      <li>
                        <a href="#">Sales & Marketing Desk</a>
                      </li>
                      <li>
                        <a href="#">Civil Engineer Desk</a>
                      </li>
                      <li>
                        <a href="#">Accounts Desk</a>
                      </li>
                      <li>
                        <a href="#">Procurement Desk</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="mission.php">Mission and Vision</a>
                  </li>
                  <li>
                    <a href="why-us.php">Why ASSK?</a>
                  </li>

                  <li>
                    <a href="message.php">Chairman’s Message</a>
                  </li>
                  <li>
                    <a href="message-cgm.php">Corporate GM’s Message</a>
                  </li>
                </ul>
              </li>
              <li className="item">
                <a href="projects.php">Our Projects</a>
              </li>

              <li className="item">
                <a href="gallery.php">Gallery</a>
              </li>
              <li className="item">
                {/* <a href="https://news.asskamariway.com/" target="_blank">
                  News & Events
                </a> */}
              </li>
              <li className="item">
                <a href="landowner.php">LANDOWNERS</a>
              </li>
              <li className="item">
                <a href="contact.php">Contact us</a>
              </li>
            </ul>

            {/* <!--======= SUBMIT COUPON =========--> */}
            <div className="sub-nav-co">
              {" "}
              <a href="#.">
                <i className="fa fa-search"></i>
              </a>{" "}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
