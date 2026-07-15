/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
import React, { FC, Fragment, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { TGallery } from '@localTypes/gallery'
import { clx } from '@utils/clx'
import { getGalleryPreviewUrl } from '@utils/getGalleryPreviewUrl'
import { SliderImageGrid } from './atoms'
import classes from './Gallery.module.css'

const ImageGrid = dynamic(() => import('./atoms/ImageGrid').then(module => module.ImageGrid), { ssr: false })

type TGalleryProps = {
  data: TGallery
}

export const Gallery: FC<TGalleryProps> = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches)

    updateIsDesktop()
    mediaQuery.addEventListener('change', updateIsDesktop)

    return () => mediaQuery.removeEventListener('change', updateIsDesktop)
  }, [])

  return (
    <div className={classes.container}>
      <Head>
        <link
          rel="preload"
          as="image"
          href={getGalleryPreviewUrl(data.gallery[0].imgUrls[0].thumb, 'mobile')}
          media="(max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={getGalleryPreviewUrl(data.gallery[0].imgUrls[0].thumb)}
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
      </Head>
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <h1 className={clx(['MuiTypography-root', classes.mainHeading, 'MuiTypography-h2'])}>{data.title}</h1>
        {data.gallery.map(({ date, text, altDescription, imgUrls }, index) => (
          <Fragment key={date}>
            <div className={classes.galleryItemDescriptionFlex}>
              <div className={classes.date}>
                <h4 className={clx(['MuiTypography-root', classes.subHeading, 'MuiTypography-h4'])}>{date}</h4>
              </div>
              <div className={classes.textContainer}>{text && text.map(el => <p key={el}>{el}</p>)}</div>
            </div>
            {isDesktop ? (
              <ImageGrid
                data={imgUrls}
                priority={index === 0}
                altPrefix={altDescription || `Фотография строительства дома, ${date}`}
              />
            ) : (
              <SliderImageGrid
                data={imgUrls}
                priority={index === 0}
                altPrefix={altDescription || `Фотография строительства дома, ${date}`}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
