import { TMainPageHeader } from '@localTypes/mainPageHeader'

/*
mainPageImageXs: 521x521
mainPageImageMd: 1280x720
mainPageImageLg: 2160x1080
*/

export const MainPageHeaderMock: TMainPageHeader = {
  mainPageLink: '/',
  mainPageLabel: 'Главная страница',
  separator: '/',
  subitemText: 'Счастливый квартал',
  headingFirst: 'СК "Лазурный"',
  // TODO красивые курсивные буквы
  // убрать акцент от СК "Лазурный" в пользу текста ниже (другим цветом или как-нибудь еще)
  // Стройте с нами Счастливый Квартал (убрать апперкейс *оригинал)
  headingSecond: 'Стройте с нами Счастливый Квартал!',
  headingSecondProps: {
    fontFamily: 'Arial',
    fontWeightDefault: 'bold',
  },
  mainPageImageXs: '/img/mainPageBanner/mainPageBanner-xs.jpg', // mainPageImageXs: 521x521
  mainPageImageMd: '/img/mainPageBanner/mainPageBanner-md.jpg', // mainPageImageMd: 1280x720
  mainPageImageLg: '/img/mainPageBanner/mainPageBanner-lg.jpg', // mainPageImageLg: 2160x1080
  customHeadingHexColor: 'rgba(132, 80, 100)', // цвет заголовка
  customFeaturesBaseColor: '#ffffff', // optional param
  breadcrumbsColor: 'rgba(10, 0, 0)', // цвет хл крошек
  customFeaturesPrimaryColor: '#0000000',
  darkenBgColor: 'rgba(255, 255, 255, 0)',
}
