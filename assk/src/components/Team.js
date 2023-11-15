import React from 'react'

export default function Team() {
  return (
    <>
      {/* <!--======= TEAM =========--> */}
      <section id="team" className="video-portion">
        <div className="container">
          {/* <!--======= TITTLE =========--> */}
          <div className="tittle">
            {" "}
            <img src="assets/images/head-top.png" alt="" />
            <h3 className="v-title">Our Team</h3>
            <p className="v-para">
              See our energetic team. We can do anything in real estate by this
              team.{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <img src="assets/images/team/team.jpg" alt="" />
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </section>

    </>
  )
}
