/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react'
import { TGalleryImgUrls } from '@localTypes/gallery'
import { Fancybox } from '../Fancybox'
import classes from './ImageSimpleGrid.module.css'

type TImageSimpleGridProps = {
  data: TGalleryImgUrls
}

export const ImageSimpleGrid: FC<TImageSimpleGridProps> = ({ data }) => {
  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <div className={classes.gallery}>
        {data.map(({ full, thumb }) => (
          <div className={classes.galleryItem} key={full}>
            <a data-fancybox="gallery" href={full}>
              <img src={thumb} />
            </a>
          </div>
        ))}
      </div>
    </Fancybox>
  )
}
