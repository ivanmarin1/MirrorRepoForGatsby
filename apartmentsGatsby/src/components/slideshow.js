import React from "react"
import Carousel from "nuka-carousel"
import Image from "./image"

export default class extends React.Component {
  render() {
    return (
      <Carousel>
        <Image filename="Slides/house-slide.jpg" />
        <Image filename="Slides/beach-slide.jpg" />
        <Image filename="Slides/ograda-crop.jpg" />
        <Image filename="Slides/house-slide.jpg" />
        <Image filename="Slides/house-slide.jpg" />
        <Image filename="Slides/house-slide.jpg" />
      </Carousel>
    )
  }
}
