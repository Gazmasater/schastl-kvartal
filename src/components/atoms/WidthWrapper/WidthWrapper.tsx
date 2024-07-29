import React, { FC, PropsWithChildren } from 'react'
import classes from './WidthWrapper.module.scss'

export const WidthWrapper: FC<PropsWithChildren> = ({ children }) => <div className={classes.wrapper}>{children}</div>
