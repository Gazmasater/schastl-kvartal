import { TMeta } from '@localTypes/meta'

type TMetas = {
  [k: string]: TMeta
}

export const Metas: TMetas = {
  homepage: {
    title: 'Foo',
    description: 'Foo',
  },
}
