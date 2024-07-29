import React, { FC } from 'react'
import { WidthWrapper, Spacer, BackToMain, HousePageDescription } from '@components'
import { HomeTemplate } from '@templates'
import { THouse } from '@localTypes/house'

type THousePageProps = Omit<THouse, 'meta'>

export const HousePage: FC<THousePageProps> = ({ title, imgUrl, annotation, text }) => (
  <HomeTemplate>
    <WidthWrapper>
      <BackToMain />
      <Spacer />
      <HousePageDescription title={title} imgUrl={imgUrl} annotation={annotation} />
      {text.map(item => (
        <p key={item.slice(10)}>{item}</p>
      ))}
      <Spacer />
      <BackToMain />
      <Spacer />
    </WidthWrapper>
    <Spacer />
  </HomeTemplate>
)
