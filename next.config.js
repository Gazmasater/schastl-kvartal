/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
  async redirects() {
    return [
      { source: '/gallery', destination: '/galereya-stroitelstva', permanent: true },
      { source: '/contacts', destination: '/kontakty', permanent: true },
      { source: '/houses/house1', destination: '/doma-v-lipetskom-rayone/dom-skandi-155-m2', permanent: true },
      { source: '/houses/house2', destination: '/doma-v-lipetskom-rayone/barnhaus-115-m2', permanent: true },
      { source: '/houses/house3', destination: '/doma-v-lipetskom-rayone/dom-modern-140-m2', permanent: true },
      { source: '/houses/house4', destination: '/doma-v-lipetskom-rayone/dom-modern-100-m2', permanent: true },
      { source: '/doma/dom-skandi-155-m2', destination: '/doma-v-lipetskom-rayone/dom-skandi-155-m2', permanent: true },
      { source: '/doma/barnhaus-115-m2', destination: '/doma-v-lipetskom-rayone/barnhaus-115-m2', permanent: true },
      { source: '/doma/dom-modern-140-m2', destination: '/doma-v-lipetskom-rayone/dom-modern-140-m2', permanent: true },
      { source: '/doma/dom-modern-100-m2', destination: '/doma-v-lipetskom-rayone/dom-modern-100-m2', permanent: true },
    ]
  },
  async rewrites() {
    return [
      { source: '/galereya-stroitelstva', destination: '/gallery' },
      { source: '/kontakty', destination: '/contacts' },
      { source: '/doma-v-lipetskom-rayone/:house', destination: '/houses/:house' },
    ]
  },
}

module.exports = nextConfig
