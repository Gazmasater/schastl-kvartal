import { TNavSocialLinks } from '@localTypes/navData'

export type TFooterData = {
  imageUrl: string
  imageAlt: string
  imageTitle: string
  imageLinkUrl: string
  copyrightText: string
  socialLinks: TNavSocialLinks
  footerLinks: {
    url: string
    label: string
  }[]
}
