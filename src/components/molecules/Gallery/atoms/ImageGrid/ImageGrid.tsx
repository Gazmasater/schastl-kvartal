/* eslint-disable no-new */
/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useState } from 'react'
import { Fancybox } from '@fancyapps/ui'
import { TGalleryImgUrls } from '@localTypes/gallery'
import { clx } from '@utils/clx'
import classes from './ImageGrid.module.css'

type TImageGridProps = {
  data: TGalleryImgUrls
}

export const ImageGrid: FC<TImageGridProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const fancyboxData = data.map(({ full, thumb }) => ({ src: full, thumb }))

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
              <img className={classes.imageLeftSide} alt="" src={thumb} loading="lazy" width="163" height="92" />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.bigImageContainer}>
        <div className={classes.previewHeightFull}>
          <div className={classes.previewContainer} onClick={() => createFancyBox()}>
            <figure className={clx([classes.marginZero, classes.previewContainer])}>
              <img
                alt=""
                loading="lazy"
                draggable="false"
                className={clx([classes.previewImage, classes.previewContainer])}
                src={data[currentIndex].full}
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
