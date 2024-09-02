import { THousePage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'
import { NavMock } from '@mocks/nav'
import { FooterMock } from '@mocks/footer'
import { houseTypeInfoExampleMock } from '@mocks/houseTypeInfos'
import { ThreeHousesRowMock } from '@mocks/threeHousesRow'
import { ChooseHouseMock } from '@mocks/chooseHouse'
import { BookCallbackMock } from '@mocks/bookCallback'
import { FooterContactsMock } from '@mocks/footerContacts'

/*
mainPageImageXs: 521x521
mainPageImageMd: 1280x720
mainPageImageLg: 2160x1080
*/

export const house1PageMock: THousePage = {
  meta: Metas.house1,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: {
    mainPageLink: '/',
    mainPageLabel: 'Главная страница',
    separator: '/',
    subitemText: 'grande',
    headingFirst: 'GRANDE',
    headingSecond: '',
    features: {
      first: {
        label: 'Общая площадь',
        value: '155 m2',
      },
      second: {
        label: 'Размер участка',
        value: '8 соток',
      },
    },
    mainPageImageXs: '/img/mainPageBanner/house-1-155m2/mainPageBanner-xs.jpg',
    mainPageImageMd: '/img/mainPageBanner/house-1-155m2/mainPageBanner-md.jpg',
    mainPageImageLg: '/img/mainPageBanner/house-1-155m2/mainPageBanner-lg.jpg',
  },
  houseTypeInfoData: houseTypeInfoExampleMock,
  threeHousesRowData: ThreeHousesRowMock,
  chooseHouseData: ChooseHouseMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
