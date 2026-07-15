export const getGalleryPreviewUrl = (imageUrl: string, size: 'desktop' | 'mobile' = 'desktop'): string =>
  imageUrl
    .replace('/img/gallery/', `/img/gallery-preview${size === 'mobile' ? '-mobile' : ''}/`)
    .replace(/\.(?:jpe?g)$/i, '.webp')
