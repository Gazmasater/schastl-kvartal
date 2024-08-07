import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { THomePage } from '@localTypes/pageTypes'
import { AboutProject, BookCallback, ChooseHouse, FooterContacts, MainPageHeader, ThreeHousesRow } from 'src/components'

export const HomePage: FC<Omit<THomePage, 'meta'>> = ({
  navData,
  footerData,
  mainPageHeaderData,
  aboutProjectData,
  threeHousesRowData,
  chooseHouseData,
  bookCallBackData,
  footerContactsData,
}) => {
  return (
    <HomeTemplate navData={navData} footerData={footerData}>
      <MainPageHeader data={mainPageHeaderData} />
      <AboutProject data={aboutProjectData} />
      <ThreeHousesRow data={threeHousesRowData} />
      <ChooseHouse data={chooseHouseData} />
      <BookCallback data={bookCallBackData} />
      <FooterContacts data={footerContactsData} />
    </HomeTemplate>
  )
}
