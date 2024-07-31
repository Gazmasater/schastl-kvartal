import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { HOUSES_PAGE } from '@constants'
// import { housesContent } from '@mocks/housesContent'
import { TMeta } from '@localTypes/meta'

type THouseProps = {
  meta: TMeta
}

export const getServerSideProps: GetServerSideProps<THouseProps> = async ({ params }) => {
  const pageId = params.house
  if (!pageId || Array.isArray(pageId) || HOUSES_PAGE.indexOf(pageId) === -1) {
    return { notFound: true }
  }

  // return { props: { ...housesContent[pageId] } }
  return { props: { meta: { title: 'bar', description: 'bar' } } }
}

// const House: FC<THouse> = ({ meta, ...rest }) => (
const House: FC<THouseProps> = ({ meta }) => (
  <>
    <Meta {...meta} />
    {/* <HousePage {...rest} /> */}
  </>
)

export default House
