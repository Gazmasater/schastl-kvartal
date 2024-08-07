import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { HousePage } from '@pages'
import { THousePage } from '@localTypes/pageTypes'
import { housesAvailableUrls, housesContent } from '@mocks/pages/housesList'

export const getServerSideProps: GetServerSideProps<THousePage> = async ({ params }) => {
  const pageId = params.house
  if (!pageId || Array.isArray(pageId) || housesAvailableUrls.indexOf(pageId) === -1) {
    return { notFound: true }
  }

  const content = housesContent[pageId]
  return { props: { ...content } }
}

const House: FC<THousePage> = ({
  meta,
  navData,
  footerData,
  mainPageHeaderData,
  houseTypeInfoData,
  threeHousesRowData,
  chooseHouseData,
  bookCallBackData,
  footerContactsData,
}) => (
  <>
    <Meta {...meta} />
    <HousePage
      navData={navData}
      footerData={footerData}
      mainPageHeaderData={mainPageHeaderData}
      houseTypeInfoData={houseTypeInfoData}
      threeHousesRowData={threeHousesRowData}
      chooseHouseData={chooseHouseData}
      bookCallBackData={bookCallBackData}
      footerContactsData={footerContactsData}
    />
  </>
)

export default House
