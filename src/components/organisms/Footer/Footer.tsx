import React, { FC } from 'react'
import { FooterMock } from '@mocks/footer'
import classes from './Footer.module.scss'

export const Footer: FC = () => (
  <div className={classes.wrapper}>
    <div className={classes.title}>{FooterMock.title}</div>
    <div className={classes.email}>
      <a href={'mailto:' + FooterMock.email}>{FooterMock.email}</a>
    </div>
  </div>
)
