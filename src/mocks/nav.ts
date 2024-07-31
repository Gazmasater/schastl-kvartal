import { TNavData } from '@localTypes/navData'

export const NavMock: TNavData = {
  title: 'Главная страница',
  url: '/',
  logoUrl: '/img/logo-default.svg',
  logoUrlWhite: '/img/logo-white.svg',
  altText: 'Логотип',
  phone: '+7 1112223344',
  phoneLink: 'tel:+71112223344',
  navLinks: [
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
}
