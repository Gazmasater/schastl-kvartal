import { GetServerSideProps, NextPage } from 'next'

const Robots: NextPage = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain')
  res.write(`User-agent: *
Allow: /
Sitemap: https://kvartal-lipetsk.ru/sitemap.xml
`)
  res.end()

  return { props: {} }
}

export default Robots
