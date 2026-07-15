import { TFooter } from '@localTypes/footer'

export const FooterMock: TFooter = {
  imageUrl: '/img/logo-default.svg',
  imageAlt: 'Логотип',
  imageTitle: 'Логотип',
  imageLinkUrl: '/',
  copyrightText: 'ИП Путилина Светлана Викторовна ИНН 482413386601',
  // socialLinks: {
  //   youtube: {
  //     title: 'Youtube канал',
  //     url: '/',
  //   },
  //   facebook: {
  //     title: 'Facebook паблик',
  //     url: '/',
  //   },
  //   insta: {
  //     title: 'Instagram канал',
  //     url: '/',
  //   },
  // },
  footerLinks: [
    {
      label: 'Главная',
      url: '/',
    },
    // {
    //   label: 'Проекты',
    //   url: '/',
    // },
    {
      label: 'Контакты',
      url: '/contacts',
    },
    {
      label: 'Дома рядом с «Парковыми Кварталами»',
      url: '/doma-ryadom-s-parkovymi-kvartalami',
    },
    {
      label: 'Политика обработки персональных данных',
      url: '/pdn',
    },
  ],
}
