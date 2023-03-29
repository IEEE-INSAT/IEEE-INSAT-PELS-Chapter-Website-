import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                       
                        <a href="index.html" className="logo">
                        <img
                  className="imagelogo"
                  src={require("../assets/logopels.png")}
                  alt=""
                ></img>
                        </a> 
                       
                        
                       
                        <ul className="nav">
                          <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                          <li className="scroll-to-section"><a href="#newsletter">News Letter</a></li>
                          <li className="scroll-to-section"><a href="#about-us">About us</a></li> 
                          <li className="scroll-to-section"><a href="#team">Team</a></li>

                          
                          <li className="scroll-to-section"><a href="#activities">Activities</a></li>
                          

                          <li className="scroll-to-section"><a href="#contact">Conatct us</a></li>
                          <li className="scroll-to-section"><a href="https://www.ieee-pels.org/membership/join-pels">Join PELS</a></li>
                      </ul>   
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                       
                    </nav>
                </div>
            </div>
        </div>
      </header>
     
    )
  }
}
