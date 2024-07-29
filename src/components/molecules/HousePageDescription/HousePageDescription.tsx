import React, { FC } from 'react'
import { THouse } from '@localTypes/house'
import { Spacer, Annotation } from '@components'
import classes from './HousePageDescription.module.scss'
import { HousePageImage } from './atoms'

type THousePageDescriptionProps = Pick<THouse, 'title' | 'imgUrl' | 'annotation'>

export const HousePageDescription: FC<THousePageDescriptionProps> = ({ title, imgUrl, annotation }) => (
  <>
    {!imgUrl && !annotation && <h1 className={classes.center}>{title}</h1>}
    {(imgUrl || annotation) && (
      <div className={imgUrl ? classes.container : classes.containerOneFraction}>
        <div className={classes['title-and-description']}>
          <h1>{title}</h1>
          <Spacer />
          {annotation && <Annotation>{annotation}</Annotation>}
        </div>
        {imgUrl && (
          <HousePageImage>
            <img src={imgUrl} alt={title} />
          </HousePageImage>
        )}
      </div>
    )}
    <Spacer size="height-50" />
  </>
)
