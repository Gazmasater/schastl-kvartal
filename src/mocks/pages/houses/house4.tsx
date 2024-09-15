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

export const house4PageMock: THousePage = {
  meta: Metas.house4,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: {
    mainPageLink: '/',
    mainPageLabel: 'Главная страница',
    separator: '/',
    subitemText: 'Модерн',
    headingFirst: 'Модерн',
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
    mainPageImageXs: '/img/mainPageBanner/mainPageBanner-xs.jpg', // mainPageImageXs: 521x521
    mainPageImageMd: '/img/mainPageBanner/mainPageBanner-md.jpg', // mainPageImageMd: 1280x720
    mainPageImageLg: '/img/mainPageBanner/mainPageBanner-lg.jpg', // mainPageImageLg: 2160x1080
    blackHeadings: true, // optional param
    customHeadingHexColor: '#fff', // optional param
    customFeaturesBaseColor: '#fff', // optional param
  },
  houseTypeInfoData: houseTypeInfoExampleMock,
  threeHousesRowData: ThreeHousesRowMock,
  chooseHouseData: ChooseHouseMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
