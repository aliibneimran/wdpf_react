import React from "react";

export default function News() {
  return (
    <>
      <section className="blog background-gradient-img">
        <div className="container">
          {/* <!--======= TITTLE =========--> */}
          <div className="tittle">
            <h3>recent from our news</h3>
          </div>
          <ul className="row">
            {/* <!--======= BLOG 1 =========--> */}
            <li className="col-sm-4">
              <div className="b-inner">
                {" "}
                <img
                  className="img-responsive"
                  src="images/blog/blog1.jpg"
                  alt=""
                />
                <div className="b-details">
                  <div className="post-admin">
                    {" "}
                    <img src="images/blog/blog1.jpg" alt="" />
                    {/* <!-- <h6>By Website</h6> --> */}
                    {/* <!-- <span className="pull-right"><i className="fa fa-comment-o"></i> 6 </span> <span className="pull-right"><i className="fa fa-heart-o"></i> 10 &nbsp; &nbsp;| &nbsp;&nbsp;</span>  --> */}
                  </div>
                  <div className="bottom-sec">
                    {" "}
                    <span>
                      <i className="fa fa-calendar"></i> June 12 ,2022
                    </span>{" "}
                    <a
                      className="font-montserrat"
                      target="_blank"
                      href="https://news.asskamariway.com/2022/06/05/friendly-cricket-match-2022/"
                    >
                      Friendly Cricket Match 2022
                    </a>
                    <hr />
                    <p>
                      A Friendly cricket match between two internal teams Head
                      office vs Site office has been played.
                    </p>
                  </div>
                </div>
              </div>
            </li>

            {/* <!--======= BLOG 2 =========--> */}
            <li className="col-sm-4">
              <div className="b-inner">
                {" "}
                <img
                  className="img-responsive"
                  src="images/blog/blog2.jpg"
                  alt=""
                />
                <div className="b-details">
                  <div className="post-admin">
                    {" "}
                    <img src="images/blog/blog2.jpg" alt="" />
                    {/* <!-- <span className="pull-right"><i className="fa fa-comment-o"></i> 6 </span> <span className="pull-right"><i className="fa fa-heart-o"></i> 10 &nbsp; &nbsp;| &nbsp;&nbsp;</span> --> */}
                  </div>
                  <div className="bottom-sec">
                    {" "}
                    <span>
                      <i className="fa fa-calendar"></i> June 10 ,2022
                    </span>{" "}
                    <a
                      className="font-montserrat"
                      target="_blank"
                      href="https://news.asskamariway.com/2022/06/05/affordable-flat-sale-in-dhaka/"
                    >
                      Affordable flat sale in Dhaka
                    </a>
                    <hr />
                    <p>
                      Are you looking for the best ready-to-move-in apartments
                      in Dhaka?{" "}
                    </p>
                  </div>
                </div>
              </div>
            </li>

            {/* <!--======= BLOG 3 =========--> */}
            <li className="col-sm-4">
              <div className="b-inner">
                {" "}
                <img
                  className="img-responsive"
                  src="images/blog/blog3.jpg"
                  alt=""
                />
                <div className="b-details">
                  <div className="post-admin">
                    {" "}
                    <img src="images/blog/blog1.jpg" alt="" />
                    <h6>By Mike</h6>
                    {/* <!-- <span className="pull-right"><i className="fa fa-comment-o"></i> 6 </span> <span className="pull-right"><i className="fa fa-heart-o"></i> 10 &nbsp; &nbsp;| &nbsp;&nbsp;</span>  --> */}
                  </div>
                  <div className="bottom-sec">
                    {" "}
                    <span>
                      <i className="fa fa-calendar"></i> mar 23 ,2015
                    </span>{" "}
                    <a
                      className="font-montserrat"
                      target="_blank"
                      href="https://news.asskamariway.com/2022/05/29/things-you-should-know-before-buying-a-flat/"
                    >
                      Things You Should Know Before Buying a Flat
                    </a>
                    <hr />
                    <p>
                      Is your flat located in new or old apartment? What are the
                      maintenance costs?{" "}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
