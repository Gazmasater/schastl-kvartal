import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { HomePage } from '@pages'
import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { TAboutProject } from '@localTypes/aboutProject'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import { TBookCallback } from '@localTypes/bookCallback'
import { TFooterContacts } from '@localTypes/footerContacts'
import { homePageMock } from '@mocks/pages/homePage'

type THomeProps = {
  meta: TMeta
  navData: TNavData
  footerData: TFooterData
  mainPageHeaderData: TMainPageHeader['data']
  aboutProjectData: TAboutProject
  threeHousesRowData: TThreeHousesRow
  bookCallBackData: TBookCallback
  footerContactsData: TFooterContacts
}

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  return { props: { ...homePageMock } }
}

const Home: FC<THomeProps> = ({
  meta,
  navData,
  footerData,
  mainPageHeaderData,
  aboutProjectData,
  threeHousesRowData,
  bookCallBackData,
  footerContactsData,
}) => (
  <>
    <Meta {...meta} />
    <HomePage
      navData={navData}
      footerData={footerData}
      mainPageHeaderData={mainPageHeaderData}
      aboutProjectData={aboutProjectData}
      threeHousesRowData={threeHousesRowData}
      bookCallBackData={bookCallBackData}
      footerContactsData={footerContactsData}
    />
  </>
)

export default Home
