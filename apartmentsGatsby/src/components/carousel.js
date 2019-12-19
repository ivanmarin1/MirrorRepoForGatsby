import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React from "react"
import Slider from "react-slick"
import Image from "./image"
import styles from "../styles/layout.module.css"

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    }
    return (
      <Slider {...settings} className={styles.carousel}>
        <div>
          <Image filename="beach.jpg"></Image>
        </div>
        <div>
          <Image filename="house.jpg"></Image>
        </div>
        <div>
          <Image filename="ograda.jpg"></Image>
        </div>
      </Slider>
    )
  }
}
