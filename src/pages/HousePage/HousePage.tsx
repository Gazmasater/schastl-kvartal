import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { THousePage } from '@localTypes/pageTypes'
import {
  BookCallback,
  ChooseHouse,
  FooterContacts,
  HouseTypeInfo,
  MainPageHeader,
  ThreeHousesRow,
} from 'src/components'

export const HousePage: FC<Omit<THousePage, 'meta'>> = ({
  navData,
  footerData,
  mainPageHeaderData,
  houseTypeInfoData,
  threeHousesRowData,
  chooseHouseData,
  bookCallBackData,
  footerContactsData,
}) => {
  return (
    <HomeTemplate navData={navData} footerData={footerData}>
      <MainPageHeader data={mainPageHeaderData} />
      <HouseTypeInfo data={houseTypeInfoData} />
      <ThreeHousesRow data={threeHousesRowData} />
      <ChooseHouse data={chooseHouseData} />
      <BookCallback data={bookCallBackData} />
      <FooterContacts data={footerContactsData} />
    </HomeTemplate>
  )
}
