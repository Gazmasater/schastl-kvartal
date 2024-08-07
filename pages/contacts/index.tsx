import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { ContactsPage } from '@pages'
import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { TContactsMainBlock } from '@localTypes/contactsMainBlock'
import { TBigContactsMap } from '@localTypes/bigContactsMap'
import { TBookCallback } from '@localTypes/bookCallback'
import { contactsPageMock } from '@mocks/pages/contactsPage'

type THomeProps = {
  meta: TMeta
  navData: TNavData
  footerData: TFooterData
  contactsMainBlockData: TContactsMainBlock
  bigContactsMapData: TBigContactsMap
  bookCallBackData: TBookCallback
}

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  return { props: { ...contactsPageMock } }
}

const Contacts: FC<THomeProps> = ({
  meta,
  navData,
  footerData,
  contactsMainBlockData,
  bigContactsMapData,
  bookCallBackData,
}) => (
  <>
    <Meta {...meta} />
    <ContactsPage
      navData={navData}
      footerData={footerData}
      contactsMainBlockData={contactsMainBlockData}
      bigContactsMapData={bigContactsMapData}
      bookCallBackData={bookCallBackData}
    />
  </>
)

export default Contacts
