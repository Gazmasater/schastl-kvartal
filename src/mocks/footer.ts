import { TFooter } from '@localTypes/footer'

export const FooterMock: TFooter = {
  imageUrl: '/img/logo-default.svg',
  imageAlt: 'Логотип',
  imageTitle: 'Название',
  imageLinkUrl: '/',
  copyrightText: 'ИП приладышев',
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
