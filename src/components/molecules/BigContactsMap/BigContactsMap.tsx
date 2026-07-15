import React, { FC, useEffect, useRef, useState } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { clx } from '@utils/clx'
import { TBigContactsMap } from '@localTypes/bigContactsMap'
import classes from './BigContactsMap.module.css'

type TBigContactsMapProps = {
  data: TBigContactsMap
}

export const BigContactsMap: FC<TBigContactsMapProps> = ({ data }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [isMapVisible, setIsMapVisible] = useState(false)

  useEffect(() => {
    const mapContainer = mapContainerRef.current

    if (!mapContainer || !('IntersectionObserver' in window)) {
      setIsMapVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px' },
    )

    observer.observe(mapContainer)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const mapContainer = mapContainerRef.current

    if (!mapContainer) return undefined

    const labelYandexMapsLink = () => {
      mapContainer.querySelectorAll<HTMLAnchorElement>('a[class*="copyright__logo"]').forEach(link => {
        link.setAttribute('aria-label', 'Яндекс Карты')
      })
    }

    labelYandexMapsLink()

    const observer = new MutationObserver(labelYandexMapsLink)
    observer.observe(mapContainer, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={clx(['MuiContainer-root MuiContainer-maxWidthXl', classes.paddingAndMargins])}>
      <h1 className={clx(['MuiTypography-root', classes.heading, 'MuiTypography-h3'])}>{data.heading}</h1>
      <div ref={mapContainerRef} className={classes.mapContainer}>
        {isMapVisible && (
          <YMaps>
            <Map defaultState={data.config} width="100%" height="400px">
              <Placemark geometry={data.mapPlaceMarkCoords} />
            </Map>
          </YMaps>
        )}
      </div>
    </div>
  )
}
