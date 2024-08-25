import { THousePage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'
import { NavMock } from '@mocks/nav'
import { FooterMock } from '@mocks/footer'
import { houseTypeInfoExampleMock } from '@mocks/houseTypeInfos'
import { ThreeHousesRowMock } from '@mocks/threeHousesRow'
import { ChooseHouseMock } from '@mocks/chooseHouse'
import { BookCallbackMock } from '@mocks/bookCallback'
import { FooterContactsMock } from '@mocks/footerContacts'

export const house2PageMock: THousePage = {
  meta: Metas.house2,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: {
    mainPageLink: '/',
    mainPageLabel: 'Главная страница',
    separator: '/',
    subitemText: 'brilliante',
    headingFirst: 'BRILLIANTE',
    headingSecond: '',
    features: {
      first: {
        label: 'Общая площадь',
        value: '115 m2',
      },
      second: {
        label: 'Размер участка',
        value: '8 соток',
      },
    },
    mainPageImageXs: '/img/mappedImage/house-2-115m2/real.jpg',
    mainPageImageMd: '/img/mappedImage/house-2-115m2/real.jpg',
    mainPageImageLg: '/img/mappedImage/house-2-115m2/real.jpg',
    blackHeadings: true,
  },
  houseTypeInfoData: houseTypeInfoExampleMock,
  threeHousesRowData: ThreeHousesRowMock,
  chooseHouseData: ChooseHouseMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
