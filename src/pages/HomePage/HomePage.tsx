import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { MainPageHeader } from 'src/components'

type THomePageProps = {
  navData: TNavData
  footerData: TFooterData
}

export const HomePage: FC<THomePageProps> = ({ navData, footerData }) => {
  return (
    <HomeTemplate navData={navData} footerData={footerData}>
      <MainPageHeader />
    </HomeTemplate>
  )
}
