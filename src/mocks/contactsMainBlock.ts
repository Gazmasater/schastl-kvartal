import { TContactsMainBlock } from '@localTypes/contactsMainBlock'

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
  mapProviderLink: '/',
  mapProviderText: 'Проложить маршрут',
  imgUrl: '/img/bigContacts/image.jpg',
  imgAlt: '',
}
