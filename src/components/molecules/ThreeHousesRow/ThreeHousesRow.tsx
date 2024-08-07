import React, { FC } from 'react'
import { clx } from '@utils/clx'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import classes from './ThreeHousesRow.module.css'

type TThreeHousesRowProps = {
  data: TThreeHousesRow
}

export const ThreeHousesRow: FC<TThreeHousesRowProps> = ({ data }) => {
  return (
    <div className={classes.container} id="threeHouses">
      <div className={classes.background} />
      <div className={classes.padding}>
        <div className={classes.grid}>
          <div>
            <a
              href={data.first.linkUrl}
              className={clx(['MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary'])}
            >
              <div className={clx([classes.imageClipContainer, classes.imageClipFirst])}>
                <div className={classes.imageClipInner}>
                  <img className={classes.imageInClip} src={data.first.imgUrl} alt={data.first.imgAlt} />
                </div>
              </div>
              <div className={classes.underImageContainer}>
                <div className={classes.descriptionTitle}>{data.first.title}</div>
                <div className={classes.descriptionFlex}>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>{data.first.feautureFirstTitle}</div>
                      <b>{data.first.featureFirstValue}</b>
                    </div>
                  </div>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>{data.first.featureSecondTitle}</div>
                      <b>{data.first.featureSecondValue}</b>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href={data.second.linkUrl}
              className={clx(['MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary'])}
            >
              <div className={clx([classes.imageClipContainer, classes.imageClipSecond])}>
                <div className={classes.imageClipInner}>
                  <img className={classes.imageInClip} src={data.second.imgUrl} alt={data.second.imgAlt} />
                </div>
              </div>
              <div className={classes.underImageContainer}>
                <div className={classes.descriptionTitle}>{data.second.title}</div>
                <div className={classes.descriptionFlex}>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>{data.second.feautureFirstTitle}</div>
                      <b>{data.second.featureFirstValue}</b>
                    </div>
                  </div>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>{data.third.featureSecondTitle}</div>
                      <b>{data.third.featureSecondValue}</b>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href={data.third.linkUrl}
              className={clx(['MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary'])}
            >
              <div className={clx([classes.imageClipContainer, classes.imageClipSecond])}>
                <div className={classes.imageClipInner}>
                  <img className={classes.imageInClip} src={data.third.imgUrl} alt={data.third.imgAlt} />
                </div>
              </div>
              <div className={classes.underImageContainer}>
                <div className={classes.descriptionTitle}>{data.third.title}</div>
                <div className={classes.descriptionFlex}>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>{data.first.feautureFirstTitle}</div>
                      <b>{data.first.featureFirstValue}</b>
                    </div>
                  </div>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>{data.third.featureSecondTitle}</div>
                      <b>{data.third.featureSecondValue}</b>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
