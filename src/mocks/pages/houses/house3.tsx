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

export const house3PageMock: THousePage = {
  meta: Metas.house3,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: {
    mainPageLink: '/',
    mainPageLabel: 'Главная страница',
    separator: '/',
    subitemText: 'Модерн-140',
    headingFirst: 'Модерн-140',
    headingSecond: '',
    features: {
      first: {
        label: 'Общая площадь',
        value: '140 m2',
      },
      second: {
        label: 'Размер чего-то',
        value: '8 соток',
      },
    },
    mainPageImageXs: '/img/mainPageBanner/house-3-140m2/main.jpg', // mainPageImageXs: 521x521
    mainPageImageMd: '/img/mainPageBanner/house-3-140m2/main.jpg', // mainPageImageMd: 1280x720
    mainPageImageLg: '/img/mainPageBanner/house-3-140m2/main.jpg', // mainPageImageLg: 2160x1080
    blackHeadings: true, // optional param
    customHeadingHexColor: '#fff', // optional param
    customFeaturesBaseColor: '#fff', // optional param
  },
  houseTypeInfoData: {
    heading: 'Планировка',
    firstTabTitle: '1й этаж',
    firstTab: {
      imageUrl: '/img/houseTypeInfo/hause-3-140m2/140-1.jpg', // imageUrl: 1080x1080
      subtitle: 'Первый этаж',
      features: [
        {
          textInSpan: '1. Кухня',
          middleText: '2.03 m',
          supText: '2',
        },
        {
          textInSpan: '2. Гостиная',
          middleText: '2.21 m',
          supText: '2',
        },
        {
          textInSpan: '3. Спальня',
          middleText: '30.78 m',
          supText: '2',
        },
        {
          textInSpan: '4. Спальня',
          middleText: '1.86 m',
          supText: '2',
        },
        {
          textInSpan: '5. Гордиробная',
          middleText: '1.86 m',
          supText: '2',
        },
        {
          textInSpan: '6. Санузел',
          middleText: '1.86 m',
          supText: '2',
        },
        {
          textInSpan: '7. Холл',
          middleText: '1.86 m',
          supText: '2',
        },
        {
          textInSpan: '8. Топочная',
          middleText: '1.86 m',
          supText: '2',
        },
        {
          textInSpan: '9. Коридор',
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
