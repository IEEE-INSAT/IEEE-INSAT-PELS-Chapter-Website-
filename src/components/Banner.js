import React, { Component } from 'react'
import Navbar from './Navbar'
import { CCarousel, CCarouselItem } from '@coreui/react'
import Banner1 from './Banner1'

export default class Banner extends Component {
  
  render() {
    return (
        <>
        
        <Navbar></Navbar>
        <Banner1/>
        <div className="main-banner" id="top">
        
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
             
            <CCarousel controls indicators transition="crossfade" className='owl-banner'>
              
              <CCarouselItem>
                <div className="item item-1">
                  <div className="header-text">
                    <span className="category "> field of interests</span>
                    <h2>Discovering <br/> the field of power electronics</h2>
                    <p>Power electronics is a specialized field of electrical engineering that deals with the study and application of electronic devices and systems that convert and control electrical power.
                      The primary objective is to convert and regulate electrical energy from one form to another.</p>
                    {/* <p>Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.</p>
                    <div class="buttons">
                      <div className="main-button">
                        <a href="#">Request Demo</a>
                      </div>
                      <div className="icon-button">
                        <a href="#"><i class="fa fa-play"></i> What's Scholar?</a>
                      </div>
                    </div> */}
                  </div>
                </div>
                </CCarouselItem>
                <CCarouselItem>
                <div className="item item-2">
                  <div className="header-text">
                    <span className="category"> field of interests</span>
                    <h2>Practising our knowledge in related projects </h2>
                    <p>Practicing knowledge in related projects involves applying the theoretical knowledge gained in a particular field to real-world projects. It is an essential part of learning as it helps to consolidate concepts, develop problem-solving skills and gain hands-on experience.</p>
                    {/* <p>You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website.</p>
                    <div className="buttons">
                      <div className="main-button">
                        <a href="#">Request Demo</a>
                      </div>
                      <div class="icon-button">
                        <a href="#"><i class="fa fa-play"></i> What's the best result?</a>
                      </div>
                    </div> */}
                  </div>
                </div>
                </CCarouselItem>
                <CCarouselItem>
                <div className="item item-3">
                  <div className="header-text">
                    <span className="category">field of interests</span>
                    <h2>Connecting <br/> with like minded engineers</h2>
                    <p>Connecting with like-minded engineers involves building professional relationships and networks with other individuals who share similar interests, goals, and values in the engineering field. </p>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporious incididunt ut labore et dolore magna aliqua suspendisse.</p>
                    <div className="buttons">
                      <div className="main-button">
                        <a href="#">Request Demo</a>
                      </div>
                      <div className="icon-button">
                        <a href="#"><i className="fa fa-play"></i> What's Online Course?</a>
                      </div>
                    </div> */}
                  </div>
                </div>
                </CCarouselItem>
             
              </CCarousel>
            </div>
          </div>
        </div>
      </div>
      
      </>
    )
  }
}
