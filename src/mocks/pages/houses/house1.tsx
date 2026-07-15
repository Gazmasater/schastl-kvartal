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

export const house1PageMock: THousePage = {
  meta: Metas.house1,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: {
    mainPageLink: '/',
    mainPageLabel: 'Главная страница',
    separator: '/',
    subitemText: 'Сканди',
    headingFirst: 'Дом «Сканди» 155 м² в Липецком районе',
    headingSecond: '',
    features: {
      first: {
        label: 'Общая площадь',
        value: '155 m',
      },
      second: {
        label: 'Размер участка',
        value: '8 соток',
      },
    },
    mainPageImageXs: '/img/mainPageBanner/house-1-155m2/mainPageBanner-xs.webp', // mainPageImageXs: 521x521
    mainPageImageMd: '/img/mainPageBanner/house-1-155m2/mainPageBanner-md.webp', // mainPageImageMd: 1280x720
    mainPageImageLg: '/img/mainPageBanner/house-1-155m2/mainPageBanner-lg.webp', // mainPageImageLg: 2160x1080
    customHeadingHexColor: 'rgba(132, 80, 100)', // цвет заголовка
    customFeaturesBaseColor: 'rgba(132, 80, 100)', // optional param
    breadcrumbsColor: 'rgba(10, 0, 0)', // цвет хл крошек
    customFeaturesPrimaryColor: 'rgba(132, 80, 100)',
    darkenBgColor: 'rgba(255, 255, 255, 0)',
  },
  houseTypeInfoData: {
    heading: 'Планировка',
    firstTabTitle: '1й этаж',
    secondTabTitle: '2й этаж',
    firstTab: {
      imageUrl: '/img/houseTypeInfo/house-1-155m2/155-1.jpg', // imageUrl: 1080x1080
      subtitle: 'Первый этаж',
      features: [
        {
          textInSpan: '1. Холл',
          middleText: '2.03 m',
          supText: '2',
        },
        {
          textInSpan: '2. Гардеробная',
          middleText: '4 m',
          supText: '2',
        },
        {
          textInSpan: '3. Санузел',
          middleText: '4 m',
          supText: '2',
        },
        {
          textInSpan: '4. Кухня',
          middleText: '20 m',
          supText: '2',
        },
        {
          textInSpan: '5. Гостиная',
          middleText: '36.5 m',
          supText: '2',
        },
        {
          textInSpan: '6. Коридор',
          middleText: '5.5 m',
          supText: '2',
        },
        {
          textInSpan: '7. Лестница',
          middleText: '5.5 m',
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
          textInSpan: '8. Холл',
          middleText: '11 m',
          supText: '2',
        },
        {
          textInSpan: '9. Спальня',
          middleText: '13.5 m',
          supText: '2',
        },
        {
          textInSpan: '10. Спальня',
          middleText: '17 m',
          supText: '2',
        },
        {
          textInSpan: '11. Спальня',
          middleText: '24 m',
          supText: '2',
        },
        {
          textInSpan: '12. Санузел',
          middleText: '7 m',
          supText: '2',
        },
        {
          textInSpan: '13. Гардеробная',
          middleText: '7 m',
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
