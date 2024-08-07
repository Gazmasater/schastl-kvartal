/* eslint-disable jsx-a11y/alt-text */
import React, { FC, Fragment } from 'react'
import { TGallery } from '@localTypes/gallery'
import { clx } from '@utils/clx'
import { Fancybox } from './atoms'
import classes from './Gallery.module.css'

type TGalleryProps = {
  data: TGallery
}

export const Gallery: FC<TGalleryProps> = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <h2 className={clx(['MuiTypography-root', classes.mainHeading, 'MuiTypography-h2'])}>{data.title}</h2>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          {data.gallery.map(({ date, imgUrls }) => (
            <Fragment key={date}>
              <h4 className={clx(['MuiTypography-root', classes.subHeading, 'MuiTypography-h4'])}>{date}</h4>
              <div className={classes.gallery}>
                {imgUrls.map(({ full, thumb }) => (
                  <div className={classes.galleryItem} key={full}>
                    <a data-fancybox="gallery" href={full}>
                      <img src={thumb} />
                    </a>
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
        </Fancybox>
      </div>
    </div>
  )
}
