import React, { Component } from "react";
import Slider from "react-slick";
import pic from "../Assests/pic.jpg"
import lobby from "../Assests/lobby.jpg"
import sofa from "../Assests/sofa.jpg"
import stair from "../Assests/stair.jpg"


export default function Service() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeec: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div id="service" className="serv"  data-aos="fade-up">
        <section>
          <img src={pic} width={"100%"} />
        </section>
        <section>
          <img src={lobby} width={"100%"} />
        </section>
      </div>

      <div className="slid"  data-aos="fade-up">
        <h2 style={{marginBottom:"30px"}}> Our Services </h2>
        <Slider {...settings}>
          <div className="cont">
            <img src={sofa} width={"100%"} />
            <section className="txt">Best in Design</section>
          </div>
          <div className="cont">
            <img src={stair} width={"100%"} />
            <section className="txt">Desginer Look</section>
          </div>
          <div className="cont">
            <img src={sofa} width={"100%"} />
            <section className="txt">Best in Design</section>
          </div>
          <div className="cont">
            <img src={stair} width={"100%"} />
            <section className="txt">Desginer Look</section>
          </div>
          <div className="cont">
            <img src={pic} width={"100%"} />
            <section className="txt">Best in Design</section>
          </div>
          <div className="cont">
            <img src={lobby} width={"100%"} />
            <section className="txt">Desginer Look</section>
          </div>
          <div className="cont">
            <img src={pic} width={"100%"} />
            <section className="txt">Best in Design</section>
          </div>
          <div className="cont">
            <img src={lobby} width={"100%"} />
            <section className="txt">Desginer Look</section>
          </div>
        </Slider>
      </div>
    </>
  );
}
