import { TNav } from '@localTypes/nav'

export const NavMock: TNav = {
  title: 'Главная страница',
  url: '/',
  logoUrl: '/img/logo-default.svg',
  logoUrlWhite: '/img/logo-white.svg',
  altText: 'Логотип',
  phone: '8 (4742) 39-00-16',
  phoneLink: 'tel:+74742390016',
  navLinks: [
    {
      label: 'Главная',
      url: '/',
    },
    {
      label: 'Дома',
      url: '/doma-v-lipetskom-rayone',
    },
    {
      label: 'Галерея',
      url: '/gallery',
    },
    {
      label: 'Контакты',
      url: '/contacts',
    },
  ],
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
}
