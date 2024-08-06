import React, { FC } from 'react'
import { clx } from '@utils/clx'
import classes from './ThreeHousesRow.module.css'

export const ThreeHousesRow: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.background} />
      <div className={classes.padding}>
        <div className={classes.grid}>
          <div>
            <a
              href="/"
              className={clx(['MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary'])}
            >
              <div className={clx([classes.imageClipContainer, classes.imageClipFirst])}>
                <div className={classes.imageClipInner}>
                  <img className={classes.imageInClip} src="/img/slider/pic1.jpg" alt="" />
                </div>
              </div>
              <div className={classes.underImageContainer}>
                <div className={classes.descriptionTitle}>CASA BIANCA</div>
                <div className={classes.descriptionFlex}>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>Площа будинку:</div>
                      <b>110.74 m2</b>
                    </div>
                  </div>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>Розмір ділянки:</div>
                      <b>від 5.17 a</b>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href="/"
              className={clx(['MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary'])}
            >
              <div className={clx([classes.imageClipContainer, classes.imageClipSecond])}>
                <div className={classes.imageClipInner}>
                  <img className={classes.imageInClip} src="/img/slider/pic2.jpg" alt="" />
                </div>
              </div>
              <div className={classes.underImageContainer}>
                <div className={classes.descriptionTitle}>BRILLIANTE</div>
                <div className={classes.descriptionFlex}>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>Площа будинку:</div>
                      <b>132.05 m2</b>
                    </div>
                  </div>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>Розмір ділянки:</div>
                      <b>від 6.15 a</b>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href="/"
              className={clx(['MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary'])}
            >
              <div className={clx([classes.imageClipContainer, classes.imageClipSecond])}>
                <div className={classes.imageClipInner}>
                  <img className={classes.imageInClip} src="/img/slider/pic3.jpg" alt="" />
                </div>
              </div>
              <div className={classes.underImageContainer}>
                <div className={classes.descriptionTitle}>PALAZZO</div>
                <div className={classes.descriptionFlex}>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>Площа будинку:</div>
                      <b>196.5 m2</b>
                    </div>
                  </div>
                  <div className={classes.descriptionText}>
                    <div>
                      <div>Розмір ділянки:</div>
                      <b>від 8.19 a</b>
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
