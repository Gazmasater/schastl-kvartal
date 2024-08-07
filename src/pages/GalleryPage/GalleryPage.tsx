import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TGalleryPage } from '@localTypes/pageTypes'
import { Gallery } from 'src/components'

export const GalleryPage: FC<Omit<TGalleryPage, 'meta'>> = ({ navData, footerData, galleryData }) => {
  return (
    <HomeTemplate navData={navData} footerData={footerData}>
      <Gallery data={galleryData} />
    </HomeTemplate>
  )
}
