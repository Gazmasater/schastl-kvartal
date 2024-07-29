import React, { FC, PropsWithChildren } from 'react'
import classes from './Annotation.module.scss'

export const Annotation: FC<PropsWithChildren> = ({ children }) => <div className={classes.wrapper}>{children}</div>
