/* eslint-disable max-lines-per-function */
import React, { FC } from 'react'
import { clx } from '@utils/clx'
import { THouseMetadata } from '@localTypes/chooseHouse'
import classes from './Popover.module.css'

type TPopoverProps = {
  currentHouse: THouseMetadata
}

export const Popover: FC<TPopoverProps> = ({ currentHouse }) => {
  return (
    <div className={classes.popover}>
      {currentHouse.type === 'sold' && (
        <div className={clx([classes.flexContainer, classes.shadingContainer])}>
          <div className={clx([classes.mainStyles, classes.red, classes.fontSize])}>
            <div className={classes.status} />
            {currentHouse.statusText}
          </div>
          <div className={classes.soldSubText}>
            <p className="MuiTypography-root classes.fontSize MuiTypography-body2 MuiTypography-colorTextPrimary">
              {currentHouse.text}
            </p>
          </div>
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
      )}
      {currentHouse.type === 'available' && (
        <div className={clx([classes.flexContainer, classes.shadingContainer])}>
          <div className={clx([classes.mainStyles, classes.green])}>
            <div className={classes.flexJustCenter}>
              <div className={classes.status} />
              {currentHouse.statusText}
            </div>
            <div className={classes.title}>{currentHouse.houseId}</div>
          </div>
          <div className={classes.imagePositioning}>
            <div className={classes.imageContainer}>
              <img className={classes.imageImage} src={currentHouse.imgUrl} alt={currentHouse.imgAlt} />
            </div>
          </div>
          <div className={classes.descriptionContainer}>
            <div className={classes.descriptionTitle}>{currentHouse.title}</div>
            <div className={classes.features}>
              <div className={classes.featuresItem}>
                <div>
                  <div>{currentHouse.features.first.title}</div>
                  <b>{currentHouse.features.first.value}</b>
                </div>
              </div>
              <div className={classes.featuresItem}>
                <div>
                  <div>{currentHouse.features.second.title}</div>
                  <b>{currentHouse.features.second.value}</b>
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
        </div>
      )}
    </div>
  )
}
