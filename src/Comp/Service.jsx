import React, { Component } from "react";
import Slider from "react-slick";

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
      <div id="service" className="serv">
        <section>
          <img src="https://jdelegantinteriors.com/wp-content/uploads/2021/12/20181209_144555-1-min-1.jpg" width={"89%"} />
        </section>
        <section>
          <img src="https://jdelegantinteriors.com/wp-content/uploads/2020/04/Logo_mock-1024x683.png" width={"100%"} />
        </section>
      </div>

      <div className="slid">
        <h2 style={{marginBottom:"30px"}}> Our Services </h2>
        <Slider {...settings}>
          <div className="cont">
            <img src="https://jdelegantinteriors.com/wp-content/uploads/2021/09/20181230_125421-min-768x576.jpg" width={"100%"} />
            <section className="txt">This image looks super neat.</section>
          </div>
          <div className="cont">
            <img src="https://jdelegantinteriors.com/wp-content/uploads/2021/09/20181230_125421-min-768x576.jpg" width={"100%"} />
            <section className="txt">This image looks super neat.</section>
          </div>
          <div className="cont">
            <img src="https://jdelegantinteriors.com/wp-content/uploads/2021/09/20181230_125421-min-768x576.jpg" width={"100%"} />
            <section className="txt">This image looks super neat.</section>
          </div>
          <div className="cont">
            <img src="https://jdelegantinteriors.com/wp-content/uploads/2021/09/20181230_125421-min-768x576.jpg" width={"100%"} />
            <section className="txt">This image looks super neat.</section>
          </div>
          <div className="cont">
            <img src="https://jdelegantinteriors.com/wp-content/uploads/2021/09/20181230_125421-min-768x576.jpg" width={"100%"} />
            <section className="txt">This image looks super neat.</section>
          </div>
          <div className="cont">
            <img src="https://jdelegantinteriors.com/wp-content/uploads/2021/09/20181230_125421-min-768x576.jpg" width={"100%"} />
            <section className="txt">This image looks super neat.</section>
          </div>
          <div className="cont">
            <img src="https://jdelegantinteriors.com/wp-content/uploads/2021/09/20181230_125421-min-768x576.jpg" width={"100%"} />
            <section className="txt">This image looks super neat.</section>
          </div>
          <div className="cont">
            <img src="https://jdelegantinteriors.com/wp-content/uploads/2021/09/20181230_125421-min-768x576.jpg" width={"100%"} />
            <section className="txt">This image looks super neat.</section>
          </div>
        </Slider>
      </div>
    </>
  );
}
