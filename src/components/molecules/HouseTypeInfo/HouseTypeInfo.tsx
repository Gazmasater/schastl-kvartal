import React, { FC } from 'react'
import { clx } from '@utils/clx'
import classes from './HouseTypeInfo.module.css'

export const HouseTypeInfo: FC = () => {
  return (
    <div id="planning-scroll-target" className={classes.paddingContainer}>
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <h2 className={clx(['MuiTypography-root', classes.mainHeading, 'MuiTypography-h2'])}>
          Функціональне планування
        </h2>
        <div className={classes.tabsContainer}>
          <div>
            <div className={classes.tabList} role="tablist">
              <button
                className={clx([
                  'MuiButtonBase-root MuiTab-root MuiTab-textColorInherit',
                  classes.tabButton,
                  classes.tabButtonSelected,
                ])}
                type="button"
                role="tab"
                aria-selected="true"
              >
                <span className="MuiTab-wrapper">1й поверх</span>
                <span className={classes.tabButtonUnderline} />
              </button>
              <button
                className={clx(['MuiButtonBase-root MuiTab-root MuiTab-textColorInherit', classes.tabButton])}
                type="button"
                role="tab"
                aria-selected="false"
              >
                <span className="MuiTab-wrapper">2й поверх</span>
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
                  <img
                    className={classes.imageImage}
                    src="https://api.beliy-shokolad.com.ua/storage/abstract_buildings_plan_types/original/NUXLnhhwKtGR3hq812g3gO5IJPQV9pJVsreTovGv.jpg"
                    alt="planning"
                  />
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
                <div className={classes.featuresSubtitle}>Перший поверх</div>
                <div className={classes.featuresItems}>
                  <div className={classes.featuresSingleItem}>
                    <span>101. Тамбур</span> 2.03 m<sup>2</sup>
                  </div>
                  <div className={classes.featuresSingleItem}>
                    <span>102. Коридор</span> 2.21 m<sup>2</sup>
                  </div>
                  <div className={classes.featuresSingleItem}>
                    <span>103. Санвузол</span> 3.45 m<sup>2</sup>
                  </div>
                  <div className={classes.featuresSingleItem}>
                    <span>104. Кухня-вітальна</span> 30.78 m<sup>2</sup>
                  </div>
                  <div className={classes.featuresSingleItem}>
                    <span>105. Комора</span> 1.86 m<sup>2</sup>
                  </div>
                </div>
                <div className={classes.bottomButtons}>
                  <a href="#gen-plan" className={classes.bottomButtonsLink}>
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
                    <span>Подивитись розташування</span>
                  </a>
                  <a href="#callback" className={classes.bottomButtonsLink}>
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
                    <span>Записатися на перегляд</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.tabPanel} role="tabpanel" hidden>
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
                  <img
                    className={classes.imageImage}
                    src="https://api.beliy-shokolad.com.ua/storage/abstract_buildings_plan_types/original/wHy68wA2Yd23fzmE84wpra5wo9rcUJ9fTybA8MPQ.jpg"
                    alt="planning"
                  />
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
                <div className={classes.featuresSubtitle}>Другий поверх</div>
                <div className={classes.featuresItems}>
                  <div className={classes.featuresSingleItem}>
                    <span>201. Коридор</span> 4.18 m<sup>2</sup>
                  </div>
                  <div className={classes.featuresSingleItem}>
                    <span>202. Ванна кімната</span> 6.96 m<sup>2</sup>
                  </div>
                  <div className={classes.featuresSingleItem}>
                    <span>203. Спальня</span> 14.18 m<sup>2</sup>
                  </div>
                  <div className={classes.featuresSingleItem}>
                    <span>204. Спальня</span> 9.55 m<sup>2</sup>
                  </div>
                  <div className={classes.featuresSingleItem}>
                    <span>205. Гардеробна</span> 3.72 m<sup>2</sup>
                  </div>
                  <div className={classes.featuresSingleItem}>
                    <span>206. Сходи</span> 4.92 m<sup>2</sup>
                  </div>
                </div>
                <div className={classes.bottomButtons}>
                  <a href="#gen-plan" className={classes.bottomButtonsLink}>
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
                    <span>Подивитись розташування</span>
                  </a>
                  <a href="#callback" className={classes.bottomButtonsLink}>
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
                    <span>Записатися на перегляд</span>
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
