import React, { FC, PropsWithChildren } from 'react'
import classes from './NonFooterWrapper.module.scss'

export const NonFooterWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
)
