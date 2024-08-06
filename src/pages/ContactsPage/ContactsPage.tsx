import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { BigContactsMap, BookCallback, ContactsMainBlock } from 'src/components'

type TContactsPageProps = {
  navData: TNavData
  footerData: TFooterData
}

export const ContactsPage: FC<TContactsPageProps> = ({ navData, footerData }) => {
  return (
    <HomeTemplate navData={navData} footerData={footerData}>
      <ContactsMainBlock />
      <BigContactsMap />
      <BookCallback />
    </HomeTemplate>
  )
}
