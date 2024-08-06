import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import {
  BookCallback,
  ChooseHouse,
  FooterContacts,
  HouseTypeInfo,
  MainPageHeader,
  ThreeHousesRow,
} from 'src/components'
import { TMainPageHeader } from '@localTypes/mainPageHeader'

type THouseTypeProps = {
  navData: TNavData
  footerData: TFooterData
  mainPageHeaderData: TMainPageHeader['data']
}

export const HouseTypePage: FC<THouseTypeProps> = ({ navData, footerData, mainPageHeaderData }) => {
  return (
    <HomeTemplate navData={navData} footerData={footerData}>
      <MainPageHeader data={mainPageHeaderData} />
      <HouseTypeInfo />
      <ThreeHousesRow />
      <ChooseHouse />
      <BookCallback />
      <FooterContacts />
    </HomeTemplate>
  )
}
