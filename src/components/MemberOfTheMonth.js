import React, { Component } from 'react'
// import "../assets/css/member.css"
export default class MemberOfTheMonth extends Component {
  render() {
    return (
      <div class="section testimonials">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="owl-carousel owl-testimonials">
              <div class="item">
                <p>“Please tell your friends or collegues about TemplateMo website. Anyone can access the website to download free templates. Thank you for visiting.”</p>
                <div class="author">
                  <img src="assets/images/testimonial-author.jpg" alt=""/>
                  <span class="category">Full Stack Master</span>
                  <h4>Claude David</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 align-self-center">
            <div class="section-heading">
              <h6>TESTIMONIALS</h6>
              <h2>What they say about us?</h2>
              <p>You can search free CSS templates on Google using different keywords such as templatemo portfolio, templatemo gallery, templatemo blue color, etc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
