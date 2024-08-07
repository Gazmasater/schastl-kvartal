import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { TContactsMainBlock } from '@localTypes/contactsMainBlock'
import { TBigContactsMap } from '@localTypes/bigContactsMap'
import { TBookCallback } from '@localTypes/bookCallback'
import { Metas } from '../meta'
import { NavMock } from '../nav'
import { FooterMock } from '../footer'
import { ContactsMainBlockMock } from '../contactsMainBlock'
import { BigContactsMapMock } from '../bigContactsMap'
import { BookCallbackMock } from '../bookCallback'

type TContactsPageMock = {
  meta: TMeta
  navData: TNavData
  footerData: TFooterData
  contactsMainBlockData: TContactsMainBlock
  bigContactsMapData: TBigContactsMap
  bookCallBackData: TBookCallback
}

export const contactsPageMock: TContactsPageMock = {
  meta: Metas.homepage,
  navData: NavMock,
  footerData: FooterMock,
  contactsMainBlockData: ContactsMainBlockMock,
  bigContactsMapData: BigContactsMapMock,
  bookCallBackData: BookCallbackMock,
}
