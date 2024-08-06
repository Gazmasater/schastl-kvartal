import React, { FC } from 'react'
import { clx } from '@utils/clx'
import classes from './AboutProject.module.css'

export const AboutProject: FC = () => {
  return (
    <div className={clx([classes.jss192, classes.jss193])}>
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <div
          className={clx([
            'MuiGrid-root',
            classes.jss194,
            classes.jss35,
            classes.jss42,
            'MuiGrid-container MuiGrid-align-items-xs-center',
          ])}
        >
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-7 MuiGrid-grid-lg-6">
            <h2 className={classes.jss195}>Про проєкт</h2>
            <div className={classes.jss196}>
              <div className={classes.jss197}>
                <p>
                  У комплексі знаходиться близько 200 котеджів, а ми пропонуємо обрати свій ідеальний варіант із 8 типів
                  будинків.&nbsp;
                </p>
                <p>Ознайомитися з кожним можна в розділі &quot;будинки&quot;.&nbsp;</p>
                <p>Містечко оточене чистим лісом, а всередині панує приємна атмосфера і затишок.&nbsp;</p>
                <p>
                  Ми пропонуємо зануритися в інший світогляд, де не потрібно будувати 5-метрові паркани від
                  сусідів.&nbsp;
                </p>
                <p>Тут ви знайдете тільки зелені огорожі, ландшафтний дизайн буде радувати кожен день!</p>
              </div>
            </div>
            <div className={classes.jss198}>
              <div className={classes.jss199}>
                <div>
                  <b>24/7</b>
                </div>
                <span>охорона території</span>
              </div>
              <div className={classes.jss199}>
                <div>
                  <b>8</b>
                </div>
                <span>проектів сучасних будинків</span>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-5 MuiGrid-grid-lg-6">
            <div className={classes.jss200}>
              <div className={classes.jss201}>
                <video playsInline className={classes.jss202} autoPlay loop muted>
                  <source src="/video/map.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <a
              href="https://maps.google.com/?saddr=My%20Location&amp;daddr=50.4142289254263,30.278142662692854"
              rel="noreferrer"
              target="_blank"
              className={classes.jss203}
            >
              <svg className={classes.jss204} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 67">
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
        </div>
      </div>
    </div>
  )
}
