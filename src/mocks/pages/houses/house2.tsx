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
    mainPageImageXs: '/img/mainPageBanner/house-2-115m2/mainPageBanner-xs.jpg', // mainPageImageXs: 521x521
    mainPageImageMd: '/img/mainPageBanner/house-2-115m2/mainPageBanner-md.jpg', // mainPageImageMd: 1280x720
    mainPageImageLg: '/img/mainPageBanner/house-2-115m2/mainPageBanner-lg.jpg', // mainPageImageLg: 2160x1080
    blackHeadings: false,
    customHeadingHexColor: '#fff', // optional param
    customFeaturesBaseColor: '#fff', // optional param
    // customFeaturesPrimaryColor: '#ff0000', // optional param
    breadcrumbsColor: '#000', // optional
  },
  houseTypeInfoData: houseTypeInfoExampleMock,
  threeHousesRowData: ThreeHousesRowMock,
  chooseHouseData: ChooseHouseMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
