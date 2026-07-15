/* eslint-disable no-new */
/* eslint-disable react/no-unknown-property */
import React, { FC, useEffect, useState } from 'react'
import { Fancybox } from '@fancyapps/ui'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import { TGalleryImgUrls } from '@localTypes/gallery'
import { getGalleryPreviewUrl } from '@utils/getGalleryPreviewUrl'
import classes from './SliderImageGrid.module.css'

type TSliderImageGridProps = {
  data: TGalleryImgUrls
  priority?: boolean
  altPrefix: string
}

export const SliderImageGrid: FC<TSliderImageGridProps> = ({ data, priority = false, altPrefix }) => {
  const [isSliderReady, setIsSliderReady] = useState(false)

  useEffect(() => {
    setIsSliderReady(true)
  }, [])

  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: 'ondemand' as const,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const getAlt = (index: number) => `${altPrefix}, фото ${index + 1}`

  const fancyboxData = data.map(({ full, thumb }, index) => ({
    src: getGalleryPreviewUrl(full, 'mobile'),
    thumb: getGalleryPreviewUrl(thumb, 'mobile'),
    caption: getAlt(index),
  }))

  const createFancyBox = (index: number) => {
    new Fancybox([...fancyboxData], {
      startIndex: index,
    })
  }

  return (
    <div className={classes.gallery}>
      {isSliderReady ? (
        <div className="slider-container">
          <Slider {...settings}>
            {data.map(({ thumb }, index) => (
              <div key={thumb} onClick={() => createFancyBox(index)}>
                <picture>
                  <source media="(max-width: 1023px)" srcSet={getGalleryPreviewUrl(thumb, 'mobile')} />
                  <img
                    src={getGalleryPreviewUrl(thumb)}
                    alt={getAlt(index)}
                    loading={priority && index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={priority && index === 0 ? 'high' : 'auto'}
                    decoding="async"
                  />
                </picture>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <picture>
          <source media="(max-width: 1023px)" srcSet={getGalleryPreviewUrl(data[0].thumb, 'mobile')} />
          <img
            src={getGalleryPreviewUrl(data[0].thumb)}
            alt={getAlt(0)}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
          />
        </picture>
      )}
    </div>
  )
}
