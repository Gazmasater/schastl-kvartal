import { TNavSocialLinks } from '@localTypes/nav'

export type TFooter = {
  imageUrl: string
  imageAlt: string
  imageTitle: string
  imageLinkUrl: string
  copyrightText: string
  socialLinks?: TNavSocialLinks
  footerLinks: {
    url: string
    label: string
  }[]
}
