import { TChooseHouse } from '@localTypes/chooseHouse'

/*
imgUrl: 1520x922
thumb imgUrl: 539x337
*/

const housePolyRed = {
  fillColor: '#ff000061',
  preFillColor: '#ff000061',
  strokeColor: 'black',
}

const housePolyGreen = {
  fillColor: '#00800073',
  preFillColor: '#00800073',
  strokeColor: 'black',
}

const housePolyLightGreen = {
  fillColor: '#00800052',
  preFillColor: '#00800026',
  strokeColor: 'black',
}

export const ChooseHouseMock: TChooseHouse = {
  imgUrl: '/img/mappedImage/image.png', // imgUrl: 1520x922
  housesCoords: {
    name: 'my-map',
    areas: [
      {
        id: 'house-1',
        shape: 'poly',
        ...housePolyRed,
        coords: [413, 702.75, 471.625, 648.375, 508.5, 663, 450, 718],
      },
      {
        id: 'house-2',
        shape: 'poly',
        ...housePolyGreen,
        coords: [376, 687.5, 434.75, 633.75, 471.625, 648.375, 413, 702.75],
      },
      {
        id: 'house-3',
        shape: 'poly',
        ...housePolyGreen,
        coords: [397.75, 618.5, 456.75, 566, 493.5, 580, 434.5, 632.5],
      },
      {
        id: 'house-4',
        shape: 'poly',
        ...housePolyGreen,
        coords: [361, 604.5, 420, 552, 456.75, 566, 397.75, 618.5],
      },
      {
        id: 'house-5',
        shape: 'poly',
        ...housePolyRed,
        coords: [471.625, 648.375, 530.25, 594, 567, 608, 508.5, 663],
      },
      {
        id: 'house-6',
        shape: 'poly',
        ...housePolyGreen,
        coords: [434.75, 633.75, 493.5, 580, 530.25, 594, 471.625, 648.375],
      },
      {
        id: 'house-7',
        shape: 'poly',
        ...housePolyGreen,
        coords: [339, 672.25, 397.75, 618.5, 434.5, 632.5, 376, 687.5],
      },
      {
        id: 'house-8',
        shape: 'poly',
        ...housePolyGreen,
        coords: [302, 657, 361, 604.5, 397.75, 618.5, 339, 672.25],
      },
      {
        id: 'house-9',
        shape: 'poly',
        ...housePolyGreen,
        coords: [278, 647.5, 327.5, 592.5, 361, 604.5, 302, 657],
      },
      {
        id: 'house-10',
        shape: 'poly',
        ...housePolyGreen,
        coords: [291.5, 578.5, 335, 522, 384, 540, 327.5, 592.5],
      },
      {
        id: 'house-11',
        shape: 'poly',
        ...housePolyGreen,
        coords: [255.5, 564.5, 292, 507, 335, 522, 291.5, 578.5],
      },
      {
        id: 'house-12',
        shape: 'poly',
        ...housePolyGreen,
        coords: [327.5, 592.5, 384, 540, 420, 552, 361, 604.5],
      },
      {
        id: 'house-13',
        shape: 'poly',
        ...housePolyLightGreen,
        coords: [248.5, 634.75, 291.5, 578.5, 327.5, 592.5, 278, 647.5],
      },
      {
        id: 'house-14',
        shape: 'poly',
        ...housePolyGreen,
        coords: [219, 622, 255.5, 564.5, 291.5, 578.5, 248.5, 634.75],
      },
      {
        id: 'house-15',
        shape: 'poly',
        ...housePolyGreen,
        coords: [536, 585.25, 589.25, 539, 626.5, 553.5, 573, 600],
      },
      {
        id: 'house-16',
        shape: 'poly',
        ...housePolyGreen,
        coords: [499, 570.5, 552, 524.5, 589.25, 539, 536, 585.25],
      },
      {
        id: 'house-17',
        shape: 'poly',
        ...housePolyGreen,
        coords: [515, 509.75, 567.5, 464.25, 605, 478.5, 552.5, 524],
      },
      {
        id: 'house-18',
        shape: 'poly',
        ...housePolyGreen,
        coords: [477.5, 495.5, 530, 450, 567.5, 464.25, 515, 509.75],
      },
      {
        id: 'house-19',
        shape: 'poly',
        ...housePolyGreen,
        coords: [589.25, 539, 642.5, 492.75, 680, 507, 626.5, 553.5],
      },
      {
        id: 'house-20',
        shape: 'poly',
        ...housePolyLightGreen,
        coords: [552, 524.5, 605, 478.5, 642.5, 492.75, 589.25, 539],
      },
      {
        id: 'house-21',
        shape: 'poly',
        ...housePolyGreen,
        coords: [462, 555.75, 515, 509.75, 552.5, 524, 499, 570.5],
      },
      {
        id: 'house-22',
        shape: 'poly',
        ...housePolyLightGreen,
        coords: [420, 541, 477.5, 495.5, 515, 509.75, 462, 555.75],
      },
      {
        id: 'house-23',
        shape: 'poly',
        ...housePolyGreen,
        coords: [391.5, 532, 438.5, 481.875, 477.5, 495.5, 420, 541],
      },
      {
        id: 'house-24',
        shape: 'poly',
        ...housePolyGreen,
        coords: [360, 520, 403, 468.25, 438.5, 481.875, 391.5, 532],
      },
      {
        id: 'house-25',
        shape: 'poly',
        ...housePolyGreen,
        coords: [371.5, 456.25, 406.5, 401.25, 446, 416.5, 403, 468.25],
      },
      {
        id: 'house-26',
        shape: 'poly',
        ...housePolyGreen,
        coords: [332, 441, 367, 386, 406.5, 401.25, 371.5, 456.25],
      },
      {
        id: 'house-27',
        shape: 'poly',
        ...housePolyGreen,
        coords: [438.5, 481.875, 485.5, 431.75, 530, 450, 477.5, 495.5],
      },
      {
        id: 'house-28',
        shape: 'poly',
        ...housePolyLightGreen,
        coords: [403, 468.25, 446, 416.5, 485.5, 431.75, 438.5, 481.875],
      },
      {
        id: 'house-29',
        shape: 'poly',
        ...housePolyGreen,
        coords: [328.5, 508, 371.5, 456.25, 403, 468.25, 360, 520],
      },
      {
        id: 'house-30',
        shape: 'poly',
        ...housePolyLightGreen,
        coords: [297, 496, 332, 441, 371.5, 456.25, 328.5, 508],
      },
    ],
  },
  housesMetadata: {
    'house-1': {
      linkUrl: '/houses/house1',
      statusText: 'Продано',
      soldText: 'УПС, этот коттедж уже продан! Наведи курсор на зеленый коттедж и выбери свободный',
      isSoldLayout: true,
      statusColor: '#b00020',
    },
    'house-2': {
      statusColor: '#348aa7',
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
      statusColor: '#348aa7',
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
    'house-4': {
      statusColor: '#348aa7',
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
    'house-5': {
      linkUrl: '/houses/house1',
      statusText: 'Продано',
      soldText: 'УПС, этот коттедж уже продан! Наведи курсор на зеленый коттедж и выбери свободный',
      isSoldLayout: true,
      statusColor: '#b00020',
    },
    'house-6': {
      statusColor: '#348aa7',
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
    'house-7': {
      statusColor: '#348aa7',
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
    'house-8': {
      statusColor: '#348aa7',
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
    'house-9': {
      linkUrl: '/houses/house1',
      statusText: 'Продано',
      soldText: 'УПС, этот коттедж уже продан! Наведи курсор на зеленый коттедж и выбери свободный',
      isSoldLayout: true,
      statusColor: '#b00020',
    },
    'house-10': {
      statusColor: '#348aa7',
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
    'house-11': {
      statusColor: '#348aa7',
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
    'house-12': {
      statusColor: '#348aa7',
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
    'house-13': {
      linkUrl: '/houses/house1',
      statusText: 'Продано',
      soldText: 'УПС, этот коттедж уже продан! Наведи курсор на зеленый коттедж и выбери свободный',
      isSoldLayout: true,
      statusColor: '#b00020',
    },
    'house-14': {
      statusColor: '#348aa7',
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
    'house-15': {
      statusColor: '#348aa7',
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
    'house-16': {
      statusColor: '#348aa7',
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
    'house-17': {
      statusColor: '#348aa7',
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
    'house-18': {
      statusColor: '#348aa7',
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
    'house-19': {
      statusColor: '#348aa7',
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
    'house-20': {
      statusColor: '#348aa7',
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
    'house-21': {
      statusColor: '#348aa7',
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
    'house-22': {
      statusColor: '#348aa7',
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
    'house-23': {
      statusColor: '#348aa7',
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
    'house-24': {
      statusColor: '#348aa7',
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
    'house-25': {
      statusColor: '#348aa7',
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
    'house-26': {
      statusColor: '#348aa7',
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

    'house-27': {
      statusColor: '#348aa7',
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
    'house-28': {
      statusColor: '#348aa7',
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
    'house-29': {
      statusColor: '#348aa7',
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
    'house-30': {
      statusColor: '#348aa7',
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
