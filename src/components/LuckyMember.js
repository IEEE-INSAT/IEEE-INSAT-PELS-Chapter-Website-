import React, { Component } from "react";

export default class LuckyMember extends Component {
  render() {
    return (
      <div className="member-container">
        <div className="section fun-facts">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="wrapper">
                  <div className="row">
                    <h2>Guess who is our Member Of The Mounth !?</h2>

                    <div className="image">
                      <img
                        src={require("../assets/images/luckymember/dhia.jpg")}
                        alt=""
                      ></img>
                      <div className="quote">
                        <h4>Mohamed Dhia Mnasri</h4>
                      <p>
                      Alone we can do so little, but together we can achieve greatness. Being an active member of a community means sharing, participating, and contributing to the collective success.
                  <strong className="writer"> -Helen Keller</strong>
                </p>
                      </div>
                    </div>

                    {/* <div class="item">
                <div class="row">
                <div class="col-lg-3">
                    <div class="image">
                      <img src="assets/images/event-01.jpg" alt=""/>
                    </div>
                  <div class="col-lg-9">
                    <ul>
                      <li>
                        <span class="category">Web Design</span>
                        <h4>UI Best Practices</h4>
                      </li>
                      <li>
                        <span>Date:</span>
                        <h6>16 Feb 2036</h6>
                      </li>
                      <li>
                        <span>Duration:</span>
                        <h6>22 Hours</h6>
                      </li>
                      <li>
                        <span>Price:</span>
                        <h6>$120</h6>
                      </li>
                    </ul>
                    {/* <a href="#"><i class="fa fa-angle-right"></i></a> */}
                    {/* </div>
                  
                  </div>
                </div>
              </div> */}

                    {/* <div class="col-lg-3 col-md-6">
                    <div class="counter">
                      <h2 class="timer count-title count-number" data-to="150" data-speed="1000"></h2>
                       <p class="count-text ">Happy Students</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="counter">
                      <h2 class="timer count-title count-number" data-to="804" data-speed="1000"></h2>
                      <p class="count-text ">Course Hours</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="counter">
                      <h2 class="timer count-title count-number" data-to="50" data-speed="1000"></h2>
                      <p class="count-text ">Employed Students</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="counter end">
                      <h2 class="timer count-title count-number" data-to="15" data-speed="1000"></h2>
                      <p class="count-text ">Years Experience</p>
                    </div>
                  </div> */}
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
