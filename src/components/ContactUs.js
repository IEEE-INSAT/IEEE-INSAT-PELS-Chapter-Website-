import React, { Component } from "react";
import PlugSeparator from "./shared/PlugSeparator";
import Separator from "./shared/Separator";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us section" id="contact">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 text-center">
              <div className="section-heading">
              {/* <PlugSeparator title="Contact Us"/> */}
              </div>
            </div>
            <div className="col-lg-6  align-self-center">
              <div className="section-heading">
                <h6>Contact Us</h6>Name
                <h2>Feel free to contact us anytime</h2>
                <p><i className="fa-sharp fa-solid fa-phone-volume "></i>+216 94 705 954</p>
                <p><i className="fa-solid fa-envelope"></i>ieee.pels.insat@gmail.com</p>
                <p>
                <i className='fa fa-globe'></i>676 INSAT Centre Urbain Nord BP، Tunis Cedex 1080
                </p>
                <ul className="social-icons">
                <li>
                        <a href="https://www.google.com/maps/place/INSAT+Institut+National+des+Sciences+Appliqu%C3%A9es+et+de+Technologie/@36.8429171,10.1875453,15z/data=!4m6!3m5!1s0x12fd34c6d1e93bef:0x4153c4733f285343!8m2!3d36.8429174!4d10.1962786!16s%2Fm%2F0h52xyw">
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100086056083632">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/ieee.pels.insat/">
                        <i class="fa-brands fa-instagram"></i>                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li> */}
                    </ul>
                    
                {/* <div class="special-offer">
                  <span class="offer">off<br/><em>50%</em></span>
                  <h6>Valide: <em>24 April 2036</em></h6>
                  <h4>Special Offer <em>50%</em> OFF!</h4>
                  <a href="#"><i class="fa fa-angle-right"></i></a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us-content">
                <form id="contact-form" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          placeholder="Your Name..."
                          autocomplete="on"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your E-mail..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          class="orange-button"
                        >
                          Send Message Now
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
