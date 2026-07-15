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

export const house4PageMock: THousePage = {
  meta: Metas.house4,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: {
    mainPageLink: '/',
    mainPageLabel: 'Главная страница',
    separator: '/',
    subitemText: 'Модерн-100',
    headingFirst: 'Дом «Модерн-100» 97 м² в Липецком районе',
    headingSecond: '',
    features: {
      first: {
        label: 'Площадь дома',
        value: '97 м²',
      },
      second: {
        label: 'Участок',
        value: '8 соток',
      },
    },
    mainPageImageXs: '/img/mainPageBanner/house-4-97m2/mainPageBanner-xs.webp', // mainPageImageXs: 521x521
    mainPageImageMd: '/img/mainPageBanner/house-4-97m2/mainPageBanner-md.webp', // mainPageImageMd: 1280x720
    mainPageImageLg: '/img/mainPageBanner/house-4-97m2/mainPageBanner-lg.webp', // mainPageImageLg: 2160x1080
    blackHeadings: true, // optional param
    customHeadingHexColor: '#fff', // optional param
    customFeaturesBaseColor: '#fff', // optional param
  },
  houseTypeInfoData: {
    heading: 'Планировка',
    firstTabTitle: '1й вариант',
    firstTab: {
      imageUrl: '/img/houseTypeInfo/house-4-97m2/97-1.jpg', // imageUrl: 1080x1080
      subtitle: 'Первый этаж',
      features: [
        {
          textInSpan: '1. Холл',
          middleText: '5 m',
          supText: '2',
        },
        {
          textInSpan: '2. Топочная',
          middleText: '8 m',
          supText: '2',
        },
        {
          textInSpan: '3. Кухня',
          middleText: '10 m',
          supText: '2',
        },
        {
          textInSpan: '4. Гостиная',
          middleText: '34 m',
          supText: '2',
        },
        {
          textInSpan: '5. Коридор',
          middleText: '8 m',
          supText: '2',
        },
        {
          textInSpan: '6. Спальня',
          middleText: '13 m',
          supText: '2',
        },
        {
          textInSpan: '7. Санузел',
          middleText: '6 m',
          supText: '2',
        },
        {
          textInSpan: '8. Спальня',
          middleText: '16 m',
          supText: '2',
        },
      ],
      firstLinkText: 'Контакты',
      firstLinkUrl: '/contacts',
      secondLinkText: 'На просмотр',
      secondLinkUrl: '#callback',
    },
    secondTabTitle: '2й вариант',
    secondTab: {
      imageUrl: '/img/houseTypeInfo/house-4-97m2/97-2.jpg', // imageUrl: 1080x1080
      subtitle: 'Первый этаж',
      features: [
        {
          textInSpan: '1. Холл',
          middleText: '8 m',
          supText: '2',
        },
        {
          textInSpan: '2. Топочная',
          middleText: '4 m',
          supText: '2',
        },
        {
          textInSpan: '3. Спальня',
          middleText: '11 m',
          supText: '2',
        },
        {
          textInSpan: '4. Санузел',
          middleText: '2 m',
          supText: '2',
        },
        {
          textInSpan: '5. Кухня-Гостиная',
          middleText: '32 m',
          supText: '2',
        },
        {
          textInSpan: '6. Спальня',
          middleText: '13 m',
          supText: '2',
        },
        {
          textInSpan: '7. Санузел',
          middleText: '6 m',
          supText: '2',
        },
        {
          textInSpan: '8. Спальня',
          middleText: '16 m',
          supText: '2',
        },
        {
          textInSpan: '9. Коридор',
          middleText: '8 m',
          supText: '2',
        },
      ],
      firstLinkText: 'Контакты',
      firstLinkUrl: '/contacts',
      secondLinkText: 'На просмотр',
      secondLinkUrl: '#callback',
    },
  },
  threeHousesRowData: ThreeHousesRowMock,
  chooseHouseData: ChooseHouseMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
