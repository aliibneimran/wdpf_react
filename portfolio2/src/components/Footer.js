import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Address<span /></p>
            <p><i className="fa fa-map-marker-alt me-3" />Dhaka, Bangladesh</p>
            <p><i className="fa fa-phone-alt me-3" />+880 1787 515196</p>
            <p><i className="fa fa-envelope me-3" />aliibneimran1996@gmail.com</p>
            <div className="d-flex pt-2">
              <Link className="btn btn-outline-light btn-social" to="https://twitter.com/ali_ibne_imran?t=NkGyEEN6B5xy7XSW3ilb_A&s=09"><i className="fab fa-twitter" target="_blank"/></Link>
              <Link className="btn btn-outline-light btn-social" to="https://www.facebook.com/profile.php?id=100007773072162"><i className="fab fa-facebook-f" /></Link>
              <Link className="btn btn-outline-light btn-social" to="/https://www.instagram.com/ali_ibne_imran/"><i className="fab fa-instagram" /></Link>
              <Link className="btn btn-outline-light btn-social" to="https://www.linkedin.com/in/ali-ibne-imran-963494152"><i className="fab fa-linkedin-in" /></Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Quick Link<span /></p>
            <Link className="btn btn-link" to="/about">About Us</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <Link className="btn btn-link" to="/">Privacy Policy</Link>
            <Link className="btn btn-link" to="/">Terms &amp; Condition</Link>
            <Link className="btn btn-link" to="/">Career</Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Gallery<span /></p>
            <div className="row g-2">
              <div className="col-4">
                <img className="img-fluid" src="assets/img/portfolio-1.jpg" alt="Img" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="assets/img/portfolio-2.jpg" alt="Img" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="assets/img/portfolio-3.jpg" alt="Img" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="assets/img/portfolio-4.jpg" alt="Img" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="assets/img/portfolio-5.jpg" alt="Img" />
              </div>
              <div className="col-4">
                <img className="img-fluid" src="assets/img/portfolio-6.jpg" alt="Img" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">Newsletter<span /></p>
            <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
            <div className="position-relative w-100 mt-3">
              <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ height: 48 }} />
              <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4" /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © <Link className="border-bottom" to="/#">ALI IBNE IMRAN</Link>, All Right Reserved.
              {/* Developed By <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link><br /><br /> */}
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="/">Home</Link>
                <Link to="/">Cookies</Link>
                <Link to="/contact">Help</Link>
                <Link to="/">FQAs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
