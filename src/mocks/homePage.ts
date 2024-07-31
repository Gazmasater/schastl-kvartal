import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { Metas } from './meta'
import { NavMock } from './nav'

type THomePageMock = {
  meta: TMeta
  navData: TNavData
}

export const homePageMock: THomePageMock = {
  meta: Metas.homepage,
  navData: NavMock,
}
