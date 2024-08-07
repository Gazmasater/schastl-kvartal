import { TContactsPage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'
import { NavMock } from '@mocks/nav'
import { FooterMock } from '@mocks/footer'
import { ContactsMainBlockMock } from '@mocks/contactsMainBlock'
import { BigContactsMapMock } from '@mocks/bigContactsMap'
import { BookCallbackMock } from '@mocks/bookCallback'

export const contactsPageMock: TContactsPage = {
  meta: Metas.homepage,
  navData: NavMock,
  footerData: FooterMock,
  contactsMainBlockData: ContactsMainBlockMock,
  bigContactsMapData: BigContactsMapMock,
  bookCallBackData: BookCallbackMock,
}
