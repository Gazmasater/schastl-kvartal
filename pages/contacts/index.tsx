import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { ContactsPage } from '@pages'
import { TContactsPage } from '@localTypes/pageTypes'
import { contactsPageMock } from '@mocks/pages/contactsPage'

export const getServerSideProps: GetServerSideProps<TContactsPage> = async () => {
  return { props: { ...contactsPageMock } }
}

const Contacts: FC<TContactsPage> = ({
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
