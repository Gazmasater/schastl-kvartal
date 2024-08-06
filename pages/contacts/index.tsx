import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { ContactsPage } from '@pages'
import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { homePageMock } from '@mocks/homePage'

type THomeProps = {
  meta: TMeta
  navData: TNavData
  footerData: TFooterData
  mainPageHeaderData: TMainPageHeader['data']
}

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  return { props: { ...homePageMock } }
}

const Contacts: FC<THomeProps> = () => (
  <>
    <Meta {...homePageMock.meta} />
    <ContactsPage navData={homePageMock.navData} footerData={homePageMock.footerData} />
  </>
)

export default Contacts
