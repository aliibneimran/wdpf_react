// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div id="wrap" className="home-1">

{/* <!--======= TOP BAR =========--> */}
<div className="top-bar">
  <div className="container">
    <ul className="left-bar-side">
      <li>
        <p><i className="fa fa-mobile"></i> Call Us Now : +8801844646688 (24 X 7) </p>
        <span>|</span> </li>
      <li>
        <p><i className="fa fa-envelope"></i> info@asskamariway.com </p>
        <span>|</span> </li>
      <li className="item-bro"><a target="_blank" href="ASSK-Brochure.pdf">Download Brochure</a></li>

    </ul>
    <ul className="right-bar-side social_icons">
      <li className="facebook"> <a href="https://www.facebook.com/asskamariway"><i className="fa fa-facebook"></i> </a></li>
      <li className="twitter"> <a href="#"><i className="fa fa-twitter"></i> </a></li>
      <li className="linkedin"> <a href="#"><i className="fa fa-linkedin"></i> </a></li>

    </ul>
  </div>
</div>

{/* <!--======= HEADER =========--> */}
<header className="sticky">
  <div className="container">

    {/* <!--======= LOGO =========--> */}
    <div className="logo"> <a href="./"><img className="image-logo" src="images/logo-version1.gif" alt="" /></a> </div>
    {/* <!--======= NAV =========--> */}
    <nav>

      {/* <!--======= MENU START =========--> */}
      <ul className="ownmenu" id="myDIV">
        <li className="item active"><a href="./">Home</a></li>
        <li className="item"><a href="#">About Us</a>
          <ul className="dropdown">
            <li><a href="about-us.php">About ASSK</a></li>
            <li><a href="#">Our Leaders</a>
              <ul className="dropdown">
                <li><a href="chairman-desk.php">Chairman Desk</a></li>
                <li><a href="#">Sales & Marketing Desk</a></li>
                <li><a href="#">Civil Engineer Desk</a></li>
                <li><a href="#">Accounts Desk</a></li>
                <li><a href="#">Procurement Desk</a></li>
              </ul>

            </li>
            <li><a href="mission.php">Mission and Vision</a></li>
            <li><a href="why-us.php">Why ASSK?</a></li>


            <li><a href="message.php">Chairman’s Message</a></li>
            <li><a href="message-cgm.php">Corporate GM's Message</a></li>



          </ul>
        </li>
        <li className="item"><a href="projects.php">Our Projects</a></li>

        <li className="item"><a href="gallery.php">Gallery</a></li>
        <li className="item"><a href="https://news.asskamariway.com/" target="_blank">News & Events</a></li>
        <li className="item"><a href="landowner.php">LANDOWNERS</a></li>
        <li className="item"><a href="contact.php">Contact us</a></li>

      </ul>

      {/* <!--======= SUBMIT COUPON =========--> */}
      <div className="sub-nav-co"> <a href="#."><i className="fa fa-search"></i></a> </div>
    </nav>
  </div>
</header>


{/* <!--======= BANNER =========--> */}
<div id="carouselExampleFade" className="carousel slide carousel-fade for-cmenu" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="images/slider/7.jpg"
        alt="First slide" />

    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="images/slider/6.jpg"
        alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="images/slider/4.jpg"
        alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="images/slider/2.jpg"
        alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="images/slider/1.jpg"
        alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="images/slider/3.jpg"
        alt="Third slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="images/slider/5.jpg"
        alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

{/* <!-- circle menu started--> */}

