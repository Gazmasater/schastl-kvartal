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
    subitemText: 'Модерн-100',
    headingFirst: 'Модерн-100',
    headingSecond: '',
    features: {
      first: {
        label: 'Общая площадь',
        value: '97 m2',
      },
      second: {
        label: 'Размер чего-то',
        value: '8 соток',
      },
    },
    mainPageImageXs: '/img/mainPageBanner/house-4-97m2/image.png', // mainPageImageXs: 521x521
    mainPageImageMd: '/img/mainPageBanner/house-4-97m2/image.png', // mainPageImageMd: 1280x720
    mainPageImageLg: '/img/mainPageBanner/house-4-97m2/image.png', // mainPageImageLg: 2160x1080
    blackHeadings: true, // optional param
    customHeadingHexColor: '#fff', // optional param
    customFeaturesBaseColor: '#fff', // optional param
  },
  houseTypeInfoData: {
    heading: 'Планировка',
    firstTabTitle: '1й этаж',
    firstTab: {
      imageUrl: '/img/houseTypeInfo/hause-4-97m2/97-1.jpg', // imageUrl: 1080x1080
      subtitle: 'Первый этаж',
      features: [
        {
          textInSpan: '1. Холл',
          middleText: '2.03 m',
          supText: '2',
        },
        {
          textInSpan: '2. Топочная',
          middleText: '2.21 m',
          supText: '2',
        },
        {
          textInSpan: '3. Кухня',
          middleText: '30.78 m',
          supText: '2',
        },
        {
          textInSpan: '4. Гостинная',
          middleText: '1.86 m',
          supText: '2',
        },
        {
          textInSpan: '5. Коридор',
          middleText: '1.86 m',
          supText: '2',
        },
        {
          textInSpan: '6. Спальня',
          middleText: '1.86 m',
          supText: '2',
        },
        {
          textInSpan: '7. Санузел',
          middleText: '1.86 m',
          supText: '2',
        },
        {
          textInSpan: '8. Спальня',
          middleText: '1.86 m',
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
      secondLinkUrl: ''
    }
  },
  threeHousesRowData: ThreeHousesRowMock,
  chooseHouseData: ChooseHouseMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
