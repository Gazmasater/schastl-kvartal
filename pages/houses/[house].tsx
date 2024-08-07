import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { HousePage } from '@pages'
import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { THouseTypeInfo } from '@localTypes/houseTypeInfo'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import { TBookCallback } from '@localTypes/bookCallback'
import { TFooterContacts } from '@localTypes/footerContacts'
import { housesAvailableUrls, housesContent } from '@mocks/pages/housesList'

type THouseProps = {
  meta: TMeta
  navData: TNavData
  footerData: TFooterData
  mainPageHeaderData: TMainPageHeader['data']
  houseTypeInfoData: THouseTypeInfo
  threeHousesRowData: TThreeHousesRow
  bookCallBackData: TBookCallback
  footerContactsData: TFooterContacts
}

export const getServerSideProps: GetServerSideProps<THouseProps> = async ({ params }) => {
  const pageId = params.house
  if (!pageId || Array.isArray(pageId) || housesAvailableUrls.indexOf(pageId) === -1) {
    return { notFound: true }
  }

  const content = housesContent[pageId]
  return { props: { ...content } }
}

const House: FC<THouseProps> = ({
  meta,
  navData,
  footerData,
  mainPageHeaderData,
  houseTypeInfoData,
  threeHousesRowData,
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
      bookCallBackData={bookCallBackData}
      footerContactsData={footerContactsData}
    />
  </>
)

export default House
