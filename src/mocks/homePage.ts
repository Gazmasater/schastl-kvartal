import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { Metas } from './meta'
import { NavMock } from './nav'
import { FooterMock } from './footer'

type THomePageMock = {
  meta: TMeta
  navData: TNavData
  footerData: TFooterData
}

export const homePageMock: THomePageMock = {
  meta: Metas.homepage,
  navData: NavMock,
  footerData: FooterMock,
}
