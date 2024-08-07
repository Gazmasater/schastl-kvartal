import React, { FC } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { clx } from '@utils/clx'
import { TBigContactsMap } from '@localTypes/bigContactsMap'
import classes from './BigContactsMap.module.css'

type TBigContactsMapProps = {
  data: TBigContactsMap
}

export const BigContactsMap: FC<TBigContactsMapProps> = ({ data }) => {
  return (
    <div className={clx(['MuiContainer-root MuiContainer-maxWidthXl', classes.paddingAndMargins])}>
      <h1 className={clx(['MuiTypography-root', classes.heading, 'MuiTypography-h3'])}>{data.heading}</h1>
      <div className={classes.mapContainer}>
        <YMaps>
          <Map defaultState={data.config} width="100%" height="400px">
            <Placemark geometry={data.mapPlaceMarkCoords} />
          </Map>
        </YMaps>
      </div>
    </div>
  )
}
