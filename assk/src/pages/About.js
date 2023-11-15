import React from 'react'

export default function About() {
  return (
    <>
      {/* <!--======= BANNER =========--> */}
      <div class="sub-banner">
        <div class="overlay">
          <div class="container">
            <h1>ABOUT US</h1>
            <ol class="breadcrumb">
              <li class="pull-left">ABOUT US</li>
              <li><a href="./">Home</a></li>
              <li><a href="#">/</a></li>
              <li class="active">ABOUT US</li>
            </ol>
          </div>
        </div>
      </div>


      {/* <!--======= WHAT WE DO =========--> */}
      <section class="what-we-do">
        <div class="container">

          {/* <!--======= TITTLE =========--> */}
          <div class="tittle"> <img src="assets/images/head-top.png" alt="" />
            <h3>Know Us</h3>
            <p>We started to meet the challenges of 21st century, particularly to tackle the increasing need for real estate development that moved beyond the traditional scopes. Since our inception, we have guided numerous customers to complete projects both in Bangladesh and USA. Our endeavor has created job opportunities, grown economies and improved the resilience of the respective country’s infrastructure. Our services cover initial planning, investment and operations.</p>
            <p>Aligning our capabilities, we aim to build a long term positive impact achieved by the quality of our people along with our firm commitment to deliver the most successful outcomes.</p>
            <p>Assk Amari Way Developer Ltd. always focuses on client satisfaction since we believe in forming a durable and trustworthy relationship. Our main goal is to provide our valued clients with the best place of their dream. Our dedicated team having years of working experience is essentially capable of inferring customer needs and demands.</p>
          </div>
        </div>
      </section>



      {/* <!--======= CALL US =========--> */}

      <section class="call-us">
        <div class="overlay">
          <div class="container">
            <ul class="row">
              <li class="col-sm-6">
                <h4>Do you want to sell your property ?</h4>
                <h6>Call us now</h6>
              </li>
              <li class="col-sm-4">
                <h1>01844646688</h1>
              </li>
              <li class="col-sm-2 no-padding"> <a href="contact" class="btn">just contact us</a> </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!--======= PARTHNER =========--> */}
      <section class="parthner">
        <div class="container">
          {/* <!--======= TITTLE =========--> */}
          <div class="tittle"> <img src="assets/images/head-top.png" alt="" />
            <h3>our trusted partners</h3>
            <p>This time there's no stopping us. Straightnin' the curves. Flatnin' the hills Someday the mountain might get ‘em but the law never will. The weather started getting rough - the tiny ship was tossed.</p>
          </div>

          {/* <!--======= PARTHNERS =========--> */}
          <div class="parthner-slide">
            <div class="part"> <a href="#."> <img src="assets/images/parthner-img-1.jpg" alt="" /> </a> </div>

            {/* <!--======= PARTHNERS =========--> */}
            <div class="part"> <a href="#."> <img src="assets/images/parthner-img-2.png" alt="" /> </a> </div>

            {/*   {/* <!--======= PARTHNERS =========--> */}
            <div class="part"> <a href="#."> <img src="assets/images/parthner-img-3.jpg" alt="" /> </a> </div>

            {/* <!--======= PARTHNERS =========--> */}
            <div class="part"> <a href="#."> <img src="assets/images/parthner-img-4.jpg" alt="" /> </a> </div>

            {/* <!--======= PARTHNERS =========--> */}
            <div class="part"> <a href="#."> <img src="assets/images/parthner-img-5.jpg" alt="" /> </a> </div>

            {/* <!--======= PARTHNERS =========--> */}
            <div class="part"> <a href="#."> <img src="assets/images/parthner-img-6.jpg" alt="" /> </a> </div>
          </div>
        </div>
      </section>
    </>
  )
}
