import React, { FC } from 'react'
import { HeaderMock } from '@mocks/header'
import classes from './Header.module.scss'

export const Header: FC = () => (
  <div className={classes.wrapper}>
    <header className={classes.header}>
      <div className={classes.image} />
      <div className={classes.title}>{HeaderMock.title}</div>
    </header>
  </div>
)
