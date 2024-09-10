import { THouseTypeInfo } from '@localTypes/houseTypeInfo'

/* imageUrl: 792x1080 */

export const houseTypeInfoExampleMock: THouseTypeInfo = {
  heading: 'Спецификация дома',
  firstTabTitle: '1й этаж',
  secondTabTitle: '2й этаж',
  firstTab: {
    imageUrl: '/img/houseTypeInfo/house-1-155m2/155-1.jpg', // imageUrl: 792x1080
    subtitle: 'Первый этаж',
    features: [
      {
        textInSpan: '101. Тамбур',
        middleText: '2.03 m',
        supText: '2',
      },
      {
        textInSpan: '102. Коридор',
        middleText: '2.21 m',
        supText: '2',
      },
      {
        textInSpan: '104. Кухня',
        middleText: '30.78 m',
        supText: '2',
      },
      {
        textInSpan: '105. Чулан',
        middleText: '1.86 m',
        supText: '2',
      },
    ],
    firstLinkText: 'Первая ссылка',
    firstLinkUrl: '/contacts',
    secondLinkText: 'Записаться на просмотр',
    secondLinkUrl: '#callback',
  },
  secondTab: {
    imageUrl: '/img/houseTypeInfo/house-1-155m2/155-2.jpg', // imageUrl: 792x1080
    subtitle: 'Второй этаж',
    features: [
      {
        textInSpan: '201. Коридор',
        middleText: '4.18 m',
        supText: '2',
      },
      {
        textInSpan: '202. Ванная комната',
        middleText: '6.96 m',
        supText: '2',
      },
      {
        textInSpan: '203. Спальня',
        middleText: '14.18 m',
        supText: '2',
      },
      {
        textInSpan: '204. Спальня',
        middleText: '9.55 m',
        supText: '2',
      },
      {
        textInSpan: '205. Гардеробна',
        middleText: '4.92 m',
        supText: '2',
      },
      {
        textInSpan: '206. Что-то',
        middleText: '4.92 m',
        supText: '2',
      },
    ],
    firstLinkText: 'Первая ссылка',
    firstLinkUrl: '/contacts',
    secondLinkText: 'Записаться на просмотр',
    secondLinkUrl: '#callback',
  },
}
