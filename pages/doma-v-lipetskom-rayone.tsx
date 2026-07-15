import React from 'react'
import { Meta, ThreeHousesRow } from '@components'
import { HomeTemplate } from '@templates'
import { FooterMock } from '@mocks/footer'
import { Metas } from '@mocks/meta'
import { NavMock } from '@mocks/nav'
import { ThreeHousesRowMock } from '@mocks/threeHousesRow'
import classes from '../src/pages/NearbyParkovyeKvartalyPage/NearbyParkovyeKvartalyPage.module.css'

const HousesInLipetskDistrictPage: React.FC = () => (
  <>
    <Meta {...Metas.housesInLipetskDistrict} />
    <HomeTemplate navData={NavMock} footerData={FooterMock}>
      <article className={classes.page}>
        <div className="MuiContainer-root MuiContainer-maxWidthXl">
          <div className={classes.content}>
            <p className={classes.eyebrow}>Готовые дома с участком от 8,5 млн ₽</p>
            <h1>Купить дом в Липецком районе</h1>
            <p className={classes.lead}>
              Готовые дома с участками в селе Ленино Липецкого района, в 6 км от Липецка по Воронежскому направлению.
            </p>

            <section>
              <h2>Дома с участками в «Счастливом Квартале»</h2>
              <p>
                В продаже готовые коттеджи по современным проектам. Каждый дом предлагается на участке от 8 соток и
                подключён к коммуникациям. Стоимость — от 8,5 млн ₽.
              </p>
            </section>
          </div>
        </div>

        <ThreeHousesRow data={ThreeHousesRowMock} />

        <div className="MuiContainer-root MuiContainer-maxWidthXl">
          <div className={classes.content}>
            <section>
              <h2>О коттеджном посёлке</h2>
              <ul className={classes.features}>
                <li>Участки от 8 соток.</li>
                <li>Просторные кухни-гостиные и панорамное остекление.</li>
                <li>Единый стиль застройки, освещение улиц и коммуникации.</li>
              </ul>
            </section>

            <a className={classes.cta} href="/kontakty">
              Записаться на просмотр
            </a>
          </div>
        </div>
      </article>
    </HomeTemplate>
  </>
)

export default HousesInLipetskDistrictPage
