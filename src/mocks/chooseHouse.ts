import { TChooseHouse } from '@localTypes/chooseHouse'

/*
imgUrl: 1280x922
thumb imgUrl: 539x337
*/

export const ChooseHouseMock: TChooseHouse = {
  imgUrl: '/img/mappedImage/image.jpg', // imgUrl: 1280x922
  housesCoords: {
    name: 'my-map',
    areas: [
      {
        id: 'house-1',
        shape: 'poly',
        fillColor: '#ff000061',
        preFillColor: '#ff000061',
        strokeColor: 'black',
        coords: [113, 611, 166, 565, 215, 585, 159, 629],
      },
      {
        id: 'house-2',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [162, 629, 216, 585, 272, 606, 215, 652],
      },
      {
        id: 'house-3',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [216, 652, 271, 606, 322, 625, 268, 674],
      },
      {
        id: 'house-4',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [269, 674, 320, 625, 370, 644, 316, 694],
      },
    ],
  },
  housesMetadata: {
    'house-1': {
      type: 'sold',
      linkUrl: '/houses/house1',
      statusText: 'Продано',
      text: 'УПС, этот коттедж уже продан! Наведи курсор на зеленый коттедж и выбери свободный',
    },
    'house-2': {
      type: 'available',
      linkUrl: '/houses/house2',
      statusText: 'Доступно',
      houseId: 'Коттедж №96',
      imgUrl: '/img/mappedImage/house-1-155m2/main.jpg', // 539x337
      imgAlt: '',
      title: 'BRILLIANTE',
      features: {
        first: {
          title: 'Площадь участка',
          value: '132.05 m2',
        },
        second: {
          title: 'Размер чего-то',
          value: '6.86 a',
        },
      },
    },
    'house-3': {
      type: 'available',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №96',
      imgUrl: '/img/mappedImage/house-2-115m2/main.jpg', // 539x337
      imgAlt: '',
      title: 'BRILLIANTE',
      features: {
        first: {
          title: 'Площадь участка',
          value: '132.05 m2',
        },
        second: {
          title: 'Размер чего-то',
          value: '6.86 a',
        },
      },
    },
  },
}
