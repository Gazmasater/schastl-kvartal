import { TFooterContacts } from '@localTypes/footerContacts'

export const FooterContactsMock: TFooterContacts = {
  heading: 'Контакты',
  addrSubheading: 'Адрес офиса продаж',
  addr: 'Тут адрес',
  phonesSubheading: 'Телефоны для заявки',
  phones: [
    {
      url: 'tel:+7111',
      text: '+7111',
    },
    {
      url: 'tel:+7112',
      text: '+7112',
    },
    {
      url: 'tel:+7113',
      text: '+7113',
    },
  ],
  mapProviderLink:
    'https://yandex.ru/maps/9/lipetsk/?ll=39.469925%2C52.514550&mode=routes&rtext=~52.513711%2C39.468675&rtt=auto&ruri=~&z=18',
  mapProviderLinkText: 'Проложить маршрут',
  mapConfig: {
    center: [52.586018, 39.520206],
    zoom: 10,
  },
  mapPlaceMarkCoords: [52.513774, 39.468615],
}
