import React, { Component } from "react";
import Banner1 from "./Banner1";
import PlugSeparator from "./shared/PlugSeparator";
import Separator from "./shared/Separator";

export default class AboutUs extends Component {
  render() {
    return (
      <>
      <div className="col-lg-12 text-center">
      <div className="section-title">
      {/* <PlugSeparator title="About Us"/> */}
      </div>
    </div>
      <div className="section about-us" id="about-us">
        
        <div className="container">
      
          <div className="row">
         
         
            <div className="col-lg-6 offset-lg-1">
              
              <div className="accordion" id="accordionExample">
               

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Why choose IEEE?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      IEEE, Institute of Electrical and Electronics Engineers,
                      is considered to be the largest technical professional
                      organisation dedicated to advancing technology. IEEE has
                      been taking part, since its foundation, in the development
                      of new technologies and improving the performance of
                      existing ones. The influence of this organisation is not
                      limited to a single discipline as it includes diverse
                      scientific fields, of which we can mention the field of
                      our interest: <strong>power electronics</strong>.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What about our chapter PELS?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      When you join{" "}
                      <strong>
                        {" "}
                        the IEEE Power Electronics Society (PELS)
                      </strong>
                      , you gain access to first-class technical information
                      covering the development and practical application of
                      power electronics technology, including electronic
                      components, circuit theory techniques, and use of
                      analytical tools.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Why should I join IEEE PELS INSAT?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Our chapter was founded in <strong>April 2022</strong> by
                      a group of students who believe in the great potential of
                      power electronics in making a significant change in the
                      energy field.
                      <br />
                      Currently, we are{" "}
                      <strong>the second PELS chapter </strong>in the IEEE
                      Tunisia section, however, we are the only active one, as
                      we are organising various activities since the beginning
                      of the academic year 2020/2023, which include lectures,
                      workshops, projects, taking part in the organisation of
                      international conferences such as The International
                      Conference on Electrical Sciences and Technologies in
                      Maghreb (CISTEM) and presently, we are working on
                      arranging a technical national event that will unite
                      various universities students who are interested in power
                      electronics and who are willing to develop solutions to
                      modern day problems through applying the principles of
                      power electronics.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What are our main objectives?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        <p className="emoji">💡</p> acquaint our fellow students
                        with the power electronics discipline
                      </p>
                      <br />
                      <p>
                        {" "}
                        <p classNameName="emoji">💡</p> enhance their understanding
                        of the applications and implementation of this field in
                        various indispensable systems, and the challenges it
                        faces.
                      </p>
                      <br />
                      <p>
                        {" "}
                        <p className="emoji">💡</p> give them the tools and
                        network to thrive in their projects and future plans
                      </p>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="section-heading">
                <h6>About Us</h6>
                <h2>What make us the best community?</h2>
                <p>
                  Electric power is everywhere present in unlimited quantities
                  and can drive the world's machinery without the need of coal,
                  oil, gas or any other of the common fuels.
                  <br />
                  <strong className="writer"> -Nikola Tesla</strong>
                </p>
                <div className="main-button">
                  <a href="https://www.facebook.com/profile.php?id=100086056083632">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
