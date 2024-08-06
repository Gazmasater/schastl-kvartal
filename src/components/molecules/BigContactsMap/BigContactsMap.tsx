import React, { FC } from 'react'
import { clx } from '@utils/clx'
import classes from './BigContactsMap.module.css'

export const BigContactsMap: FC = () => {
  return (
    <div className="MuiContainer-root MuiContainer-maxWidthXl">
      <h1 className={clx(['MuiTypography-root', classes.heading, 'MuiTypography-h3'])}>Як до нас проїхати</h1>
      <div className={classes.mapContainer}>Map here</div>
    </div>
  )
}
