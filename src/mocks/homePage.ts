import { TMeta } from '@localTypes/meta'
import { TCards } from '@localTypes/cards'

type THomePageMock = {
  meta: TMeta
  houseTitle: string
} & TCards

export const homePageMock: THomePageMock = {
  meta: {
    title: 'bar',
    description: 'bar',
  },
  houseTitle: 'foo',
  cards: [
    { id: 1, image: '/img/foo.jpg', title: 'foo', url: 'fo' },
    { id: 2, image: '/img/bar.jpg', title: 'bar', url: 'bar' },
  ],
}
