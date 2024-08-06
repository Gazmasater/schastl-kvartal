import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { Metas } from './meta'
import { NavMock } from './nav'
import { FooterMock } from './footer'
import { MainPageHeaderMock } from './mainPageHeader'

type THomePageMock = {
  meta: TMeta
  navData: TNavData
  footerData: TFooterData
  mainPageHeaderData: TMainPageHeader['data']
}

export const homePageMock: THomePageMock = {
  meta: Metas.homepage,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: MainPageHeaderMock,
}
