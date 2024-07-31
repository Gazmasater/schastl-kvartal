import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TCards } from '@localTypes/cards'

type THomePageProps = {
  houseTitle: string
} & TCards

export const HomePage: FC<THomePageProps> = ({ houseTitle, cards }) => {
  console.log(houseTitle)
  console.log(cards)

  return <HomeTemplate />
}
