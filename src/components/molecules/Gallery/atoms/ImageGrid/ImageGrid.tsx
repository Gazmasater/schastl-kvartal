/* eslint-disable no-new */
import React, { FC, useState } from 'react'
import { Fancybox } from '@fancyapps/ui'
import { TGalleryImgUrls } from '@localTypes/gallery'
import { clx } from '@utils/clx'
import { getGalleryPreviewUrl } from '@utils/getGalleryPreviewUrl'
import classes from './ImageGrid.module.css'

type TImageGridProps = {
  data: TGalleryImgUrls
  priority?: boolean
  altPrefix: string
}

export const ImageGrid: FC<TImageGridProps> = ({ data, priority = false, altPrefix }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const getAlt = (index: number) => `${altPrefix}, фото ${index + 1}`

  const fancyboxData = data.map(({ full, thumb }, index) => ({
    src: getGalleryPreviewUrl(full),
    thumb: getGalleryPreviewUrl(thumb),
    caption: getAlt(index),
  }))

  const createFancyBox = () => {
    new Fancybox([...fancyboxData], {
      startIndex: currentIndex,
    })
  }

  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <div className={classes.leftSideContainer}>
          {data.map(({ thumb }, index) => (
            <div key={thumb} className={classes.cursorPointerLeftside} onClick={() => setCurrentIndex(index)}>
              <img
                className={classes.imageLeftSide}
                alt={getAlt(index)}
                src={getGalleryPreviewUrl(thumb)}
                loading="lazy"
                decoding="async"
                width="163"
                height="92"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.bigImageContainer}>
        <div className={classes.previewHeightFull}>
          <div className={classes.previewContainer} onClick={() => createFancyBox()}>
            <figure className={clx([classes.marginZero, classes.previewContainer])}>
              <img
                alt={getAlt(currentIndex)}
                loading={priority ? 'eager' : 'lazy'}
                draggable="false"
                className={clx([classes.previewImage, classes.previewContainer])}
                src={getGalleryPreviewUrl(data[currentIndex].thumb)}
                width="1920"
                height="1080"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
