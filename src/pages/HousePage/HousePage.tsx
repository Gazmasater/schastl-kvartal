import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TNav } from '@localTypes/nav'
import { TFooter } from '@localTypes/footer'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { THouseTypeInfo } from '@localTypes/houseTypeInfo'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import { TBookCallback } from '@localTypes/bookCallback'
import { TFooterContacts } from '@localTypes/footerContacts'
import {
  BookCallback,
  ChooseHouse,
  FooterContacts,
  HouseTypeInfo,
  MainPageHeader,
  ThreeHousesRow,
} from 'src/components'

type THousePageProps = {
  navData: TNav
  footerData: TFooter
  mainPageHeaderData: TMainPageHeader
  houseTypeInfoData: THouseTypeInfo
  threeHousesRowData: TThreeHousesRow
  bookCallBackData: TBookCallback
  footerContactsData: TFooterContacts
}

export const HousePage: FC<THousePageProps> = ({
  navData,
  footerData,
  mainPageHeaderData,
  houseTypeInfoData,
  threeHousesRowData,
  bookCallBackData,
  footerContactsData,
}) => {
  return (
    <HomeTemplate navData={navData} footerData={footerData}>
      <MainPageHeader data={mainPageHeaderData} />
      <HouseTypeInfo data={houseTypeInfoData} />
      <ThreeHousesRow data={threeHousesRowData} />
      <ChooseHouse />
      <BookCallback data={bookCallBackData} />
      <FooterContacts data={footerContactsData} />
    </HomeTemplate>
  )
}
