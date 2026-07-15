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
  showBreadcrumbs: false,
  headingFirst: 'Купить готовый дом в Липецком районе',
  // TODO красивые курсивные буквы
  // убрать акцент от СК "Лазурный" в пользу текста ниже (другим цветом или как-нибудь еще)
  // Стройте с нами Счастливый Квартал (убрать апперкейс *оригинал)
  headingSecond: 'С участком от 8,5 млн ₽ · с. Ленино, 6 км от Липецка',
  headingSecondProps: {
    fontFamily: 'Arial',
    fontWeightDefault: 'bold',
  },
  mainPageImageXs: '/img/mainPageBanner/mainPageBanner-xs.webp', // mainPageImageXs: 720x720
  mainPageImageMd: '/img/mainPageBanner/mainPageBanner-md.webp', // mainPageImageMd: 1280x721
  mainPageImageLg: '/img/mainPageBanner/mainPageBanner-lg.jpg', // mainPageImageLg: 2160x1080
  customHeadingHexColor: '#ffffff', // цвет заголовка
  customFeaturesBaseColor: '#ffffff', // optional param
  breadcrumbsColor: 'rgba(10, 0, 0)', // цвет хл крошек
  darkenBgColor: 'rgba(0, 0, 0, 0.55)',
}
