import React from 'react'
import { Link } from 'react-router-dom'

export default function Teams() {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center"><span />Our Team<span /></p>
          <h1 className="text-center mb-5">Our Team Members</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item bg-light rounded">
              <div className="text-center border-bottom p-4">
                <img className="img-fluid rounded-circle mb-4" src="assets/img/team-1.jpg" alt='' />
                <h5>John Doe</h5>
                <span>CEO &amp; Founder</span>
              </div>
              <div className="d-flex justify-content-center p-4">
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-facebook-f" /></Link>
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-twitter" /></Link>
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-instagram" /></Link>
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-linkedin-in" /></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded">
              <div className="text-center border-bottom p-4">
                <img className="img-fluid rounded-circle mb-4" src="assets/img/team-2.jpg" alt='' />
                <h5>Jessica Brown</h5>
                <span>Web Designer</span>
              </div>
              <div className="d-flex justify-content-center p-4">
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-facebook-f" /></Link>
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-twitter" /></Link>
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-instagram" /></Link>
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-linkedin-in" /></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item bg-light rounded">
              <div className="text-center border-bottom p-4">
                <img className="img-fluid rounded-circle mb-4" src="assets/img/team-3.jpg" alt='' />
                <h5>Tony Johnson</h5>
                <span>SEO Expert</span>
              </div>
              <div className="d-flex justify-content-center p-4">
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-facebook-f" /></Link>
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-twitter" /></Link>
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-instagram" /></Link>
                <Link className="btn btn-square mx-1" to="/"><i className="fab fa-linkedin-in" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
