import { GetServerSideProps, NextPage } from 'next'

const siteUrl = 'https://kvartal-lipetsk.ru'
const lastModified = '2026-07-15'
const urls = [
  '/',
  '/doma-ryadom-s-parkovymi-kvartalami',
  '/galereya-stroitelstva',
  '/kontakty',
  '/doma-v-lipetskom-rayone/dom-skandi-155-m2',
  '/doma-v-lipetskom-rayone/barnhaus-115-m2',
  '/doma-v-lipetskom-rayone/dom-modern-140-m2',
  '/doma-v-lipetskom-rayone/dom-modern-100-m2',
]

const Sitemap: NextPage = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const entries = urls
    .map(url => `  <url><loc>${siteUrl}${url}</loc><lastmod>${lastModified}</lastmod></url>`)
    .join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default Sitemap