<div className="banner-slider-wrapper">
  <div id="layerslider" >
    <div className="circle-menu inactive">
      <div className="circle-inner">
        <h2 className="slogan">
          <span>Select </span>
          <span>Explore</span>
        </h2>
      </div>
      <ul className="circle-text text-uppercase">
        <li>
          <a href="#ongoing"> &nbsp; Ongoing &nbsp; |</a>
        </li>

        <li>
          <a href="#completed">&nbsp; Completed &nbsp; | &nbsp;</a>
        </li>

        <li>
          <a href="#Upcoming">&nbsp;Upcoming</a>
        </li>

      </ul>
      <div className="circle-bg"></div>

    </div>



    {/* <!--======= Video slider =========--> */}
    <section className="services video-portion">
      <div className="container">
        <div className="tittle"> <img src="images/head-top.png" alt="" />
          <h3 className="v-title">See at a Glance</h3>
          <p className="v-para">This is our some demo designs. We always try to create new design of buildings and implement those designs in our projects.</p>
          <div className="row">
            <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              {/* <!-- Carousel --> */}
              <div id="carousel-example" className="carousel slide">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example" data-slide-to="1"></li>
                  <li data-target="#carousel-example" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/gv0Ktpi2wA4?si=FKsGfxbHj9aFL2Ux" allowfullscreen></iframe>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/MO19LW02FP8" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/J0JU7HW20FU" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>


                <a className="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              {/* <!-- End carousel --> */}
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

</div>

{/* <!--======= Ready Flat portion =========--> */}

{/* <!--======= PROPERTY =========--> */}
<section id="completed" className="properties background-aliceblue">
  <div className="container">

    {/* <!--======= TITTLE =========--> */}
    <div className="tittle"> <img src="images/head-top.png" alt="" />
      <h3>Our Ready Project</h3>
      <p>See the ready projects of ASSK</p>
    </div>

    {/* <!--======= PROPERTIES ROW =========--> */}
    <ul className="row">

      {/* <!--======= PROPERTY =========--> */}
      <li className="col-sm-4">
        {/* <!--======= TAGS =========-->  */}

        <section>
          {/* <!--======= IMAGE =========--> */}
          <div className="z-hover img"> <img className="img-responsive" src="images/project/Mayer-Anchal/m-anchal-featured.jpg" alt="Mayer-Anchal" />
            {/* <!--======= IMAGE HOVER =========--> */}

            <div className="over-proper"> <a href="mayer-anchal.php" className="btn font-montserrat">more details</a> </div>
          </div>
          {/* <!--======= HOME INNER DETAILS =========--> */}
          <ul className="home-in">
            <li><span><i className="fa fa-home"></i> 14 Katha</span></li>
            <li><span><i className="fa fa-bed"></i> 3 Bedrooms</span></li>
            <li><span><i className="fa fa-tty"></i> 3 Bathrooms</span></li>
          </ul>
          {/* <!--======= HOME DETAILS =========--> */}
          <div className="detail-sec"> <a href="mayer-anchal.php" className="font-montserrat">Mayer Anchal</a> <span className="locate"><i className="fa fa-map-marker"></i>Jagannathpur
            Shaheed Abdul Aziz Sarak, Vatara, Dhaka </span>
            {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}

          </div>
        </section>
      </li>


      <li className="col-sm-4">
        {/* <!--======= TAGS =========-->  */}

        <section>
          {/* <!--======= IMAGE =========--> */}
          <div className="z-hover img"> <img className="img-responsive" src="images/project/sas-castle/featured-sas-castle.jpg" alt="sas-castle" />
            {/* <!--======= IMAGE HOVER =========--> */}

            <div className="over-proper"> <a href="sas-castle.php" className="btn font-montserrat">more details</a> </div>
          </div>
          {/* <!--======= HOME INNER DETAILS =========--> */}
          <ul className="home-in">
            <li><span><i className="fa fa-home"></i> 7 Katha</span></li>
            <li><span><i className="fa fa-bed"></i> 3 and 4 Bedrooms</span></li>
            <li><span><i className="fa fa-tty"></i> 3 Bathrooms</span></li>
          </ul>
          {/* <!--======= HOME DETAILS =========--> */}
          <div className="detail-sec"> <a href="sas-castle.php" className="font-montserrat">The SAS Castle</a> <span className="locate"><i className="fa fa-map-marker"></i> Queen's Garden, Nurerchala, Vatara, Baridhara, Dhaka. </span>
            {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}

          </div>
        </section>
      </li>

      {/* <!--======= PROPERTY =========--> */}
      <li className="col-sm-4">
        {/* <!--======= TAGS =========-->  */}

        <section>
          {/* <!--======= IMAGE =========--> */}
          <div className="z-hover img"> <img className="img-responsive" src="images/project/d dream/d-dream-featured.jpg" alt="D Dream" />
            {/* <!--======= IMAGE HOVER =========--> */}

            <div className="over-proper"> <a href="d-dream.php" className="btn font-montserrat">more details</a> </div>
          </div>
          {/* <!--======= HOME INNER DETAILS =========--> */}
          <ul className="home-in">
            <li><span><i className="fa fa-home"></i> 29 Katha</span></li>
            <li><span><i className="fa fa-bed"></i> 3 Bedrooms</span></li>
            <li><span><i className="fa fa-tty"></i> 2 or 3 Bathrooms</span></li>
          </ul>
          {/* <!--======= HOME DETAILS =========--> */}
          <div className="detail-sec"> <a href="d-dream.php" className="font-montserrat">D Dream</a> <span className="locate"><i className="fa fa-map-marker"></i>  Queen's Garden, Nurerchala Baridhara, Vatara, Dhaka.</span>
            {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}

          </div>
        </section>
      </li>

    </ul>
  </div>
  <div className="custom-btn"> <a href="projects.php" className="load-more font-montserrat">See More Project</a> </div>
