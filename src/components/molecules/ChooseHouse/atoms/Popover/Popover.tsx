/* eslint-disable max-lines-per-function */
import React, { FC } from 'react'
import { clx } from '@utils/clx'
import { THouseMetadata } from '@localTypes/chooseHouse'
import classes from './Popover.module.css'

type TPopoverProps = {
  currentHouse: THouseMetadata
}

const formatFeatureTitle = (title: string) => (title === 'Размер участка' ? 'Участок' : title)

const formatFeatureValue = (value: string) => value.replace(/\bm2\b/g, 'м²')

export const Popover: FC<TPopoverProps> = ({ currentHouse }) => {
  return (
    <div className={classes.popover}>
      <div className={clx([classes.flexContainer, classes.shadingContainer])}>
        {currentHouse.isSoldLayout ? (
          <>
            <div className={clx([classes.mainStyles, classes.fontSize])}>
              <div className={classes.status} style={{ background: currentHouse.statusColor }} />
              {currentHouse.statusText}
            </div>
            {currentHouse.soldText && (
              <div className={classes.soldSubText}>
                <p className="MuiTypography-root classes.fontSize MuiTypography-body2 MuiTypography-colorTextPrimary">
                  {currentHouse.soldText}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className={clx([classes.mainStyles])}>
            <div className={classes.flexJustCenter}>
              <div className={classes.status} style={{ background: currentHouse.statusColor }} />
              {currentHouse.statusText}
            </div>
            {currentHouse.houseId && <div className={classes.title}>{currentHouse.houseId}</div>}
          </div>
        )}
        {currentHouse.imgUrl && (
          <div className={classes.imagePositioning}>
            <div className={classes.imageContainer}>
              <img
                className={classes.imageImage}
                src={currentHouse.imgUrl}
                alt={currentHouse.imgAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
        {currentHouse.features && (
          <div className={classes.descriptionContainer}>
            <div className={classes.descriptionTitle}>{currentHouse.title}</div>
            <div className={classes.features}>
              <div className={classes.featuresItem}>
                <div>
                  <div>{formatFeatureTitle(currentHouse.features.first.title)}</div>
                  <b>{formatFeatureValue(currentHouse.features.first.value)}</b>
                </div>
              </div>
              <div className={classes.featuresItem}>
                <div>
                  <div>{formatFeatureTitle(currentHouse.features.second.title)}</div>
                  <b>{formatFeatureValue(currentHouse.features.second.value)}</b>
                </div>
              </div>
            </div>
            {/* <div className={classes.moreButton}>
              <a
                className="MuiTypography-root MuiLink-root MuiLink-underlineHover orderCallbackLink MuiTypography-colorPrimary"
                href={currentHouse.moreButtonUrl}
              >
                {currentHouse.moreButtonText}
              </a>
            </div> */}
          </div>
        )}
        {/* <div className={classes.orderCallback}>
            <a
              className={clx([
                'MuiTypography-root MuiLink-root MuiLink-underlineHover',
                classes.orderCallbackLink,
                classes.fontSize,
                'MuiTypography-colorPrimary',
              ])}
              href={currentHouse.subLinkUrl}
            >
              {currentHouse.subLinkText}
            </a>
          </div> */}
      </div>
    </div>
  )
}
