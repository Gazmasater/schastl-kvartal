import { Fragment } from 'react'
import { THouseTypeInfo } from '@localTypes/houseTypeInfo'

export const houseTypeInfoExampleMock: THouseTypeInfo = {
  heading: 'Функциональные значения',
  firstTabTitle: '1й этаж',
  secondTabTitle: '2й этаж',
  firstTab: {
    imageUrl: '/img/houseTypeInfo/houseTypeInfoExample1.jpg',
    subtitle: 'Первый этаж',
    features: [
      <Fragment key="1">
        <span>101. Тамбур</span> 2.03 m<sup>2</sup>
      </Fragment>,
      <Fragment key="2">
        <span>102. Коридор</span> 2.21 m<sup>2</sup>
      </Fragment>,
      <Fragment key="3">
        <span>104. Кухня-вітальна</span> 30.78 m<sup>2</sup>
      </Fragment>,
      <Fragment key="4">
        <span>105. Комора</span> 1.86 m<sup>2</sup>
      </Fragment>,
    ],
    firstLinkText: 'Первая ссылка',
    firstLinkUrl: '/contacts',
    secondLinkText: 'Записаться на просмотр',
    secondLinkUrl: '#callback',
  },
  secondTab: {
    imageUrl: '/img/houseTypeInfo/houseTypeInfoExample2.jpg',
    subtitle: 'Второй этаж',
    features: [
      <Fragment key="1">
        <span>201. Коридор</span> 4.18 m<sup>2</sup>
      </Fragment>,
      <Fragment key="2">
        <span>202. Ванна кімната</span> 6.96 m<sup>2</sup>
      </Fragment>,
      <Fragment key="3">
        <span>203. Спальня</span> 14.18 m<sup>2</sup>
      </Fragment>,
      <Fragment key="4">
        <span>204. Спальня</span> 9.55 m<sup>2</sup>
      </Fragment>,
      <Fragment key="4">
        <span>205. Гардеробна</span> 3.72 m<sup>2</sup>
      </Fragment>,
      <Fragment key="4">
        <span>206. Сходи</span> 4.92 m<sup>2</sup>
      </Fragment>,
    ],
    firstLinkText: 'Первая ссылка',
    firstLinkUrl: '/contacts',
    secondLinkText: 'Записаться на просмотр',
    secondLinkUrl: '#callback',
  },
}
