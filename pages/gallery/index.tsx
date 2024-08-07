import React, { FC } from 'react'
import type { GetServerSideProps } from 'next'
import { Meta } from '@components'
import { GalleryPage } from '@pages'
import { TGalleryPage } from '@localTypes/pageTypes'
import { galleryPageMock } from '@mocks/pages/galleryPage'

export const getServerSideProps: GetServerSideProps<TGalleryPage> = async () => {
  return { props: { ...galleryPageMock } }
}

const Gallery: FC<TGalleryPage> = ({ meta, navData, footerData, galleryData }) => (
  <>
    <Meta {...meta} />
    <GalleryPage navData={navData} footerData={footerData} galleryData={galleryData} />
  </>
)

export default Gallery
