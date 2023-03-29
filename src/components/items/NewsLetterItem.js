import React, { Component } from 'react'

export default class NewsLetterItem extends Component {
  render() {
    return (
        <div classsName="col-lg-4 col-md-6">
        <div classsName="service-item">
       
          <img
            src="../../../public/assets/images/matlab.jpg"
            alt=""
          ></img>
          
          <div className="box">
            <div className="main-content">
              <h4>{this.props.title}</h4>
              <p>
               {this.props.description}
              </p>
              <div classsName="main-button">
                <a href={this.props.facebooklink}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
