import { TChooseHouse } from '@localTypes/chooseHouse'

/*
imgUrl: 1520x922
thumb imgUrl: 539x337
*/

const housePolyRed = {
  fillColor: 'rgba(255, 0, 0, 0.5)',
  preFillColor: 'rgba(255, 0, 0, 0.5)',
  strokeColor: 'black',
}

const housePolyGreen = {
  fillColor: 'rgba(33, 133, 0, 0.5)',
  preFillColor: 'rgba(33, 133, 0, 0.5)',
  strokeColor: 'black',
}

const housePolyOrange = {
  fillColor: 'rgba(255, 128, 0, 0.45)',
  preFillColor: 'rgba(255, 128, 0, 0.45)',
  strokeColor: 'black',
}

// const housePolyDone = {
//   fillColor: '#00800052',
//   preFillColor: '#00800026',
//   strokeColor: 'black',
// }

export const ChooseHouseMock: TChooseHouse = {
  imgUrl: '/img/mappedImage/image.png', // imgUrl: 1520x922
  housesCoords: {
    name: 'my-map',
    areas: [
      {
        id: 'house-1',
        shape: 'poly',
        ...housePolyRed,
        coords: [589.25, 539, 642.5, 492.75, 680, 507, 626.5, 553.5],
      },
      {
        id: 'house-2',
        shape: 'poly',
        ...housePolyGreen,
        coords: [552, 524.5, 605, 478.5, 642.5, 492.75, 589.25, 539],
      },
      {
        id: 'house-3',
        shape: 'poly',
        ...housePolyGreen,
        coords: [515, 509.75, 567.5, 464.25, 605, 478.5, 552.5, 524],
      },
      {
        id: 'house-4',
        shape: 'poly',
        ...housePolyRed,
        coords: [477.5, 495.5, 530, 450, 567.5, 464.25, 515, 509.75],
      },
      {
        id: 'house-5',
        shape: 'poly',
        ...housePolyGreen,
        coords: [438.5, 481.875, 485.5, 431.75, 530, 450, 477.5, 495.5],
      },
      {
        id: 'house-6',
        shape: 'poly',
        ...housePolyOrange,
        coords: [403, 468.25, 446, 416.5, 485.5, 431.75, 438.5, 481.875],
      },
      {
        id: 'house-7',
        shape: 'poly',
        ...housePolyGreen,
        coords: [371.5, 456.25, 412.5, 404.25, 446, 416.5, 403, 468.25],
      },
      {
        id: 'house-8',
        shape: 'poly',
        ...housePolyGreen,
        coords: [332, 441, 367, 386, 413, 404.25, 371.5, 456.25],
      },
      {
        id: 'house-9',
        shape: 'poly',
        ...housePolyGreen,
        coords: [297, 496, 332, 441, 371.5, 456.25, 328.5, 508],
      },
      {
        id: 'house-10',
        shape: 'poly',
        ...housePolyGreen,
        coords: [328.5, 508, 371.5, 456.25, 403, 468.25, 360, 520],
      },
      {
        id: 'house-11',
        shape: 'poly',
        ...housePolyGreen,
        coords: [360, 520, 403, 468.25, 438.5, 481.875, 391.5, 532],
      },
      {
        id: 'house-12',
        shape: 'poly',
        ...housePolyGreen,
        coords: [391.5, 532, 438.5, 481.875, 477.5, 495.5, 425, 543],
      },
      {
        id: 'house-13',
        shape: 'poly',
        ...housePolyGreen,
        coords: [425, 543, 477.5, 495.5, 515, 509.75, 462, 555.75],
      },
      {
        id: 'house-14',
        shape: 'poly',
        ...housePolyRed,
        coords: [462, 555.75, 515, 509.75, 552.5, 524, 499, 570.5],
      },
      {
        id: 'house-15',
        shape: 'poly',
        ...housePolyRed,
        coords: [499, 570.5, 552, 524.5, 589.25, 539, 536, 585.25],
      },
      {
        id: 'house-16',
        shape: 'poly',
        ...housePolyGreen,
        coords: [536, 585.25, 589.25, 539, 626.5, 553.5, 573, 600],
      },
      {
        id: 'house-17',
        shape: 'poly',
        ...housePolyGreen,
        coords: [471.625, 648.375, 530.25, 594, 567, 608, 508.5, 663],
      },
      {
        id: 'house-18',
        shape: 'poly',
        ...housePolyGreen,
        coords: [434.75, 633.75, 493.5, 580, 530.25, 594, 471.625, 648.375],
      },
      {
        id: 'house-19',
        shape: 'poly',
        ...housePolyGreen,
        coords: [397.75, 618.5, 456.75, 566, 493.5, 580, 434.5, 632.5],
      },
      {
        id: 'house-20',
        shape: 'poly',
        ...housePolyGreen,
        coords: [361, 604.5, 420, 552, 456.75, 566, 397.75, 618.5],
      },
      {
        id: 'house-21',
        shape: 'poly',
        ...housePolyRed,
        coords: [327.5, 592.5, 384, 540, 420, 552, 361, 604.5],
      },
      {
        id: 'house-22',
        shape: 'poly',
        ...housePolyOrange,
        coords: [291.5, 578.5, 345, 525, 384, 540, 327.5, 592.5],
      },
      {
        id: 'house-23',
        shape: 'poly',
        ...housePolyOrange,
        coords: [255.5, 564.5, 292, 507, 345, 525, 291.5, 578.5],
      },
      {
        id: 'house-24',
        shape: 'poly',
        ...housePolyOrange,
        coords: [219, 622, 255.5, 564.5, 291.5, 578.5, 248.5, 634.75],
      },
      {
        id: 'house-25',
        shape: 'poly',
        ...housePolyOrange,
        coords: [248.5, 634.75, 291.5, 578.5, 327.5, 592.5, 278, 647.5],
      },
      {
        id: 'house-26',
        shape: 'poly',
        ...housePolyGreen,
        coords: [278, 647.5, 327.5, 592.5, 361, 604.5, 302, 657],
      },
      {
        id: 'house-27',
        shape: 'poly',
        ...housePolyGreen,
        coords: [302, 657, 361, 604.5, 397.75, 618.5, 339, 672.25],
      },
      {
        id: 'house-28',
        shape: 'poly',
        ...housePolyGreen,
        coords: [339, 672.25, 397.75, 618.5, 434.5, 632.5, 376, 687.5],
      },
      {
        id: 'house-29',
        shape: 'poly',
        ...housePolyGreen,
        coords: [376, 687.5, 434.75, 633.75, 471.625, 648.375, 413, 702.75],
      },
      {
        id: 'house-30',
        shape: 'poly',
        ...housePolyGreen,
        coords: [413, 702.75, 471.625, 648.375, 508.5, 663, 450, 718],
      },
    ],
  },
  housesMetadata: {
    'house-1': {
      statusColor: '#f00f',
      linkUrl: '/houses/house3',
      statusText: 'Продано',
      houseId: 'Коттедж №1',
      imgUrl: '/img/threeHousesRow/house-1-155m2/main.png', // 539x337
      imgAlt: '',
      title: 'Сканди',
      features: {
        first: {
          title: 'Площадь дома',
          value: '155 m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-2': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house4',
      statusText: 'Доступно',
      houseId: 'Коттедж №2',
      imgUrl: '/img/threeHousesRow/house-4-97m2/main.png', // 539x337
      imgAlt: '',
      title: 'Модерн 100',
      features: {
        first: {
          title: 'Площадь дома',
          value: '97 m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-3': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №3',
      imgUrl: '/img/threeHousesRow/house-3-140m2/main.jpg', // 539x337
      imgAlt: '',
      title: 'Модерн-140',
      features: {
        first: {
          title: 'Площадь дома',
          value: '140 m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-4': {
      statusColor: '#f00f',
      linkUrl: '/houses/house3',
      statusText: 'Продано',
      houseId: 'Коттедж №4',
      imgUrl: '/img/threeHousesRow/house-3-140m2/main.jpg', // 539x337
      imgAlt: '',
      title: 'Модерн-140',
      features: {
        first: {
          title: 'Площадь дома',
          value: '140 m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-5': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house2',
      statusText: 'Доступно',
      houseId: 'Коттедж №5',
      imgUrl: '/img/mappedImage/house-2-115m2/main.jpg', // 539x337
      imgAlt: '',
      title: 'Барнхаус',
      features: {
        first: {
          title: 'Площадь дома',
          value: '115 m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-6': {
      statusColor: 'rgb(255, 111, 0)',
      linkUrl: '/houses/house3',
      statusText: 'Забронировано',
      houseId: 'Коттедж №6',
      imgUrl: '/img/threeHousesRow/house-1-155m2/main.png', // 539x337
      imgAlt: '',
      title: 'Сканди',
      features: {
        first: {
          title: 'Площадь дома',
          value: '155 m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-7': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №7',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-8': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №8',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '12.34 соток',
        },
      },
    },
    'house-9': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house2',
      statusText: 'Доступно',
      houseId: 'Коттедж №9',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '10.6 соток',
        },
      },
    },
    'house-10': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house2',
      statusText: 'Доступно',
      houseId: 'Коттедж №10',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-11': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №11',
      imgUrl: '/img/threeHousesRow/house-3-140m2/main.jpg', // 539x337
      imgAlt: '',
      title: 'Модерн-140',
      features: {
        first: {
          title: 'Площадь дома',
          value: '140 m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-12': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house4',
      statusText: 'Доступно',
      houseId: 'Коттедж №12',
      imgUrl: '/img/threeHousesRow/house-4-97m2/main.png', // 539x337
      imgAlt: '',
      title: 'Модерн 100',
      features: {
        first: {
          title: 'Площадь дома',
          value: '97 m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-13': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house2',
      statusText: 'Доступно',
      houseId: 'Коттедж №13',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-14': {
      statusColor: '#f00f',
      linkUrl: '/houses/house2',
      statusText: 'Продано',
      houseId: 'Коттедж №14',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-15': {
      linkUrl: '/contacts',
      statusColor: '#f00f',
      statusText: 'Продано',
      houseId: 'Коттедж №15',
      imgUrl: '/img/threeHousesRow/house-3-140m2/main.jpg', // 539x337
      imgAlt: '',
      title: 'Модерн-140',
      features: {
        first: {
          title: 'Площадь дома',
          value: '140 m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-16': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №16',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Строится',
      features: {
        first: {
          title: 'Площадь дома',
          value: '100 m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-17': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №17',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-18': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №18',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-19': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №19',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-20': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №20',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-21': {
      statusColor: '#f00f',
      linkUrl: '/houses/house3',
      statusText: 'Продано',
      houseId: 'Коттедж №21',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-22': {
      statusColor: 'rgb(255, 111, 0)',
      linkUrl: '/',
      statusText: 'Забронировано',
      houseId: 'Коттедж №22',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-23': {
      statusColor: 'rgb(255, 111, 0)',
      linkUrl: '/',
      statusText: 'Забронировано',
      houseId: 'Коттедж №23',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '13.55 соток',
        },
      },
    },
    'house-24': {
      statusColor: 'rgb(255, 111, 0)',
      linkUrl: '/',
      statusText: 'Забронировано',
      houseId: 'Коттедж №24',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8.19 соток',
        },
      },
    },
    'house-25': {
      statusColor: 'rgb(255, 111, 0)',
      linkUrl: '/',
      statusText: 'Забронировано',
      houseId: 'Коттедж №25',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-26': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №26',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-27': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №27',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-28': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №28',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-29': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №29',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
    'house-30': {
      statusColor: '#348aa7',
      linkUrl: '/houses/house3',
      statusText: 'Доступно',
      houseId: 'Коттедж №30',
      imgUrl: '/img/buildToOrder.jpeg', // 539x337
      imgAlt: '',
      title: 'Дом под заказ',
      features: {
        first: {
          title: 'Площадь дома',
          value: '* m2',
        },
        second: {
          title: 'Размер участка',
          value: '8 соток',
        },
      },
    },
  },
}
