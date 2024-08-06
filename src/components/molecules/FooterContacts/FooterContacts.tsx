/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react'
import { clx } from '@utils/clx'
import classes from './FooterContacts.module.css'

export const FooterContacts: FC = () => {
  return (
    <div className={classes.container}>
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <div className={clx(['MuiGrid-root', classes.padding, 'MuiGrid-container MuiGrid-align-items-xs-center'])}>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-5">
            <h2 className={clx(['MuiTypography-root', classes.heading, 'MuiTypography-h2'])}>Контакти</h2>
            <div className={classes.infoBlock}>
              <div className={classes.infoHeading}>Адреса офісу продажів</div>
              <div className={classes.infoAddr}>
                с. Білогородка, Г. Вишневського, 1, 10:00-17:00 за попереднім записом
              </div>
            </div>
            <div className={classes.infoBlock}>
              <div className={classes.infoHeading}>Телефони для зв'язку</div>
              <div className={classes.infoPhones}>
                <a href="tel:+380969009008" className={classes.infoPhoneLink}>
                  +380969009008
                </a>
              </div>
              <div className={classes.infoPhones}>
                <a href="tel:+390958008009" className={classes.infoPhoneLink}>
                  +390958008009
                </a>
              </div>
              <div className={classes.infoPhones}>
                <a href="tel:+380934008007" className={classes.infoPhoneLink}>
                  +380934008007
                </a>
              </div>
            </div>
            <a
              href="https://maps.google.com/?saddr=My%20Location&amp;daddr=50.4142289254263,30.278142662692854"
              rel="noreferrer"
              target="_blank"
              className={classes.mapLink}
            >
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
              <span>Прокласти маршрут</span>
            </a>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-7">Map here</div>
        </div>
      </div>
    </div>
  )
}
