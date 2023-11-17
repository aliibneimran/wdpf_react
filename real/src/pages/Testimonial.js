import React from 'react'
import { Link } from 'react-router-dom'

export default function Testimonial() {
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link className="text-white" to="#">Home</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            {/* <!-- Testimonial Start --> */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="section-title text-center">
                        <h1 className="display-5 mb-5">Testimonial</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item text-center">
                            <img className="img-fluid bg-light p-2 mx-auto mb-3" src="assets/img/testimonial-1.jpg" style={{ width: "90px", height: "90px;" }} alt='' />
                            <div className="testimonial-text text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Client Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="img-fluid bg-light p-2 mx-auto mb-3" src="assets/img/testimonial-2.jpg" style={{ width: "90px", height: "90px;" }} alt='' />
                            <div className="testimonial-text text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Client Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="img-fluid bg-light p-2 mx-auto mb-3" src="assets/img/testimonial-3.jpg" style={{ width: "90px", height: "90px;" }} alt='' />
                            <div className="testimonial-text text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Client Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
    )
}
