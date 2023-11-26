import React from 'react'

export default function Single() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="assets/images/project/proj-slider/Mayer-Achal-Slider-2.jpg"
                            alt="First slide" />

                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="assets/images/project/proj-slider/Mayer-Achal-Slider-3.jpg"
                            alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="assets/images/project/proj-slider/Mayer-Achal-Slider-1.jpg"
                            alt="Second slide" />
                    </div>

                </div>
                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            
            <section class="properti-detsil custom-bac">
                <div class="container">
                    <div class="row">

                        {/* <!--======= LEFT BAR =========--> */}
                        <div class="col-sm-8">
                            {/* <!--======= THUMB SLIDER =========--> */}
                            <div class="thumb-slider">

                                <ul class="slides">
                                    <li> <img class="img-responsive" src="assets/images/project/proj-slider/Mayer-Achal-base.jpg" alt="" /> </li>
                                </ul>

                            </div>

                        </div>
                        {/* <!--======= RIGT SIDEBAR =========--> */}
                        <div class="col-sm-4 side-bar">

                            {/* <!--======= FIND PROPERTY =========--> */}
                            <div class="">

                                <h4 class="proj-title">ASSK Amari Mayer Anchal</h4>

                                <p>Are you looking for an affordable residence in an important & desirably tranquil location in Dhaka? Then ASSK AMARI WAY LTD. could be your best choice.</p>
                                <p>We proudly present you one of our most cherished projects: "MAYER ANCHOL", a 10-Storied Residential Apartment Building. Which will make all of your dreams come true.</p>

                                <a class="flashbtn" data-toggle="modal" data-target="#exampleModalCenter" href="#project">View Details</a>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            {/* <!-- modal code starts --> */}
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center" id="exampleModalLongTitle">Please fill Up the form</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method="POST" action="detail-mayer-anchal">
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label" >Your Name*</label>
                                    <input type="text" class="form-control" name="name" id="recipient-name" required />
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Your Phone*</label>
                                    <input type="text" class="form-control" name="phone" id="recipient-name" required />
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Your Email</label>
                                    <input type="email" class="form-control" name="email" id="recipient-name" />
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Your Location:</label>
                                    <textarea class="form-control" name="message" id="message-text"></textarea>
                                </div>
                                <div class="but-sec">
                                    <button type="button" class="btn btn-secondary mx-1" data-dismiss="modal">Close</button>
                                    <input type="submit" name="send" class="btn btn-primary sub" value="Send" />
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- modal code ends --> */}
        </div>
    )
}
