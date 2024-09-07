import { TChooseHouse } from '@localTypes/chooseHouse'

/*
imgUrl: 1520x922
thumb imgUrl: 539x337
*/

export const ChooseHouseMock: TChooseHouse = {
  imgUrl: '/img/mappedImage/image.png', // imgUrl: 1520x922
  housesCoords: {
    name: 'my-map',
    areas: [
      {
        id: 'house-1',
        shape: 'poly',
        fillColor: '#ff000061',
        preFillColor: '#ff000061',
        strokeColor: 'black',
        coords: [392.5, 692.5, 449.5, 641.25, 506, 663.5, 450, 715],
      },
      {
        id: 'house-2',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [335, 670, 393, 619, 449.5, 641.25, 392.5, 692.5],
      },
      {
        id: 'house-3',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [335.5, 596.5, 395.5, 546, 451, 568, 391, 618.5],
      },
      {
        id: 'house-4',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [280, 574.5, 340, 524, 395.5, 546, 335.5, 596.5],
      },
      {
        id: 'house-5',
        shape: 'poly',
        fillColor: '#ff000061',
        preFillColor: '#ff000061',
        strokeColor: 'black',
        coords: [449.5, 641.25, 506.5, 590, 562, 612, 506, 663.5],
      },
      {
        id: 'house-6',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [393, 619, 451, 568, 506.5, 590, 449.5, 641.25],
      },
      {
        id: 'house-7',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [277.5, 647.5, 335.5, 596.5, 391, 618.5, 335, 670],
      },
      {
        id: 'house-8',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [220, 625, 280, 574.5, 335.5, 596.5, 277.5, 647.5],
      },
      {
        id: 'house-9',
        shape: 'poly',
        fillColor: '#ff000061',
        preFillColor: '#ff000061',
        strokeColor: 'black',
        coords: [525.75, 570.5, 576.125, 527.375, 632.5, 548, 583, 591],
      },
      {
        id: 'house-10',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [468.5, 550, 519.75, 506.75, 576.125, 527.375, 525.75, 570.5],
      },
      {
        id: 'house-11',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [462.5, 486.25, 515.5, 442.75, 571, 463.5, 518, 507],
      },
      {
        id: 'house-12',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [407, 465.5, 460, 422, 515.5, 442.75, 462.5, 486.25],
      },
      {
        id: 'house-13',
        shape: 'poly',
        fillColor: '#ff000061',
        preFillColor: '#ff000061',
        strokeColor: 'black',
        coords: [576.125, 527.375, 626.5, 484.25, 682, 505, 632.5, 548],
      },
      {
        id: 'house-14',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [519.75, 506.75, 571, 463.5, 626.5, 484.25, 576.125, 527.375],
      },
      {
        id: 'house-15',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [411.25, 529.5, 462.5, 486.25, 518, 507, 468.5, 550],
      },
      {
        id: 'house-16',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [354, 509, 407, 465.5, 462.5, 486.25, 411.25, 529.5],
      },
      {
        id: 'house-17',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [411, 403, 350, 446, 407, 465.5, 460, 422],
      },
      {
        id: 'house-18',
        shape: 'poly',
        fillColor: '#00800073',
        preFillColor: '#00800073',
        strokeColor: 'black',
        coords: [337, 438, 364, 387, 411, 403, 350, 446],
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
    'house-4': {
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
    'house-5': {
      type: 'sold',
      linkUrl: '/houses/house1',
      statusText: 'Продано',
      text: 'УПС, этот коттедж уже продан! Наведи курсор на зеленый коттедж и выбери свободный',
    },
    'house-6': {
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
    'house-7': {
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
    'house-8': {
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
    'house-9': {
      type: 'sold',
      linkUrl: '/houses/house1',
      statusText: 'Продано',
      text: 'УПС, этот коттедж уже продан! Наведи курсор на зеленый коттедж и выбери свободный',
    },
    'house-10': {
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
    'house-11': {
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
    'house-12': {
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
    'house-13': {
      type: 'sold',
      linkUrl: '/houses/house1',
      statusText: 'Продано',
      text: 'УПС, этот коттедж уже продан! Наведи курсор на зеленый коттедж и выбери свободный',
    },
    'house-14': {
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
    'house-15': {
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
    'house-16': {
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
    'house-17': {
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
    'house-18': {
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
