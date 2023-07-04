import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import loadable from '@loadable/component'
const SliderItem = loadable(() => import('./SliderItem'))

export default function Slider({ items }) {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 0,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            }
        ]
    }
    return (
        <div>
            <Slider>
                {items.map((item, index) => (<SliderItem item={item} key={index} />))}
            </Slider>
        </div>
    )
}