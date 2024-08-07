/* eslint-disable no-new */
/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react'
import { Fancybox } from '@fancyapps/ui'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import { TGalleryImgUrls } from '@localTypes/gallery'
import classes from './SliderImageGrid.module.css'

type TSliderImageGridProps = {
  data: TGalleryImgUrls
}

export const SliderImageGrid: FC<TSliderImageGridProps> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const fancyboxData = data.map(({ full, thumb }) => ({ src: full, thumb }))

  const createFancyBox = (index: number) => {
    new Fancybox([...fancyboxData], {
      startIndex: index,
    })
  }

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className={classes.gallery}>
        <div className="slider-container">
          <Slider {...settings}>
            {data.map(({ thumb }, index) => (
              <div key={thumb} onClick={() => createFancyBox(index)}>
                <img src={thumb} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
