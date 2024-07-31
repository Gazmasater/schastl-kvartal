import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TNavData } from '@localTypes/navData'
import { MainPageHeader } from 'src/components'

type THomePageProps = {
  navData: TNavData
}

export const HomePage: FC<THomePageProps> = ({ navData }) => {
  return (
    <HomeTemplate navData={navData}>
      <MainPageHeader />
    </HomeTemplate>
  )
}
