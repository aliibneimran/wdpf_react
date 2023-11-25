import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div className='fixed-top'>
      {/* <!--======= TOP BAR =========--> */}
      <div className="top-bar">
        <div className="container">
          <ul className="left-bar-side">
            <li>
              <p>
                <i className="fa fa-mobile"></i> Call Us Now : +8801844646688
                (24 X 7)
              </p>
              <span>|</span>
            </li>
            <li>
              <p>
                <i className="fa fa-envelope"></i> info@asskamariway.com
              </p>
              <span>|</span>
            </li>
            <li className="item-bro">
              <Link target="_blank" to="ASSK-Brochure.pdf">
                Download Brochure
              </Link>
            </li>
          </ul>
          <ul className="right-bar-side social_icons">
            <li className="facebook">

              <Link to="https://www.facebook.com/asskamariway">
                <i className="fa fa-facebook"></i>
              </Link>
            </li>
            <li className="twitter">

              <Link to="/">
                <i className="fa fa-twitter"></i>
              </Link>
            </li>
            <li className="linkedin">

              <Link to="/">
                <i className="fa fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <!--======= HEADER =========--> */}
      <header className="navbar-sticky">
        <div className="container">
          {/* <!--======= LOGO =========--> */}
          <div className="logo">
            <Link to="/">
              <img
                className="image-logo"
                src="assets/images/logo-version1.gif"
                alt=""
              />
            </Link>
          </div>
          {/* <!--======= NAV =========--> */}
          <nav>
            <ul className="ownmenu" id="myDIV">
              <li className="item active">
                <Link to="/">Home</Link>
              </li>
              <li className="item">
                <Link to="/about">About Us</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/about">About ASSK</Link>
                  </li>
                  <li>
                    <Link to="/">Our Leaders</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="chairman-desk.php">Chairman Desk</Link>
                      </li>
                      <li>
                        <Link to="/">Sales & Marketing Desk</Link>
                      </li>
                      <li>
                        <Link to="/">Civil Engineer Desk</Link>
                      </li>
                      <li>
                        <Link to="/">Accounts Desk</Link>
                      </li>
                      <li>
                        <Link to="/">Procurement Desk</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="mission.php">Mission and Vision</Link>
                  </li>
                  <li>
                    <Link to="why-us.php">Why ASSK?</Link>
                  </li>

                  <li>
                    <Link to="message.php">Chairman’s Message</Link>
                  </li>
                  <li>
                    <Link to="message-cgm.php">Corporate GM's Message</Link>
                  </li>
                </ul>
              </li>
              <li className="item">
                <Link to="projects.php">Our Projects</Link>
              </li>

              <li className="item">
                <Link to="gallery.php">Gallery</Link>
              </li>
              <li className="item">
                <Link to="https://news.asskamariway.com/" target="_blank">
                  News & Events
                </Link>
              </li>
              <li className="item">
                <Link to="landowner.php">LANDOWNERS</Link>
              </li>
              <li className="item">
                <Link to="contact.php">Contact us</Link>
              </li>
            </ul>

            {/* <!--======= SUBMIT COUPON =========--> */}
            <div className="sub-nav-co">

              <Link to="#.">
                <i className="fa fa-search"></i>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
    </>
  )
}
