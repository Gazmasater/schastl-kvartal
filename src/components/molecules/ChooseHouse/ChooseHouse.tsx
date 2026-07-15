/* eslint-disable max-lines-per-function */
import React, { FC, useEffect, useRef, useState } from 'react'
import ImageMapper, { CustomArea } from 'react-img-mapper'
import { TChooseHouse, THouseMetadata } from '@localTypes/chooseHouse'
import { getPublicUrl } from '@utils/getPublicUrl'
import classes from './ChooseHouse.module.css'
import { Popover } from './atoms'

type TChooseHouseProps = {
  data: TChooseHouse
}

export const ChooseHouse: FC<TChooseHouseProps> = ({ data }) => {
  const [currentHouse, setCurrentHouse] = useState<THouseMetadata>()
  const [isMapVisible, setIsMapVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    if (!container || !('IntersectionObserver' in window)) {
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
      { rootMargin: '600px 0px' },
    )

    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  const onAreaHover = (area: CustomArea) => {
    if (area.id) {
      setCurrentHouse(data.housesMetadata[area.id])
    }
  }

  const onAreaClick = (area: CustomArea) => {
    if (area.id) {
      // eslint-disable-next-line no-restricted-globals
      location.href = getPublicUrl(data.housesMetadata[area.id].linkUrl)
    }
  }

  return (
    <div ref={containerRef} className={classes.container}>
      {currentHouse && <Popover currentHouse={currentHouse} />}
      {isMapVisible && (
        <div className={classes.imageWrapper}>
          <ImageMapper
            src={data.imgUrl}
            map={data.housesCoords}
            width={1520}
            height={922}
            onMouseEnter={area => onAreaHover(area)}
            onMouseLeave={() => setCurrentHouse(null)}
            onClick={area => onAreaClick(area)}
          />
        </div>
      )}
    </div>
  )
}
