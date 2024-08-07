import { TGalleryPage } from '@localTypes/pageTypes'
import { Metas } from '@mocks/meta'
import { NavMock } from '@mocks/nav'
import { FooterMock } from '@mocks/footer'
import { GalleryMock } from '@mocks/gallery'

export const galleryPageMock: TGalleryPage = {
  meta: Metas.homepage,
  navData: NavMock,
  footerData: FooterMock,
  galleryData: GalleryMock,
}
