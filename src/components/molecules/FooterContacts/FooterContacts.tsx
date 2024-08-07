/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { clx } from '@utils/clx'
import { TFooterContacts } from '@localTypes/footerContacts'
import classes from './FooterContacts.module.css'

type TFooterContactsProps = {
  data: TFooterContacts
}

export const FooterContacts: FC<TFooterContactsProps> = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <div className={clx(['MuiGrid-root', classes.padding, 'MuiGrid-container MuiGrid-align-items-xs-center'])}>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-5">
            <h2 className={clx(['MuiTypography-root', classes.heading, 'MuiTypography-h2'])}>{data.heading}</h2>
            <div className={classes.infoBlock}>
              <div className={classes.infoHeading}>{data.addrSubheading}</div>
              <div className={classes.infoAddr}>{data.addr}</div>
            </div>
            <div className={classes.infoBlock}>
              <div className={classes.infoHeading}>{data.phonesSubheading}</div>
              {data.phones.map(({ url, text }) => (
                <div className={classes.infoPhones} key={text}>
                  <a href={url} className={classes.infoPhoneLink}>
                    {text}
                  </a>
                </div>
              ))}
            </div>
            <a href={data.mapProviderLink} rel="noreferrer" target="_blank" className={classes.mapLink}>
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
              <span>{data.mapProviderLinkText}</span>
            </a>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-7">
            <YMaps>
              <Map defaultState={data.mapConfig} width="100%" height="400px">
                <Placemark geometry={data.mapConfig.center} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  )
}
