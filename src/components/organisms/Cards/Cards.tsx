import React, { FC } from 'react'
import { TCards } from '@localTypes/cards'
import classes from './Cards.module.scss'

export const Cards: FC<TCards> = ({ cards }) => (
  <div className={classes.wrapper}>
    {cards.map(({ id, image, title, url }) => (
      <div className={classes['card-container']} key={id}>
        <a href={'/houses/' + url} className={classes.card}>
          <img className={classes.image} src={image} alt={title} />
          <div className={classes.title}>{title}</div>
        </a>
      </div>
    ))}
  </div>
)
