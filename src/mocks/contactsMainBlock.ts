import { TContactsMainBlock } from '@localTypes/contactsMainBlock'

/*
imgUrl: 898x677
*/

export const ContactsMainBlockMock: TContactsMainBlock = {
  mainHeading: 'ЖК "Лазурный", Счастливый квартал',
  addr: 'Адрес : Липецкая область, Липецкий район, с. Ленино, ул. Перспективная',
  phoneHeading: 'Телефон',
  telegramLink: '/',
  phone: [
    {
      url: 'tel:8(4742) 39-00-16',
      tel: '8(4742) 39-00-16',
    },
  ],
  workHours: 'Ежедневно 10:00 - 19:00',
  mailtoLink: 'mail:sw_putilina@mail.ru',
  mailtoText: 'sw_putilina@mail.ru',
  mapProviderLink:
    'https://yandex.ru/maps/9/lipetsk/?ll=39.469925%2C52.514550&mode=routes&rtext=~52.513711%2C39.468675&rtt=auto&ruri=~&z=18',
  mapProviderText: 'Проложить маршрут',
  imgUrl: '/img/bigContacts/image.png', // 898x677
  imgAlt: '',
}
