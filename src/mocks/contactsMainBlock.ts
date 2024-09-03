import { TContactsMainBlock } from '@localTypes/contactsMainBlock'

/*
imgUrl: 898x677
*/

export const ContactsMainBlockMock: TContactsMainBlock = {
  mainHeading: 'ЖК Такой-то, главный офис продаж',
  addr: 'Адрес такой-то',
  phoneHeading: 'Телефоны',
  telegramLink: '/',
  phone: [
    {
      url: 'tel:+7111',
      tel: '+7111',
    },
    {
      url: 'tel:+7112',
      tel: '+7112',
    },
    {
      url: 'tel:+7113',
      tel: '+7113',
    },
  ],
  workHours: 'Ежедневно 10:00 - 17:00',
  mailtoLink: 'mail:foo@local.local',
  mailtoText: 'foo@local.local',
  mapProviderLink:
    'https://yandex.ru/maps/9/lipetsk/?ll=39.469925%2C52.514550&mode=routes&rtext=~52.513711%2C39.468675&rtt=auto&ruri=~&z=18',
  mapProviderText: 'Проложить маршрут',
  imgUrl: '/img/bigContacts/image.jpg', // 898x677
  imgAlt: '',
}
