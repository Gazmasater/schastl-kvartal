import React, { FC } from 'react'
import { WidthWrapper, Cards, Spacer } from '@components'
import { HomeTemplate } from '@templates'
import { TCards } from '@localTypes/cards'

type THomePageProps = {
  houseTitle: string
} & TCards

export const HomePage: FC<THomePageProps> = ({ houseTitle, cards }) => (
  <HomeTemplate>
    <WidthWrapper>
      <h1>{houseTitle}</h1>
      <Spacer size="height-50" />
      <Cards cards={cards} />
    </WidthWrapper>
    <Spacer />
  </HomeTemplate>
)
