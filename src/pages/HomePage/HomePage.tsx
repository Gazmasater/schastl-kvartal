import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { AboutProject, BookCallback, MainPageHeader, ThreeHousesRow } from 'src/components'
import { TMainPageHeader } from '@localTypes/mainPageHeader'

type THomePageProps = {
  navData: TNavData
  footerData: TFooterData
  mainPageHeaderData: TMainPageHeader['data']
}

export const HomePage: FC<THomePageProps> = ({ navData, footerData, mainPageHeaderData }) => {
  return (
    <HomeTemplate navData={navData} footerData={footerData}>
      <MainPageHeader data={mainPageHeaderData} />
      <AboutProject />
      <ThreeHousesRow />
      <BookCallback />
    </HomeTemplate>
  )
}
