import React, { Component } from "react";
import NewsLetterItem from "./items/NewsLetterItem";
import PlugSeparator from "./shared/PlugSeparator";
import Separator from "./shared/Separator";

export default class NewsLetter extends Component {
  render() {
    return (
      <div className="services section" id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
              {/* <Separator title="NewsLetter"/> */}
              <PlugSeparator title="NewLetter"/>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-item">
             
                <img
                  src={require("../assets/images/newsletter/matlab.jpg")}
                  alt=""
                ></img>
                
                <div className="box">
                  <div class="main-content">
                    <h4>Matlab/Simulink workshop</h4>
                    <p>
                      You will get an introduction on Matlab/simulink and we
                      will use it to analyze various power converters. ⚡️ It
                      will take place Saturday February 11th at 1pm in the IEEE
                      INSAT premises .
                    </p>
                    <div class="main-button">
                      <a href="https://www.facebook.com/photo?fbid=152055477672988&set=a.112674274944442">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <NewsLetterItem
              image="../assets/images/newsletter/matlab.jpg"
              title="Matlab/Simulink workshop"
              description=" You will get an introduction on Matlab/simulink and we
                      will use it to analyze various power converters. ⚡️ It
                      will take place Saturday February 11th at 1pm in the IEEE
                      INSAT premises ."
              facebooklink="https://www.facebook.com/photo?fbid=152055477672988&set=a.112674274944442"
            /> */}
          
            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <img
                  src={require("../assets/images/newsletter/powerconverter.jpg")}
                  alt=""
                ></img>
                <div className="box">
                  <div class="main-content">
                    <h4>Power Converter</h4>
                    <p>
                      As the technology for power semiconductor devices and
                      integrated circuits develops, the potential for
                      applications of power electronics becomes wider. There are
                      already many power semiconductor devices ⚡️ that are
                      commercially available; however, the development in this
                      direction is continuing
                    </p>
                    <div class="main-button">
                      <a href="https://www.facebook.com/photo/?fbid=134422462769623&set=pcb.134422626102940">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <img
                  src={require("../assets/images/newsletter/cistem.jpg")}
                  alt=""
                ></img>
                <div className="box">
                  <div class="main-content">
                    <h4> Cistem 2022</h4>
                    <p>
                      IEEE PELS INSAT in partnership with Cistem 2022 is
                      organizing a conference on “ the foundations of a
                      successful career for Engineers “. It will be presented by
                      Dr. Sami SIALA, Ph.D in Electrical Engineering . He will
                      get to review some of your CVs
                    </p>
                    <div class="main-button">
                      <a href="https://www.facebook.com/photo/?fbid=132929816252221&set=a.112674274944442">
                        Read More
                      </a>
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