</section>

{/* <!--=======On Going Flat portion=========--> */}

<section id="ongoing" className="properties background-gradient-img">
  <div className="container">

    {/* <!--======= TITTLE =========--> */}
    <div className="tittle"> <img src="images/head-top.png" alt="" />
      <h3>Our Ongoing Project</h3>
      <p>See the Ongoing Projects of ASSK</p>
    </div>

    {/* <!--======= PROPERTIES ROW =========--> */}
    <ul className="row">

      {/* <!--======= PROPERTY =========--> */}
      <li className="col-sm-4">
        {/* <!--======= TAGS =========-->  */}

        <section>
          {/* <!--======= IMAGE =========--> */}
          <div className="z-hover img"> <img className="img-responsive" src="images/project/ASSK City/assk-city-featured.jpg" alt="" />
            {/* <!--======= IMAGE HOVER =========--> */}

            <div className="over-proper"> <a href="assk-city.php" className="btn font-montserrat">more details</a> </div>
          </div>
          {/* <!--======= HOME INNER DETAILS =========--> */}
          <ul className="home-in">
            <li><span><i className="fa fa-home"></i> 20 Katha</span></li>
            <li><span><i className="fa fa-bed"></i> 3 Bedrooms</span></li>
            <li><span><i className="fa fa-tty"></i> 3 Bathrooms</span></li>
          </ul>
          {/* <!--======= HOME DETAILS =========--> */}
          <div className="detail-sec"> <a href="assk-city.php" className="font-montserrat">ASSK City</a> <span className="locate"><i className="fa fa-map-marker"></i> Boston,USA</span>
            {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}

          </div>
        </section>
      </li>

      {/* <!--======= PROPERTY =========--> */}
      <li className="col-sm-4">
        {/* <!--======= TAGS =========-->  */}

        <section>
          {/* <!--======= IMAGE =========--> */}
          <div className="z-hover img"> <img className="img-responsive" src="images/project/Newyork city/newyork-featured.jpg" alt="" />
            {/* <!--======= IMAGE HOVER =========--> */}

            <div className="over-proper"> <a href="new-york-city.php" className="btn font-montserrat">more details</a> </div>
          </div>
          {/* <!--======= HOME INNER DETAILS =========--> */}
          <ul className="home-in">
            <li><span><i className="fa fa-home"></i> 18 Katha</span></li>
            <li><span><i className="fa fa-bed"></i> 3 Bedrooms</span></li>
            <li><span><i className="fa fa-tty"></i> 3 Bathrooms</span></li>
          </ul>
          {/* <!--======= HOME DETAILS =========--> */}
          <div className="detail-sec"> <a href="new-york-city.php" className="font-montserrat">New York City</a> <span className="locate"><i className="fa fa-map-marker"></i>North Badda, Gupipara Road, Dhaka</span>
            {/* <!-- <p>Till the one day when the lady met this fellow </p> --> */}

          </div>
        </section>
      </li>

      {/* <!--======= PROPERTY =========--> */}
      <li className="col-sm-4">
        {/* <!--======= TAGS =========-->  */}

        <section>
          {/* <!--======= IMAGE =========--> */}
          <div className="z-hover img"> <img className="img-responsive" src="images/project/Tisha Kutir/tisha-kutir-featured.jpg" alt="" />
            {/* <!--======= IMAGE HOVER =========--> */}

            <div className="over-proper"> <a href="tisha-kuthir.php" className="btn font-montserrat">more details</a> </div>
          </div>
          {/* <!--======= HOME INNER DETAILS =========--> */}
          <ul className="home-in">
            <li><span><i className="fa fa-home"></i> 11 Katha</span></li>
            <li><span><i className="fa fa-bed"></i> 3 Bedrooms</span></li>
            <li><span><i className="fa fa-tty"></i> 4 Bathrooms</span></li>
          </ul>
          {/* <!--======= HOME DETAILS =========--> */}
          <div className="detail-sec"> <a href="tisha-kuthir.php" className="font-montserrat">Tisha Kutir</a> <span className="locate"><i className="fa fa-map-marker"></i> Mirbagh, Modhubag, Hatirjheel, Dhaka</span>
            {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}

          </div>
        </section>
      </li>

    </ul>
  </div>
  <div className="custom-btn"> <a href="projects.php" className="load-more font-montserrat">See More Project</a> </div>
