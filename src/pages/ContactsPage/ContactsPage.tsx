import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TNav } from '@localTypes/nav'
import { TFooter } from '@localTypes/footer'
import { TContactsMainBlock } from '@localTypes/contactsMainBlock'
import { TBigContactsMap } from '@localTypes/bigContactsMap'
import { TBookCallback } from '@localTypes/bookCallback'
import { BigContactsMap, BookCallback, ContactsMainBlock } from 'src/components'

type TContactsPageProps = {
  navData: TNav
  footerData: TFooter
  contactsMainBlockData: TContactsMainBlock
  bigContactsMapData: TBigContactsMap
  bookCallBackData: TBookCallback
}

export const ContactsPage: FC<TContactsPageProps> = ({
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
