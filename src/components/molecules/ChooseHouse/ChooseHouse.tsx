/* eslint-disable max-lines-per-function */
import React, { FC, useState } from 'react'
import ImageMapper, { CustomArea } from 'react-img-mapper'
import { TChooseHouse, THouseMetadata } from '@localTypes/chooseHouse'
import classes from './ChooseHouse.module.css'
import { Popover } from './atoms'

type TChooseHouseProps = {
  data: TChooseHouse
}

export const ChooseHouse: FC<TChooseHouseProps> = ({ data }) => {
  const [currentHouse, setCurrentHouse] = useState<THouseMetadata>()

  const onAreaHover = (area: CustomArea) => {
    if (area.id) {
      setCurrentHouse(data.housesMetadata[area.id])
    }
  }

  const onAreaClick = (area: CustomArea) => {
    if (area.id) {
      // eslint-disable-next-line no-restricted-globals
      location.href = data.housesMetadata[area.id].linkUrl
    }
  }

  return (
    <div className={classes.container}>
      {currentHouse && <Popover currentHouse={currentHouse} />}
      <div className={classes.imageWrapper}>
        <ImageMapper
          src={data.imgUrl}
          map={data.housesCoords}
          width={1520}
          height={922}
          onMouseEnter={area => onAreaHover(area)}
          onMouseLeave={() => setCurrentHouse(null)}
          onClick={area => onAreaClick(area)}
        />
      </div>
    </div>
  )
}
