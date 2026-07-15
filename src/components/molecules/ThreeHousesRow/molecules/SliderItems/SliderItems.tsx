import React, { FC, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { clx } from '@utils/clx'
import { getPublicUrl } from '@utils/getPublicUrl'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import classes from './SliderItems.module.css'

type TSliderItemsProps = {
  data: TThreeHousesRow['houses']
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomPrevArrow = ({ onClick }: any) => (
  <button
    type="button"
    aria-label="Предыдущий дом"
    className={clx(['slick-arrow slick-prev', classes.galleryArrow])}
    onClick={onClick}
  />
)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomNextArrow = ({ onClick }: any) => (
  <button
    type="button"
    aria-label="Следующий дом"
    className={clx(['slick-arrow slick-next', classes.galleryArrow])}
    onClick={onClick}
  />
)

export const SliderItems: FC<TSliderItemsProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)')
    const updateSlidesToShow = () => setSlidesToShow(mediaQuery.matches ? 1 : 3)

    updateSlidesToShow()
    mediaQuery.addEventListener('change', updateSlidesToShow)

    return () => mediaQuery.removeEventListener('change', updateSlidesToShow)
  }, [])

  const settings = {
    dots: false,
    infinite: false,
    speed: 150,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: false,
          speed: 150,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={classes.gallery}>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map(
            (
              {
                linkUrl,
                imgUrl,
                imgAlt,
                title,
                feautureFirstTitle,
                featureFirstValue,
                featureSecondTitle,
                featureSecondValue,
              },
              index,
            ) => (
              <div key={title} className={classes.slideContainer}>
                <a
                  href={getPublicUrl(linkUrl)}
                  tabIndex={index >= currentSlide && index < currentSlide + slidesToShow ? 0 : -1}
                  className={clx(['MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary'])}
                >
                  <div className={clx([classes.imageClipContainer, classes.imageClipFirst])}>
                    <div className={classes.imageClipInner}>
                      <picture>
                        <source media="(max-width: 1023px)" srcSet={imgUrl.replace('.webp', '-mobile.webp')} />
                        <img
                          className={classes.imageInClip}
                          src={imgUrl}
                          alt={imgAlt}
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className={classes.underImageContainer}>
                    <div className={classes.descriptionTitle}>{title}</div>
                    <div className={classes.descriptionFlex}>
                      <div className={classes.descriptionText}>
                        <div>
                          <div>{feautureFirstTitle}</div>
                          <b>{featureFirstValue}</b>
                        </div>
                      </div>
                      <div className={classes.descriptionText}>
                        <div>
                          <div>{featureSecondTitle}</div>
                          <b>{featureSecondValue}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ),
          )}
        </Slider>
      </div>
    </div>
  )
}
