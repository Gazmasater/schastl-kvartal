import { THousePage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'
import { NavMock } from '@mocks/nav'
import { FooterMock } from '@mocks/footer'
// import { houseTypeInfoExampleMock } from '@mocks/houseTypeInfos'
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
    subitemText: 'Барнхаус',
    headingFirst: 'Дом «Барнхаус» 115 м² в Липецком районе',
    headingSecond: '',
    features: {
      first: {
        label: 'Общая площадь',
        value: '115 m',
      },
      second: {
        label: 'Размер участка',
        value: '8 соток',
      },
    },
    mainPageImageXs: '/img/mainPageBanner/house-2-115m2/mainPageBanner-xs.webp', // mainPageImageXs: 521x521
    mainPageImageMd: '/img/mainPageBanner/house-2-115m2/mainPageBanner-md.webp', // mainPageImageMd: 1280x720
    mainPageImageLg: '/img/mainPageBanner/house-2-115m2/mainPageBanner-lg.webp', // mainPageImageLg: 2160x1080
    blackHeadings: false,
    customHeadingHexColor: '#fff', // optional param
    customFeaturesBaseColor: '#fff', // optional param
    // customFeaturesPrimaryColor: '#ff0000', // optional param
    breadcrumbsColor: '#000', // optional
  },
  houseTypeInfoData: {
    heading: 'Планировка',
    firstTabTitle: '1й этаж',
    firstTab: {
      imageUrl: '/img/houseTypeInfo/house-2-115m2/115-1.jpg', // imageUrl: 1080x1080
      subtitle: 'Первый этаж',
      features: [
        {
          textInSpan: '1. Кухня',
          middleText: '15 m',
          supText: '2',
        },
        {
          textInSpan: '2. Гостиная',
          middleText: '32 m',
          supText: '2',
        },
        {
          textInSpan: '3. Спальня',
          middleText: '14 m',
          supText: '2',
        },
        {
          textInSpan: '4. Спальня',
          middleText: '17 m',
          supText: '2',
        },
        {
          textInSpan: '5. Гордиробная',
          middleText: '8 m',
          supText: '2',
        },
        {
          textInSpan: '6. Санузел',
          middleText: '6.5 m',
          supText: '2',
        },
        {
          textInSpan: '7. Холл',
          middleText: '5.1 m',
          supText: '2',
        },
        {
          textInSpan: '8. Топочная',
          middleText: '5.7 m',
          supText: '2',
        },
        {
          textInSpan: '9. Коридор',
          middleText: '8.7 m',
          supText: '2',
        },
        {
          textInSpan: '10. Терраса',
          middleText: '16 m',
          supText: '2',
        },
      ],
      firstLinkText: 'Контакты',
      firstLinkUrl: '/contacts',
      secondLinkText: 'На просмотр',
      secondLinkUrl: '#callback',
    },
    secondTabTitle: '',
    secondTab: {
      imageUrl: '',
      subtitle: '',
      features: [],
      firstLinkText: '',
      firstLinkUrl: '',
      secondLinkText: '',
      secondLinkUrl: '',
    },
  },
  threeHousesRowData: ThreeHousesRowMock,
  chooseHouseData: ChooseHouseMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
