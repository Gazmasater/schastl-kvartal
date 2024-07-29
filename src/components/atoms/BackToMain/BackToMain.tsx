import React, { FC } from 'react'
import { backToMainMock } from '@mocks/backToMain'
import classes from './BackToMain.module.scss'

export const BackToMain: FC = () => (
  <a href={backToMainMock.url} title={backToMainMock.title} className={classes.link}>
    {backToMainMock.text}
  </a>
)
