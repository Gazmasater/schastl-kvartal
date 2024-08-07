import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { HomePage } from '@pages'
import { THomePage } from '@localTypes/pageTypes'
import { homePageMock } from '@mocks/pages/homePage'

export const getServerSideProps: GetServerSideProps<THomePage> = async () => {
  return { props: { ...homePageMock } }
}

const Home: FC<THomePage> = ({
  meta,
  navData,
  footerData,
  mainPageHeaderData,
  aboutProjectData,
  threeHousesRowData,
  chooseHouseData,
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
      chooseHouseData={chooseHouseData}
      bookCallBackData={bookCallBackData}
      footerContactsData={footerContactsData}
    />
  </>
)

export default Home
