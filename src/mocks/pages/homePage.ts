import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { TAboutProject } from '@localTypes/aboutProject'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import { TBookCallback } from '@localTypes/bookCallback'
import { TFooterContacts } from '@localTypes/footerContacts'
import { Metas } from '../meta'
import { NavMock } from '../nav'
import { FooterMock } from '../footer'
import { MainPageHeaderMock } from '../mainPageHeader'
import { AboutProjectMock } from '../aboutProject'
import { ThreeHousesRowMock } from '../threeHousesRow'
import { BookCallbackMock } from '../bookCallback'
import { FooterContactsMock } from '../footerContacts'

type THomePageMock = {
  meta: TMeta
  navData: TNavData
  footerData: TFooterData
  mainPageHeaderData: TMainPageHeader['data']
  aboutProjectData: TAboutProject
  threeHousesRowData: TThreeHousesRow
  bookCallBackData: TBookCallback
  footerContactsData: TFooterContacts
}

export const homePageMock: THomePageMock = {
  meta: Metas.homepage,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: MainPageHeaderMock,
  aboutProjectData: AboutProjectMock,
  threeHousesRowData: ThreeHousesRowMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