</section>

<section id="Upcoming" className="properties background-aliceblue">
  <div className="container">

    {/* <!--======= TITTLE =========--> */}
    <div className="tittle"> <img src="images/head-top.png" alt="" />
      <h3>Our Upcoming Project</h3>
      <p>See the Upcoming projects of ASSK</p>
    </div>

    {/* <!--======= PROPERTIES ROW =========--> */}
    <ul className="row">

      {/* <!--======= PROPERTY =========--> */}
      <li className="col-sm-4">
        {/* <!--======= TAGS =========-->  */}

        <section>
          {/* <!--======= IMAGE =========--> */}
          <div className="z-hover img"> <img className="img-responsive" src="images/project/bagal/feature-bagal-bilash.jpg" alt="Mayer-Anchal" />
            {/* <!--======= IMAGE HOVER =========--> */}

            <div className="over-proper"> <a href="bagan-bilash.php" className="btn font-montserrat">more details</a> </div>
          </div>
          {/* <!--======= HOME INNER DETAILS =========--> */}
          <ul className="home-in">
            <li><span><i className="fa fa-home"></i> 24 Katha</span></li>
            <li><span><i className="fa fa-bed"></i> 3 Bedrooms</span></li>
            <li><span><i className="fa fa-tty"></i> 3 Bathrooms</span></li>
          </ul>
          {/* <!--======= HOME DETAILS =========--> */}
          <div className="detail-sec"> <a href="bagan-bilash.php" className="font-montserrat">ASSK Manhattan City</a> <span className="locate"><i className="fa fa-map-marker"></i>  Nandipara(Baganbari), Banasree, Dhaka. </span>
            {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}

          </div>
        </section>
      </li>


      <li className="col-sm-4">
        {/* <!--======= TAGS =========-->  */}

        <section>
          {/* <!--======= IMAGE =========--> */}
          <div className="z-hover img"> <img className="img-responsive" src="images/project/Shabuddin-Fortune/" alt="" />
            {/* <!--======= IMAGE HOVER =========--> */}

            <div className="over-proper"> <a href="#" className="btn font-montserrat">more details</a> </div>
          </div>
          {/* <!--======= HOME INNER DETAILS =========--> */}
          <ul className="home-in">
            <li><span><i className="fa fa-home"></i> 7 Katha</span></li>
            <li><span><i className="fa fa-bed"></i> 3 Bedrooms</span></li>
            <li><span><i className="fa fa-tty"></i> 3 Bathrooms</span></li>
          </ul>
          {/* <!--======= HOME DETAILS =========--> */}
          <div className="detail-sec"> <a href="#" className="font-montserrat">Sahabuddin Fortune</a> <span className="locate"><i className="fa fa-map-marker"></i>  Dag - 6379 & 6380, Mouza: Vatara, Dhaka  </span>
            {/* <!-- <p>Till the one day when the lady met this fellow </p> --> */}

          </div>
        </section>
      </li>

      {/* <!--======= PROPERTY =========--> */}
      <li className="col-sm-4">
        {/* <!--======= TAGS =========-->  */}

        <section>
          {/* <!--======= IMAGE =========--> */}
          <div className="z-hover img"> <img className="img-responsive" src="images/project/Spanish-Velabista" alt="" />
            {/* <!--======= IMAGE HOVER =========--> */}

            <div className="over-proper"> <a href="#" className="btn font-montserrat">more details</a> </div>
          </div>
          {/* <!--======= HOME INNER DETAILS =========--> */}
          <ul className="home-in">
            <li><span><i className="fa fa-home"></i> 8.5 Katha</span></li>
            <li><span><i className="fa fa-bed"></i> 3 Bedrooms</span></li>
            <li><span><i className="fa fa-tty"></i> 3 Bathrooms</span></li>
          </ul>
          {/* <!--======= HOME DETAILS =========--> */}
          <div className="detail-sec"> <a href="#" className="font-montserrat">Spanish Velabista (United city)</a> <span className="locate"><i className="fa fa-map-marker"></i>  Nurerchala, Vatara, Baridhara, Dhaka. </span>
            {/* <!-- <p>Till the one day when the lady met this fellow and they knew it was much more than </p> --> */}

          </div>
        </section>
      </li>

    </ul>
  </div>
  <div className="custom-btn"> <a href="Projects.php" className="load-more font-montserrat">See More Project</a> </div>
