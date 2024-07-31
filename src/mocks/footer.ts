import { TFooterData } from '@localTypes/footerData'

export const FooterMock: TFooterData = {
  imageUrl: '/img/logo-default.svg',
  imageAlt: 'Логотип',
  imageTitle: 'Название',
  imageLinkUrl: '/',
  copyrightText: 'Copyright Застройщик',
  socialLinks: {
    youtube: {
      title: 'Youtube канал',
      url: '/',
    },
    facebook: {
      title: 'Facebook паблик',
      url: '/',
    },
    insta: {
      title: 'Instagram канал',
      url: '/',
    },
  },
  footerLinks: [
    {
      label: 'Главная',
      url: '/',
    },
    {
      label: 'Проекты',
      url: '/',
    },
    {
      label: 'Контакты',
      url: '/',
    },
  ],
}
