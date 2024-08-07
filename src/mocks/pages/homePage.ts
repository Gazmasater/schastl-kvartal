import { THomePage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'
import { NavMock } from '@mocks/nav'
import { FooterMock } from '@mocks/footer'
import { MainPageHeaderMock } from '@mocks/mainPageHeader'
import { AboutProjectMock } from '@mocks/aboutProject'
import { ThreeHousesRowMock } from '@mocks/threeHousesRow'
import { ChooseHouseMock } from '@mocks/chooseHouse'
import { BookCallbackMock } from '@mocks/bookCallback'
import { FooterContactsMock } from '@mocks/footerContacts'

export const homePageMock: THomePage = {
  meta: Metas.homepage,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: MainPageHeaderMock,
  aboutProjectData: AboutProjectMock,
  threeHousesRowData: ThreeHousesRowMock,
  chooseHouseData: ChooseHouseMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