</section>

{/* <!--======= Box of Loan,Query =========--> */}
<section id="" className="services background-skyish">
  <div className="container">
    {/* <!--======= TITTLE =========--> */}
    <div className="tittle"> <img src="images/head-top.png" alt="" />
      <h3>Queries</h3>
      <p>This is the queries portion where you can connect to us in different ways.</p>
    </div>

    <ul className="row">

      {/* <!--======= SERVICE SECTION =========--> */}
      <li className="col-sm-4">
        <section>
          {/* <!--======= SERVICE IMG =========-->  */}
          <img className="img-responsive" src="images/home/home-loan.jpg" alt="" />
          <div className="icon"> <img src="images/icon-services-3.png" alt="" /> </div>

          {/* <!--======= SERVICE HOVER =========--> */}
          <div className="ser-hover">
            <p>And when the odds are against him and their dangers work to do. You bet your life Speed Racer <a href="home-loan.html" target="_blank" className="read-more">Read more <i className="fa fa-angle-double-right"></i></a> </p>
          </div>
          <a href="home-loan.php" target="_blank" className="heading">HOME LOAN</a> </section>
      </li>

      {/* <!--======= SERVICE SECTION =========--> */}
      <li className="col-sm-4">
        <section>
          {/* <!--======= SERVICE IMG =========-->  */}
          <img className="img-responsive" src="images/home/appartment-query.jpg" alt="" />
          <div className="icon"> <img src="images/icon-services-3.png" alt="" /> </div>

          {/* <!--======= SERVICE HOVER =========--> */}
          <div className="ser-hover">
            <p>And when the odds are against him and their dangers work to do. You bet your life Speed Racer <a href="appt-query.html" target="_blank" className="read-more">Read more <i className="fa fa-angle-double-right"></i></a> </p>
          </div>
          <a href="appt-query.php" target="_blank" className="heading">APARTMENT QUERY </a>
        </section>
      </li>

      {/* <!--======= SERVICE SECTION =========--> */}
      <li className="col-sm-4">
        <section>
          {/* <!--======= SERVICE IMG =========-->  */}
          <img className="img-responsive" src="images/home/joint-venture.jpg" alt="" />
          <div className="icon"> <img src="images/icon-services-3.png" alt="" /> </div>

          {/* <!--======= SERVICE HOVER =========--> */}
          <div className="ser-hover">
            <p>And when the odds are against him and their dangers work to do. You bet your life Speed Racer <a href="land-joint-venture.html" target="_blank" className="read-more">Read more <i className="fa fa-angle-double-right"></i></a> </p>
          </div>
          <a href="land-joint-venture.php" target="_blank" className="heading">JOINT VENTURE LAND DEVELOPMENT</a> </section>
      </li>

    </ul>
  </div>
