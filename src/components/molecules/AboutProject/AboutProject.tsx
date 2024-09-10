import React, { FC } from 'react'
import { clx } from '@utils/clx'
import { TAboutProject } from '@localTypes/aboutProject'
import classes from './AboutProject.module.css'

type TAboutProjectProps = {
  data: TAboutProject
}

export const AboutProject: FC<TAboutProjectProps> = ({ data }) => {
  return (
    <div className={clx([classes.fontAndPadding, classes.positioning])}>
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <div
          className={clx([
            'MuiGrid-root',
            classes.positioningInner,
            classes.marginingInner,
            'MuiGrid-container MuiGrid-align-items-xs-center',
          ])}
        >
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 MuiGrid-grid-lg-6">
            <h2 className={classes.mainHeader}>{data.heading}</h2>
            <div className={classes.smallTextContainer}>
              <div className={classes.smallText}>
                {data.smallText.map(el => (
                  <p key={el}>{el}</p>
                ))}
              </div>
            </div>
            {data.features.map(({ first, second }) => (
              <div className={classes.description} key={first.label}>
                <div className={classes.boldText}>
                  <div>
                    <b>{first.label}</b>
                  </div>
                  <span>{first.subtext}</span>
                </div>
                <div className={classes.boldText}>
                  <div>
                    <b>{second.label}</b>
                  </div>
                  <span>{second.subtext}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-5 MuiGrid-grid-lg-6">
            <div className={classes.videoContainer}>
              <div className={classes.videoPositioning}>
                {/* <video playsInline className={classes.video} autoPlay loop muted>
                  <source src={data.videoUrl} type="video/mp4" />
                </video> */}
              </div>
            </div>
            {data.linkToMapProvider && data.mapText && (
              <a href={data.linkToMapProvider} rel="noreferrer" target="_blank" className={classes.link}>
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
                <span>{data.mapText}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
