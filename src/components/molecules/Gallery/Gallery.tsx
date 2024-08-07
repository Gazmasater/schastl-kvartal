/* eslint-disable jsx-a11y/alt-text */
import React, { FC, Fragment } from 'react'
import { TGallery } from '@localTypes/gallery'
import { clx } from '@utils/clx'
import { ImageGrid, ImageSimpleGrid } from './atoms'
import classes from './Gallery.module.css'

type TGalleryProps = {
  data: TGallery
}

export const Gallery: FC<TGalleryProps> = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <h2 className={clx(['MuiTypography-root', classes.mainHeading, 'MuiTypography-h2'])}>{data.title}</h2>
        {data.gallery.map(({ date, text, imgUrls }) => (
          <Fragment key={date}>
            <div className={classes.galleryItemDescriptionFlex}>
              <div className={classes.date}>
                <h4 className={clx(['MuiTypography-root', classes.subHeading, 'MuiTypography-h4'])}>{date}</h4>
              </div>
              <div className={classes.textContainer}>{text && text.map(el => <p key={el}>{el}</p>)}</div>
            </div>
            <ImageGrid data={imgUrls} />
            <ImageSimpleGrid data={imgUrls} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
