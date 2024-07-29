import { THouse } from '@localTypes/house'

type THousesContent = {
  [key: string]: THouse
}

export const housesContent: THousesContent = {
  foo: {
    meta: {
      title: 'foo',
      description: 'foo',
    },
    title: 'foo',
    imgUrl: '/img/foo.jpg',
    annotation: 'bar',
    text: ['baz', 'baz'],
  },
  bar: {
    meta: {
      title: 'foo',
      description: 'foo',
    },
    title: 'foo',
    imgUrl: '/img/foo.jpg',
    annotation: 'bar',
    text: ['baz', 'baz'],
  },
}
