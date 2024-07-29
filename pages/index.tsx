import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { HomePage } from '@pages'
import { homePageMock } from '@mocks/homePage'
import { TMeta } from '@localTypes/meta'
import { TCards } from '@localTypes/cards'

type THomeProps = {
  meta: TMeta
} & TCards

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  return { props: { ...homePageMock } }
}

const Home: FC<THomeProps> = () => (
  <>
    <Meta {...homePageMock.meta} />
    <HomePage {...homePageMock} />
  </>
)

export default Home
