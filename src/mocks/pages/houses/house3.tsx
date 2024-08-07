import { THousePage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'
import { NavMock } from '@mocks/nav'
import { FooterMock } from '@mocks/footer'
import { houseTypeInfoExampleMock } from '@mocks/houseTypeInfos'
import { ThreeHousesRowMock } from '@mocks/threeHousesRow'
import { ChooseHouseMock } from '@mocks/chooseHouse'
import { BookCallbackMock } from '@mocks/bookCallback'
import { FooterContactsMock } from '@mocks/footerContacts'

export const house3PageMock: THousePage = {
  meta: Metas.house3,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: {
    mainPageLink: '/',
    mainPageLabel: 'Главная страница',
    separator: '/',
    subitemText: 'Название',
    headingFirst: 'Дом 3',
    headingSecond: 'Заголовок 2',
    features: {
      first: {
        label: 'Общая площадь',
        value: '83.84 m2',
      },
      second: {
        label: 'Размер чего-то',
        value: 'вид 5.3 а',
      },
    },
    mainPageImageXs: '/img/mainPageBanner/mainPageBanner-xs.jpg',
    mainPageImageMd: '/img/mainPageBanner/mainPageBanner-md.jpg',
    mainPageImageLg: '/img/mainPageBanner/mainPageBanner-lg.jpg',
    blackHeadings: true,
  },
  houseTypeInfoData: houseTypeInfoExampleMock,
  threeHousesRowData: ThreeHousesRowMock,
  chooseHouseData: ChooseHouseMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
