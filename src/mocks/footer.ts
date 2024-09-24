import { TFooter } from '@localTypes/footer'

export const FooterMock: TFooter = {
  imageUrl: '/img/logo-default.svg',
  imageAlt: 'Логотип',
  imageTitle: 'Логотип',
  imageLinkUrl: '/',
  copyrightText: 'ИП Приладышев Владимир Юрьевич ИНН 480224650506',
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
  ],
}
