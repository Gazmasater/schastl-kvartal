import { TMeta } from '@localTypes/meta'
import { TNav } from '@localTypes/nav'
import { TFooter } from '@localTypes/footer'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { TAboutProject } from '@localTypes/aboutProject'
import { THouseTypeInfo } from '@localTypes/houseTypeInfo'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import { TChooseHouse } from '@localTypes/chooseHouse'
import { TBookCallback } from '@localTypes/bookCallback'
import { TFooterContacts } from '@localTypes/footerContacts'
import { TContactsMainBlock } from '@localTypes/contactsMainBlock'
import { TBigContactsMap } from '@localTypes/bigContactsMap'
import { TGallery } from '@localTypes/gallery'

export type THomePage = {
  meta: TMeta
  navData: TNav
  footerData: TFooter
  mainPageHeaderData: TMainPageHeader
  aboutProjectData: TAboutProject
  threeHousesRowData: TThreeHousesRow
  chooseHouseData: TChooseHouse
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
  chooseHouseData: TChooseHouse
  bookCallBackData: TBookCallback
  footerContactsData: TFooterContacts
}

export type TGalleryPage = {
  meta: TMeta
  navData: TNav
  footerData: TFooter
  galleryData: TGallery
}
