import { TMeta } from '@localTypes/meta'

type TMetas = {
  [k: string]: TMeta
}

export const Metas: TMetas = {
  homepage: {
    title: 'Счастливый Квартал',
    description: 'Foo',
  },
  contacts: {
    title: 'Контакты',
    description: 'Foo',
  },
  gallery: {
    title: 'Галерея',
    description: 'Foo',
  },
  house1: {
    title: 'Сканди',
    description: 'Сканди',
  },
  house2: {
    title: 'Барнхаус',
    description: 'Барнхаус',
  },
  house3: {
    title: 'Foo',
    description: 'Foo',
  },
}
