import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TContactsPage } from '@localTypes/pageTypes'
import { BigContactsMap, BookCallback, ContactsMainBlock } from 'src/components'

export const ContactsPage: FC<Omit<TContactsPage, 'meta'>> = ({
  navData,
  footerData,
  contactsMainBlockData,
  bigContactsMapData,
  bookCallBackData,
}) => {
  return (
    <HomeTemplate navData={navData} footerData={footerData}>
      <ContactsMainBlock data={contactsMainBlockData} />
      <BigContactsMap data={bigContactsMapData} />
      <BookCallback data={bookCallBackData} />
    </HomeTemplate>
  )
}
