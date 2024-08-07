import { TMeta } from '@localTypes/meta'
import { TNav } from '@localTypes/nav'
import { TFooter } from '@localTypes/footer'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { TAboutProject } from '@localTypes/aboutProject'
import { THouseTypeInfo } from '@localTypes/houseTypeInfo'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import { TBookCallback } from '@localTypes/bookCallback'
import { TFooterContacts } from '@localTypes/footerContacts'
import { TContactsMainBlock } from '@localTypes/contactsMainBlock'
import { TBigContactsMap } from '@localTypes/bigContactsMap'

export type THomePage = {
  meta: TMeta
  navData: TNav
  footerData: TFooter
  mainPageHeaderData: TMainPageHeader
  aboutProjectData: TAboutProject
  threeHousesRowData: TThreeHousesRow
  bookCallBackData: TBookCallback
  footerContactsData: TFooterContacts
}

export type TContactsPage = {
  meta: TMeta
  navData: TNav
  footerData: TFooter
  contactsMainBlockData: TContactsMainBlock
  bigContactsMapData: TBigContactsMap
  bookCallBackData: TBookCallback
}

export type THousePage = {
  meta: TMeta
  navData: TNav
  footerData: TFooter
  mainPageHeaderData: TMainPageHeader
  houseTypeInfoData: THouseTypeInfo
  threeHousesRowData: TThreeHousesRow
  bookCallBackData: TBookCallback
  footerContactsData: TFooterContacts
}
