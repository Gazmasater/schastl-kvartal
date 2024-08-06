import React, { FC } from 'react'
import { clx } from '@utils/clx'
import { TBigContactsMap } from '@localTypes/bigContactsMap'
import classes from './BigContactsMap.module.css'

type TBigContactsMapProps = {
  data: TBigContactsMap
}

export const BigContactsMap: FC<TBigContactsMapProps> = ({ data }) => {
  return (
    <div className="MuiContainer-root MuiContainer-maxWidthXl">
      <h1 className={clx(['MuiTypography-root', classes.heading, 'MuiTypography-h3'])}>{data.heading}</h1>
      <div className={classes.mapContainer}>Map here</div>
    </div>
  )
}
