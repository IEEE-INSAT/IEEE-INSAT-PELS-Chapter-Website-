import React, { Component } from "react";
import PlugSeparator from "./shared/PlugSeparator";
import Separator from "./shared/Separator";

export default class Activities extends Component {
  render() {
    return (
      <div className="section events" id="activities">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 text-center">
              <div className="section-heading">
              {/* <PlugSeparator title="Events & Workshops"/> */}
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="item">
                <div className="row">
                  <div className="col-lg-9">
                    <h4>integration Day</h4>
                    <span className="category"></span>

                    <p>
                      By using a real-world project from the INSAT as an
                      example, the energy conversion session helped students get
                      a deeper grasp of the subject of solar panel systems.
                      Additionally, the field of power electronics and its
                      pertinent components were introduced.
                    </p>
                  </div>
                  <div className="col-lg-3">
                    <div className="image">
                      <img
                        className="bottom"
                        src={require("../assets/images/integrationday/i1.jpg")}
                        alt=""
                      />
                      <img
                        className="top"
                        src={require("../assets/images/integrationday/i2.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-6">
              <div className="item">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="image">
                      <img
                        className="bottom"
                        src={require("../assets/images/energyconv/c1.jpg")}
                        alt=""
                      />
                      <img
                        className="top"
                        src={require("../assets/images/energyconv/c2.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h4>Energy Conversion Workshop </h4>
                    <span className="category">Aziz Allouche</span>
                    <p>
                      By using a real-world project from the INSAT as an
                      example, the energy conversion session helped students get
                      a deeper grasp of the subject of solar panel systems.
                      Additionally, the field of power electronics and its
                      pertinent components were introduced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="item">
                <div className="row">
                  <div className="col-lg-9">
                    <h4>Proteus Workshop </h4>
                    <span className="category">
                      Ahmed Barnat & Moualhi Chayma
                    </span>
                    <p>
                      Proteus is a user-friendly simulation software that may be
                      used by beginners to learn how circuits and components
                      operate. Power electronics circuits will be used for
                      applications.(Simulation is incredibly important as it
                      prevents you from damaging real-life components and it
                      helps in the creation of a safe, functional, and
                      interesting circuit or project.)
                    </p>
                  </div>
                  <div className="col-lg-3">
                    <div className="image">
                      <img
                        className="bottom"
                        src={require("../assets/images/proteus/p1.jpg")}
                        alt=""
                      />
                      <img
                        className="top"
                        src={require("../assets/images/proteus/p2.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="item">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="image">
                      <img
                        className="bottom"
                        src={require("../assets/images/electricalcomponent/e1.jpg")}
                        alt=""
                      />
                      <img
                        className="top"
                        src={require("../assets/images/electricalcomponent/e2.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h4>Electrical Components Classifier Workshop</h4>
                    <span className="category">
                      Mohamed amine Felah & Chayma Moualhi
                    </span>
                    <p>
                      {" "}
                      This workshop taught us how to use computer vision with
                      electronic components. With a simple Python application, we will discover the connection between them
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="item">
                <div className="row">
                  <div className="col-lg-9">
                    <h4>
                      The foundations of a successful career for Engineers
                    </h4>
                    <span className="category">
                      {" "}
                      Dr. Sami SIALA, Ph.D in Electrical Engineering
                    </span>
                    <p>
                      {" "}
                      In the conference, He shared with the participants some
                      techniques as well as gave tips on how to write an
                      effective CV. He also He reviewed some of our CVs
                    </p>
                  </div>
                  <div className="col-lg-3">
                    <div className="image">
                      <img
                        className="bottom"
                        src={require("../assets/images/fondation/f2.jpg")}
                        alt=""
                      />
                      <img
                        className="top"
                        src={require("../assets/images/fondation/f1.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
