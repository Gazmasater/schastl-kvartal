import React, { FC } from 'react'
import classes from './Spacer.module.scss'

type TSpacerProps = {
  size?: 'height-25' | 'height-50'
}

export const Spacer: FC<TSpacerProps> = ({ size }) => {
  const sizeClass = size ? classes[size] : classes['height-25']

  return <div className={classes.spacer + ' ' + sizeClass} />
}
