import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/css/team.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../assets/images/team/rafed.png";
import slide_image_2 from "../assets/images/team/wissem.png";
import slide_image_3 from "../assets/images/team/chayma.png";
import slide_image_4 from "../assets/images/team/chaima.png";
import slide_image_5 from "../assets/images/team/amine.png";
import slide_image_6 from "../assets/images/team/ines.png";
import PlugSeparator from "./shared/PlugSeparator";


export default class Galery extends Component {
  render() {
    return (
      <div className="team section" id="team">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 text-center">
              <div className="section-heading">
              {/* <PlugSeparator title="Our Team"/> */}
              </div>
            </div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              centeredSlidesBounds={true}
              loop={true}
              
              initialSlide={0}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier:2.5,
              }}
              
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              
              className="swiper_container"
            >
              <SwiperSlide className="swiper-slide" >
              {({ isActive }) => (
      
    
              <div className={isActive ? 'main-content' : 'main-content notactive'}>
              <img src={slide_image_1} alt="slide_image" />
              <span className="category">Chairman</span>
              <h4>Rafed Jabri</h4>
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/rafed.jabri"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/rafedjabri/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/rafed-jabri-208a9a1a3/"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
            )}
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              {({ isActive }) => (
              <div className={isActive ? 'main-content' : 'main-content notactive'}>
              <img src={slide_image_2} alt="slide_image" />
              <span className="category">Vice Chair Membership</span>
              <h4>Wissem Malleh</h4>
              <ul className="social-icons">
                <li><a href="facebook.com/wissem.malleh"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/wissemmalleh/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/malleh-wissem-6798011a5/"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
             )}
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                {({ isActive }) => (
              <div className={isActive ? 'main-content' : 'main-content notactive'}>
              <img src={slide_image_3} alt="slide_image" />
              <span className="category">Vice Chair Technical Activities</span>
              <h4>Chayma Moualhi</h4>
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/chayma.moualhi.3"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/moualhi-chayma-599a27234/"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
             )}
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                {({ isActive }) => (
              <div className={isActive ? 'main-content' : 'main-content notactive'}>
              <img src={slide_image_4} alt="slide_image" />
              <span className="category">General Secretary</span>
              <h4>Chaima Krifa</h4>
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/profile.php?id=100038854295065"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/chaim.krifa/"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/chaima-krifa-a64735240/"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
             )}
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                {({ isActive }) => (
              <div className={isActive ? 'main-content' : 'main-content notactive'}>
              <img src={slide_image_5} alt="slide_image" />
              <span className="category">Treasurer</span>
              <h4>Khalil El Amine</h4>
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/khalil.elamine.568"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/khalil-el-amine/"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
             )}
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                {({ isActive }) => (
              <div className={isActive ? 'main-content' : 'main-content notactive'}>
              <img src={slide_image_6} alt="slide_image" />
              <span className="category">Media & Communications</span>
              <h4>Ines Besrour</h4>
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/ines.besrour.3"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/ines_besrour/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/ines-besrour-697574216/"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
             )}
              </SwiperSlide>
              
              
            </Swiper>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