</section>


{/* <!--======= TEAM =========--> */}
<section id="team" className="video-portion">
  <div className="container">
    {/* <!--======= TITTLE =========--> */}
    <div className="tittle"> <img src="images/head-top.png" alt="" />
      <h3 className="v-title">Our Team</h3>
      <p className="v-para">See our energetic team. We can do anything in real estate by this team. </p>
    </div>
    <div className="row">
      <div className="col-sm-1"></div>
      <div className="col-sm-10">
        <img src="images/team/team.jpg" alt="" />
      </div>
      <div className="col-sm-1"></div>

    </div>
  </div>
</section>


{/* <!--======= PARTHNER =========--> */}
<section className="parthner background-aliceblue">
  <div className="container">
    {/* <!--======= TITTLE =========--> */}
    <div className="tittle"> <img src="images/head-top.png" alt="" />
      <h3>our trusted partners</h3>
      <p>Some of our trusted partners who are providing support to us.</p>
    </div>

    {/* <!--======= PARTHNERS =========--> */}
    <div className="parthner-slide">
      <div className="part"> <a href="#."> <img src="images/parthner-img-1.jpg" alt="" /> </a> </div>

      {/* <!--======= PARTHNERS =========--> */}
      <div className="part"> <a href="#."> <img src="images/parthner-img-2.png" alt="" /> </a> </div>

      {/* <!--======= PARTHNERS =========--> */}
      <div className="part"> <a href="#."> <img src="images/parthner-img-3.jpg" alt="" /> </a> </div>

      {/* <!--======= PARTHNERS =========--> */}
      <div className="part"> <a href="#."> <img src="images/parthner-img-4.jpg" alt="" /> </a> </div>

      {/* <!--======= PARTHNERS =========--> */}
      <div className="part"> <a href="#."> <img src="images/parthner-img-5.jpg" alt="" /> </a> </div>

      {/* <!--======= PARTHNERS =========--> */}
      <div className="part"> <a href="#."> <img src="images/parthner-img-6.jpg" alt="" /> </a> </div>


    </div>
  </div>
</section>

{/* <!-- ads portion --> */}
<section className="parthner background-aliceblue">
  <div className="container">
    {/* <!--======= TITTLE =========--> */}
    <div className="tittle"> <img src="images/head-top.png" alt="" />
      <h3>Promotional offers</h3>
      <p>See our best offers.</p>
    </div>

    <div id="carouselExampleFade" className="carousel slide carousel-fade for-cmenu" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="images/p-banner-a.jpg"
            alt="First slide" />

        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="images/p-banner-b.jpg"
            alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="images/p-banner-b-c.jpg"
            alt="Second slide" />
        </div>

      </div>
      <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
