import React from "react";

export default function Fact() {
  return (
    <>
      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Clients</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Projects</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Hours Of Support</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
