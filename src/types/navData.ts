export type TNavLinks = {
  url: string
  label: string
}[]

export type TNavSocialLinks = {
  youtube: {
    title: string
    url: string
  }
  facebook: {
    title: string
    url: string
  }
  insta: {
    title: string
    url: string
  }
}

export type TNavData = {
  title: string
  url: string
  logoUrl: string
  logoUrlWhite: string
  altText: string
  phone: string
  phoneLink: string
  navLinks: TNavLinks
  socialLinks: TNavSocialLinks
}
