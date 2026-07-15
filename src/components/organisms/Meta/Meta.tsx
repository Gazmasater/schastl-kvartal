import React, { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { TMeta } from '@localTypes/meta'

const siteUrl = 'https://kvartal-lipetsk.ru'
const defaultImage = `${siteUrl}/img/mainPageBanner/house-1-155m2/mainPageBanner-lg.webp`

export const Meta: FC<TMeta> = ({
  title,
  description,
  image = defaultImage,
  robots = 'index, follow',
  structuredData,
}) => {
  const { asPath } = useRouter()
  const path = asPath.split(/[?#]/)[0]
  const canonicalUrl = `${siteUrl}${path === '/' ? '' : path}`
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${siteUrl}/#organization`,
    name: 'Счастливый Квартал',
    url: siteUrl,
    telephone: '+74742390016',
    email: 'sw_putilina@mail.ru',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'с. Ленино',
      addressRegion: 'Липецкая область',
      addressCountry: 'RU',
    },
  }
  const schemaMarkup = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [organizationStructuredData, ...(structuredData ? [structuredData] : [])],
  })

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="Счастливый Квартал" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Коттеджный посёлок «Счастливый Квартал»" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
