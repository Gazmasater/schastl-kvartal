import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { HousePage } from '@pages'
import { HOUSES_PAGE } from '@constants'
import { housesContent } from '@mocks/housesContent'
import { THouse } from '@localTypes/house'

type THouseProps = THouse

export const getServerSideProps: GetServerSideProps<THouseProps> = async ({ params }) => {
  const pageId = params.book
  if (!pageId || Array.isArray(pageId) || HOUSES_PAGE.indexOf(pageId) === -1) {
    return { notFound: true }
  }

  return { props: { ...housesContent[pageId] } }
}

const House: FC<THouse> = ({ meta, ...rest }) => (
  <>
    <Meta {...meta} />
    <HousePage {...rest} />
  </>
)

export default House
