import React from 'react'
import { Link } from 'react-router-dom'

export default function Team() {
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link className="text-white" to="#">Home</Link></li>
                            <li className="breadcrumb-item"><Link className="text-white" to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            {/* <!-- Team Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="section-title text-center">
                        <h1 className="display-5 mb-5">Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src="assets/img/team-1.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center border border-5 border-light border-top-0 p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src="assets/img/team-2.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center border border-5 border-light border-top-0 p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src="assets/img/team-3.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center border border-5 border-light border-top-0 p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src="assets/img/team-4.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center border border-5 border-light border-top-0 p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src="assets/img/team-2.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center border border-5 border-light border-top-0 p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src="assets/img/team-3.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center border border-5 border-light border-top-0 p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src="assets/img/team-4.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center border border-5 border-light border-top-0 p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img className="img-fluid" src="assets/img/team-1.jpg" alt="" />
                                    <div className="team-social">
                                        <Link className="btn btn-square" to=""><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square" to=""><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                                <div className="text-center border border-5 border-light border-top-0 p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}
        </>
    )
}
