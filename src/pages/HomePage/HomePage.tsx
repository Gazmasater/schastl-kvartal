import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TNav } from '@localTypes/nav'
import { TFooter } from '@localTypes/footer'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { TAboutProject } from '@localTypes/aboutProject'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import { TBookCallback } from '@localTypes/bookCallback'
import { TFooterContacts } from '@localTypes/footerContacts'
import { AboutProject, BookCallback, ChooseHouse, FooterContacts, MainPageHeader, ThreeHousesRow } from 'src/components'

type THomePageProps = {
  navData: TNav
  footerData: TFooter
  mainPageHeaderData: TMainPageHeader
  aboutProjectData: TAboutProject
  threeHousesRowData: TThreeHousesRow
  bookCallBackData: TBookCallback
  footerContactsData: TFooterContacts
}

export const HomePage: FC<THomePageProps> = ({
  navData,
  footerData,
  mainPageHeaderData,
  aboutProjectData,
  threeHousesRowData,
  bookCallBackData,
  footerContactsData,
}) => {
  return (
    <HomeTemplate navData={navData} footerData={footerData}>
      <MainPageHeader data={mainPageHeaderData} />
      <AboutProject data={aboutProjectData} />
      <ThreeHousesRow data={threeHousesRowData} />
      <ChooseHouse />
      <BookCallback data={bookCallBackData} />
      <FooterContacts data={footerContactsData} />
    </HomeTemplate>
  )
}
