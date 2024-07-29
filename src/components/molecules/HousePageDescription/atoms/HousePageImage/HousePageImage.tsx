import React, { FC, PropsWithChildren } from 'react'
import classes from './HousePageImage.module.scss'

export const HousePageImage: FC<PropsWithChildren> = ({ children }) => <div className={classes.wrapper}>{children}</div>
