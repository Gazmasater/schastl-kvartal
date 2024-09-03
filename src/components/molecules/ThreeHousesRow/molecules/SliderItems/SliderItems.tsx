import React, { FC } from 'react'
import Slider from 'react-slick'
import { clx } from '@utils/clx'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import classes from './SliderItems.module.css'

type TSliderItemsProps = {
  data: TThreeHousesRow['houses']
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomPrevArrow = (props: any) => (
  // eslint-disable-next-line react/destructuring-assignment
  <div className={clx(['slick-arrow slick-prev', classes.galleryArrow])} onClick={props.onClick} />
)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomNextArrow = (props: any) => (
  // eslint-disable-next-line react/destructuring-assignment
  <div className={clx(['slick-arrow slick-next', classes.galleryArrow])} onClick={props.onClick} />
)

export const SliderItems: FC<TSliderItemsProps> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 150,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          speed: 150,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
            {data.map(
              ({
                linkUrl,
                imgUrl,
                imgAlt,
                title,
                feautureFirstTitle,
                featureFirstValue,
                featureSecondTitle,
                featureSecondValue,
              }) => (
                <div key={title} className={classes.slideContainer}>
                  <a
                    href={linkUrl}
                    className={clx([
                      'MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary',
                    ])}
                  >
                    <div className={clx([classes.imageClipContainer, classes.imageClipFirst])}>
                      <div className={classes.imageClipInner}>
                        <img className={classes.imageInClip} src={imgUrl} alt={imgAlt} />
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
    </>
  )
}
