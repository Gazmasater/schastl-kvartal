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
  mapProviderLink: '/',
  mapProviderLinkText: 'Проложить маршрут',
  mapConfig: {
    center: [55.751574, 37.573856],
    zoom: 5,
  },
}
