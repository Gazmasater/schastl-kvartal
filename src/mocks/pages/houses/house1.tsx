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
    subitemText: 'Сканди',
    headingFirst: 'Сканди',
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
    mainPageImageXs: '/img/mainPageBanner/house-1-155m2/mainPageBanner-xs.jpg', // mainPageImageXs: 521x521
    mainPageImageMd: '/img/mainPageBanner/house-1-155m2/mainPageBanner-md.jpg', // mainPageImageMd: 1280x720
    mainPageImageLg: '/img/mainPageBanner/house-1-155m2/mainPageBanner-lg.jpg', // mainPageImageLg: 2160x1080
    customHeadingHexColor: '#000', // optional param
    customFeaturesBaseColor: '#000', // optional param
    breadcrumbsColor: '#000', // optional
  },
  houseTypeInfoData:   {
    heading: 'Планировка',
    firstTabTitle: '1й этаж',
    secondTabTitle: '2й этаж',
    firstTab: {
      imageUrl: '/img/houseTypeInfo/house-1-155m2/155-1.jpg', // imageUrl: 1080x1080
      subtitle: 'Первый этаж',
      features: [
        {
          textInSpan: '1. Холл',
          middleText: '2.03 m2',
          supText: '2',
        },
        {
          textInSpan: '2. Гардеробная',
          middleText: '4 m2',
          supText: '2',
        },
        {
          textInSpan: '3. Санузел',
          middleText: '4 m2',
          supText: '2',
        },
        {
          textInSpan: '4. Кухня',
          middleText: '20 m2',
          supText: '2',
        },
        {
          textInSpan: '5. Гостиная',
          middleText: '36,5 m2',
          supText: '2',
        },
      ],
      firstLinkText: 'Контакты',
      firstLinkUrl: '/contacts',
      secondLinkText: 'На просмотр',
      secondLinkUrl: '#callback',
    },
    secondTab: {
      imageUrl: '/img/houseTypeInfo/house-1-155m2/155-2.jpg', // imageUrl: 1080x1080
      subtitle: 'Второй этаж',
      features: [
        {
          textInSpan: '6. Коридор',
          middleText: '5.5 m2',
          supText: '2',
        },
        {
          textInSpan: '7. Спальня',
          middleText: '6.96 m2',
          supText: '2',
        },
        {
          textInSpan: '8. Спальня',
          middleText: '14.18 m2',
          supText: '2',
        },
        {
          textInSpan: '9. Спальня',
          middleText: '9.55 m2',
          supText: '2',
        },
        {
          textInSpan: '10. Гардеробная',
          middleText: '4.92 m2',
          supText: '2',
        },
        {
          textInSpan: '11. Санузел',
          middleText: '4.92 m2',
          supText: '2',
        },
      ],
      firstLinkText: 'Контакты',
      firstLinkUrl: '/contacts',
      secondLinkText: 'На просмотр',
      secondLinkUrl: '#callback',
    },
  }
,
  threeHousesRowData: ThreeHousesRowMock,
  chooseHouseData: ChooseHouseMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
