import React from "react";

export default function Partner() {
  return (
    <>
      {/* <!--======= PARTHNER =========--> */}
      <section className="parthner background-aliceblue">
        <div className="container">
          <div className="tittle">    
            <img src="assets/images/head-top.png" alt="" />
            <h3>our trusted partners</h3>
            <p>Some of our trusted partners who are providing support to us.</p>
          </div>

          {/* <!--======= PARTHNER =========--> */}
          <div className="parthner-slide">
            <div className="part">
              <a href="#.">               
                <img src="assets/images/parthner-img-1.jpg" alt="" />
              </a>
            </div>
            {/* <!--======= PARTHNER =========--> */}
            <div className="part">        
              <a href="#.">
                <img src="assets/images/parthner-img-2.png" alt="" />
              </a>
            </div>
            {/* <!--======= PARTHNER =========--> */}
            <div className="part">
              <a href="#.">
                <img src="assets/images/parthner-img-3.jpg" alt="" />
              </a>
            </div>
            {/* <!--======= PARTHNER =========--> */}
            <div className="part">
              <a href="#.">
                <img src="assets/images/parthner-img-4.jpg" alt="" />
              </a>
            </div>
            {/* <!--======= PARTHNER =========--> */}
            <div className="part">
              <a href="#.">
                <img src="assets/images/parthner-img-5.jpg" alt="" />
              </a>
            </div>
            {/* <!--======= PARTHNER =========--> */}
            <div className="part">
              <a href="#.">
                <img src="assets/images/parthner-img-6.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
