import { TFooterContacts } from '@localTypes/footerContacts'

export const FooterContactsMock: TFooterContacts = {
  heading: 'Контакты',
  addrSubheading: 'Адрес',
  addr: 'Липецкая область, Липецкий район, с. Ленино, ул. Перспективная',
  phonesSubheading: 'Телефоны для заявки',
  phones: [
    {
      url: 'tel:8(4742) 39-00-16',
      text: '8(4742) 39-00-16',
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
