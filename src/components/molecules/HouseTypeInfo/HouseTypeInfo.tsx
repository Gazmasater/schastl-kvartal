/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react'
import { clx } from '@utils/clx'
import { THouseTypeInfo } from '@localTypes/houseTypeInfo'
import classes from './HouseTypeInfo.module.css'

type THouseTypeInfoProps = {
  data: THouseTypeInfo
}

export const HouseTypeInfo: FC<THouseTypeInfoProps> = ({ data }) => {
  const [currentTab, setCurrentTab] = useState<'firstTab' | 'secondTab'>('firstTab')

  return (
    <div id="planning-scroll-target" className={classes.paddingContainer}>
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <h2 className={clx(['MuiTypography-root', classes.mainHeading, 'MuiTypography-h2'])}>{data.heading}</h2>
        <div className={classes.tabsContainer}>
          <div>
            <div className={classes.tabList} role="tablist">
              <button
                className={clx([
                  'MuiButtonBase-root MuiTab-root MuiTab-textColorInherit',
                  classes.tabButton,
                  currentTab === 'firstTab' && classes.tabButtonSelected,
                ])}
                type="button"
                role="tab"
                aria-selected="true"
                onClick={() => setCurrentTab('firstTab')}
              >
                <span className="MuiTab-wrapper">{data.firstTabTitle}</span>
                {currentTab === 'firstTab' && <span className={classes.tabButtonUnderline} />}
              </button>
              <button
                className={clx([
                  'MuiButtonBase-root MuiTab-root MuiTab-textColorInherit',
                  classes.tabButton,
                  currentTab === 'secondTab' && classes.tabButtonSelected,
                ])}
                type="button"
                role="tab"
                aria-selected="false"
                onClick={() => setCurrentTab('secondTab')}
              >
                <span className="MuiTab-wrapper">{data.secondTabTitle}</span>
                {currentTab === 'secondTab' && <span className={classes.tabButtonUnderline} />}
              </button>
            </div>
          </div>
        </div>
        <div className={classes.tabPanel} role="tabpanel">
          <div
            className={clx([
              'MuiGrid-root',
              classes.marginContainer,
              'MuiGrid-container MuiGrid-justify-content-xs-center',
            ])}
          >
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-6 MuiGrid-grid-xl-5">
              <div className={classes.imageContainer}>
                <div className={classes.imageInner}>
                  <img className={classes.imageImage} src={data[currentTab].imageUrl} alt="planning" />
                </div>
              </div>
            </div>
            <div
              className={clx([
                'MuiGrid-root',
                classes.featuresContainer,
                'MuiGrid-item MuiGrid-grid-md-8 MuiGrid-grid-lg-6 MuiGrid-grid-xl-5',
              ])}
            >
              <div className={classes.featuresInner}>
                <div className={classes.featuresSubtitle}>{data[currentTab].subtitle}</div>
                <div className={classes.featuresItems}>
                  {data[currentTab].features.map(({ textInSpan, middleText, supText }) => (
                    <div className={classes.featuresSingleItem} key={textInSpan}>
                      <span>{textInSpan}</span> {middleText}
                      {supText && <sup>{supText}</sup>}
                    </div>
                  ))}
                </div>
                <div className={classes.bottomButtons}>
                  <a href={data[currentTab].firstLinkUrl} className={classes.bottomButtonsLink}>
                    <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 67">
                      <path
                        d="M56.7947 66.7759L8.85997 46.3316L0.0859375 15.8759L27.4725 7.93795L54.8914 1.52588e-05L65.73 37.8105L56.7947 66.7759Z"
                        fill="currentColor"
                      />
                      <path
                        d="M32.7288 22.8181L43.1326 33.222M43.1326 32.4217L32.7288 42.8256"
                        stroke="var(--color-arrow)"
                        strokeWidth="1.13179"
                      />
                    </svg>
                    <span>{data[currentTab].firstLinkText}</span>
                  </a>
                  <a href={data[currentTab].secondLinkUrl} className={classes.bottomButtonsLink}>
                    <svg
                      width="70"
                      height="59"
                      viewBox="0 0 70 59"
                      className={classes.svg}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 10.4781L46.9544 0L70 21.5205L56.638 47.7158L43.0509 59L0 10.4781Z"
                        fill="currentColor"
                      />
                      <path d="M35 27H49M42 34L42 20" stroke="var(--color-arrow)" />
                    </svg>
                    <span>{data[currentTab].secondLinkText}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
