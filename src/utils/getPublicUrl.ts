const legacyHouseUrls: Record<string, string> = {
  '/houses/house1': '/doma-v-lipetskom-rayone/dom-skandi-155-m2',
  '/houses/house2': '/doma-v-lipetskom-rayone/barnhaus-115-m2',
  '/houses/house3': '/doma-v-lipetskom-rayone/dom-modern-140-m2',
  '/houses/house4': '/doma-v-lipetskom-rayone/dom-modern-100-m2',
}

const publicUrls: Record<string, string> = {
  '/gallery': '/galereya-stroitelstva',
  '/contacts': '/kontakty',
  ...legacyHouseUrls,
}

export const getPublicUrl = (url: string): string => publicUrls[url] || url
