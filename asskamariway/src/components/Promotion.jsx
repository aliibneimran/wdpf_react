// import React from 'react'

export default function Promotion() {
  return (
    <>
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
    </>
  )
}
