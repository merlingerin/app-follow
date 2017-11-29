import React, { Component } from 'react';
import Slider from 'react-slick';
import Slide1 from '../../assets/img/slide1.jpg';
import Slide2 from '../../assets/img/slide2.jpg';
import Slide3 from '../../assets/img/slide3.jpg';
import Slide4 from '../../assets/img/slide4.jpg';

const MainCarusel = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
    };

    return ( 
        <div className="carusel carusel--main">
            <Slider {...settings}>
                <div><img src={Slide1} /></div>
                <div><img src={Slide2} /></div>
                <div><img src={Slide3} /></div>
                <div><img src={Slide4} /></div>
                <div><img src={Slide2} /></div>
            </Slider>
        </div>
    );
}

export default MainCarusel;