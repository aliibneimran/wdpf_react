import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Project</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link className="text-white" to="#">Home</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Project</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Projects Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="section-title text-center">
                        <h1 className="display-5 mb-5">Our Projects</h1>
                    </div>
                    <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12 text-center">
                            <ul className="list-inline mb-5" id="portfolio-flters">
                                <li className="mx-2 active" data-filter="*">All</li>
                                <li className="mx-2" data-filter=".first">General Carpentry</li>
                                <li className="mx-2" data-filter=".second">Custom Carpentry</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-4 portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div className="rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="assets/img/portfolio-1.jpg" alt="" />
                                    <div className="portfolio-overlay">
                                        <Link className="btn btn-square btn-outline-light mx-1" to="/assets/img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                        <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                    </div>
                                </div>
                                <div className="border border-5 border-light border-top-0 p-4">
                                    <p className="text-primary fw-medium mb-2">General Carpentry</p>
                                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                            <div className="rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="assets/img/portfolio-2.jpg" alt="" />
                                    <div className="portfolio-overlay">
                                        <Link className="btn btn-square btn-outline-light mx-1" to="/assets/img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                        <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                    </div>
                                </div>
                                <div className="border border-5 border-light border-top-0 p-4">
                                    <p className="text-primary fw-medium mb-2">Custom Carpentry</p>
                                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                            <div className="rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="assets/img/portfolio-3.jpg" alt="" />
                                    <div className="portfolio-overlay">
                                        <Link className="btn btn-square btn-outline-light mx-1" to="/assets/img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                        <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                    </div>
                                </div>
                                <div className="border border-5 border-light border-top-0 p-4">
                                    <p className="text-primary fw-medium mb-2">General Carpentry</p>
                                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                            <div className="rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="assets/img/portfolio-4.jpg" alt="" />
                                    <div className="portfolio-overlay">
                                        <Link className="btn btn-square btn-outline-light mx-1" to="/assets/img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                        <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                    </div>
                                </div>
                                <div className="border border-5 border-light border-top-0 p-4">
                                    <p className="text-primary fw-medium mb-2">Custom Carpentry</p>
                                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                            <div className="rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="assets/img/portfolio-5.jpg" alt="" />
                                    <div className="portfolio-overlay">
                                        <Link className="btn btn-square btn-outline-light mx-1" to="/assets/img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                        <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                    </div>
                                </div>
                                <div className="border border-5 border-light border-top-0 p-4">
                                    <p className="text-primary fw-medium mb-2">General Carpentry</p>
                                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                            <div className="rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="assets/img/portfolio-6.jpg" alt="" />
                                    <div className="portfolio-overlay">
                                        <Link className="btn btn-square btn-outline-light mx-1" to="/assets/img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></Link>
                                        <Link className="btn btn-square btn-outline-light mx-1" to=""><i className="fa fa-link"></i></Link>
                                    </div>
                                </div>
                                <div className="border border-5 border-light border-top-0 p-4">
                                    <p className="text-primary fw-medium mb-2">Custom Carpentry</p>
                                    <h5 className="lh-base mb-0">Wooden Furniture Manufacturing And Remodeling</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Projects End --> */}
        </>
    )
}
