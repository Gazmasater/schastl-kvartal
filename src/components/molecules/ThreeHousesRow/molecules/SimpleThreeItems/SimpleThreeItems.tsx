import React, { FC } from 'react'
import { clx } from '@utils/clx'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import classes from './SimpleThreeItems.module.css'

type TSimpleThreeItemsProps = {
  data: TThreeHousesRow['houses']
}

export const SimpleThreeItems: FC<TSimpleThreeItemsProps> = ({ data }) => {
  return (
    <div className={classes.grid}>
      {data.map(
        ({
          linkUrl,
          imgUrl,
          imgAlt,
          title,
          feautureFirstTitle,
          featureFirstValue,
          featureSecondTitle,
          featureSecondValue,
        }) => (
          <div key={title}>
            <a
              href={linkUrl}
              className={clx(['MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary'])}
            >
              <div className={clx([classes.imageClipContainer, classes.imageClipFirst])}>
                <div className={classes.imageClipInner}>
                  <img className={classes.imageInClip} src={imgUrl} alt={imgAlt} decoding="async" />
                </div>
              </div>
              <div className={classes.underImageContainer}>
                <div className={classes.descriptionTitle}>{title}</div>
                <div className={classes.descriptionFlex}>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>{feautureFirstTitle}</div>
                      <b>{featureFirstValue}</b>
                    </div>
                  </div>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>{featureSecondTitle}</div>
                      <b>{featureSecondValue}</b>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ),
      )}
    </div>
  )
}
