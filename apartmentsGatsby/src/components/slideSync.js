import React, { Component } from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class AsNavFor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }
  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          infinite={true}
          speed={1000}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          adaptiveHeight={true}
        >
          {this.props.apart.map(edge => (
            // <Img key={index} fluid={node.childImageSharp}></Img>
            <div>
              <Img fluid={edge.node.childImageSharp.fluid}></Img>
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          slidesToScroll={1}
          swipeToSlide={true}
          infinite={true}
          focusOnSelect={true}
          centerMode={true}
          dots={true}
        >
          {this.props.apart.map(edge => (
            // <Img key={index} fluid={node.childImageSharp}></Img>
            <div>
              <Img fluid={edge.node.childImageSharp.fluid}></Img>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