</section>
{/* <!--======= news/media =========--> */}
<section className="blog background-gradient-img">
  <div className="container">

    {/* <!--======= TITTLE =========--> */}
    <div className="tittle">
      <h3>recent from our news</h3>
    </div>
    <ul className="row">

      {/* <!--======= BLOG 1 =========--> */}
      <li className="col-sm-4">
        <div className="b-inner"> <img className="img-responsive" src="images/blog/blog1.jpg" alt="" />
          <div className="b-details">
            <div className="post-admin"> <img src="images/blog/blog1.jpg" alt="" />
              {/* <!-- <h6>By Website</h6> --> */}
              {/* <!-- <span className="pull-right"><i className="fa fa-comment-o"></i> 6 </span> <span className="pull-right"><i className="fa fa-heart-o"></i> 10 &nbsp; &nbsp;| &nbsp;&nbsp;</span>  --> */}
            </div>
            <div className="bottom-sec"> <span><i className="fa fa-calendar"></i> June 12 ,2022</span> <a className="font-montserrat" target="_blank" href="https://news.asskamariway.com/2022/06/05/friendly-cricket-match-2022/">Friendly Cricket Match 2022</a>
              <hr />
              <p>A Friendly cricket match between two internal teams Head office vs Site office has been played.</p>
            </div>
          </div>
        </div>
      </li>

      {/* <!--======= BLOG 2 =========--> */}
      <li className="col-sm-4">
        <div className="b-inner"> <img className="img-responsive" src="images/blog/blog2.jpg" alt="" />
          <div className="b-details">
            <div className="post-admin"> <img src="images/blog/blog2.jpg" alt="" />

              {/* <!-- <span className="pull-right"><i className="fa fa-comment-o"></i> 6 </span> <span className="pull-right"><i className="fa fa-heart-o"></i> 10 &nbsp; &nbsp;| &nbsp;&nbsp;</span> --> */}
            </div>
            <div className="bottom-sec"> <span><i className="fa fa-calendar"></i> June 10 ,2022</span> <a className="font-montserrat" target="_blank" href="https://news.asskamariway.com/2022/06/05/affordable-flat-sale-in-dhaka/">Affordable flat sale in Dhaka</a>
              <hr />
              <p>Are you looking for the best ready-to-move-in apartments in Dhaka? </p>
            </div>
          </div>
        </div>
      </li>

      {/* <!--======= BLOG 3 =========--> */}
      <li className="col-sm-4">
        <div className="b-inner"> <img className="img-responsive" src="images/blog/blog3.jpg" alt="" />
          <div className="b-details">
            <div className="post-admin"> <img src="images/blog/blog1.jpg" alt="" />
              <h6>By Mike</h6>
              {/* <!-- <span className="pull-right"><i className="fa fa-comment-o"></i> 6 </span> <span className="pull-right"><i className="fa fa-heart-o"></i> 10 &nbsp; &nbsp;| &nbsp;&nbsp;</span>  --> */}
            </div>
            <div className="bottom-sec"> <span><i className="fa fa-calendar"></i> mar 23 ,2015</span> <a className="font-montserrat" target="_blank" href="https://news.asskamariway.com/2022/05/29/things-you-should-know-before-buying-a-flat/">Things You Should Know Before Buying a Flat</a>
              <hr />
              <p>Is your flat located in new or old apartment? What are the maintenance costs? </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>

{/* <!--======= FOOTER =========--> */}
<footer>
  <div className="container">

    {/* <!--======= NEWSLETTER =========--> */}
    <div className="subcribe">

    </div>
    <ul className="row">

      {/* <!--======= HAPPY CLIENTS =========--> */}
      <li className="col-sm-6">
        <h5>About us</h5>
        <hr />
        <p>We are a US-based real estate company in Bangladesh having a strong reputation for trust and reliability. We feel honesty, integrity and trust play key roles in managing an excellent relationship with the clients.</p>

        {/* <!--======= SOCIAL ICONS =========--> */}

        <ul className="social_icons">
          <li className="facebook"> <a href="https://www.facebook.com/asskamariway"><i className="fa fa-facebook"></i> </a></li>
          <li className="twitter"> <a href="#"><i className="fa fa-twitter"></i> </a></li>
          <li className="linkedin"> <a href="#"><i className="fa fa-linkedin"></i> </a></li>

        </ul>
      </li>




      {/* <!--======= HAPPY CLIENTS =========--> */}
      <li className="col-sm-6">
        {/* <!--======= LINKS =========--> */}
        <h5>Contact</h5>
        <hr />
        <div className="loc-info">
          <p><i className="fa fa-map-marker"></i> House: 11/B (1st Floor), Road: 130, Gulshan-1, Dhaka-1212</p>
          <p><i className="fa fa-phone"></i> +88-02-588160305</p>
          <p><i className="fa fa-print"></i> +88 01844646688 (24 X 7)</p>
          <p><i className="fa fa-envelope-o"></i> info@asskamariway.com</p>
        </div>
      </li>
    </ul>
  </div>
</footer>

{/* <!--======= RIGHTS =========--> */}
<div className="rights">
  <div className="container">
    <div className="col-sm-12">
      <div className="col-sm-6"><p >©2021 Assk Amari Way. All rights reserved</p></div>
      {/* <!-- <div className="col-sm-6"><p >Developed By <a href="#">DiGiCart Solutions Ltd.</a></p></div> --> */}
    </div>

  </div>
</div>
</div>
    </>
  )
}

export default App
