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

export const house3PageMock: THousePage = {
  meta: Metas.house3,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: {
    mainPageLink: '/',
    mainPageLabel: 'Главная страница',
    separator: '/',
    subitemText: 'Модерн-140',
    headingFirst: 'Дом «Модерн-140» 140 м² в Липецком районе',
    headingSecond: '',
    features: {
      first: {
        label: 'Площадь дома',
        value: '140 м²',
      },
      second: {
        label: 'Участок',
        value: '8 соток',
      },
    },
    mainPageImageXs: '/img/mainPageBanner/house-3-140m2/mainPageBanner-xs.webp', // mainPageImageXs: 521x521
    mainPageImageMd: '/img/mainPageBanner/house-3-140m2/mainPageBanner-md.webp', // mainPageImageMd: 1280x720
    mainPageImageLg: '/img/mainPageBanner/house-3-140m2/mainPageBanner-lg.webp', // mainPageImageLg: 2160x1080
    blackHeadings: true, // optional param
    customHeadingHexColor: '#fff', // optional param
    customFeaturesBaseColor: '#0000', // optional param
  },
  houseTypeInfoData: {
    heading: 'Планировка',
    firstTabTitle: '1й этаж',
    firstTab: {
      imageUrl: '/img/houseTypeInfo/house-3-140m2/140-1.jpg', // imageUrl: 1080x1080
      subtitle: 'Первый этаж',
      features: [
        {
          textInSpan: '1. Спальня',
          middleText: '18 m',
          supText: '2',
        },
        {
          textInSpan: '2. Санузел',
          middleText: '6 m',
          supText: '2',
        },
        {
          textInSpan: '3. Спальня',
          middleText: '16 m',
          supText: '2',
        },
        {
          textInSpan: '4. Топочная',
          middleText: '6 m',
          supText: '2',
        },
        {
          textInSpan: '5. Санузел',
          middleText: '3 m',
          supText: '2',
        },
        {
          textInSpan: '6. Коридор',
          middleText: '10 m',
          supText: '2',
        },
        {
          textInSpan: '7. Спальня',
          middleText: '16 m',
          supText: '2',
        },
        {
          textInSpan: '8. Холл',
          middleText: '10 m',
          supText: '2',
        },
        {
          textInSpan: '9. Кухня',
          middleText: '20 m',
          supText: '2',
        },
        {
          textInSpan: '10. Гостинная',
          middleText: '25 m',
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
