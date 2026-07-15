import React from 'react'
import { Meta } from '@components'
import { HomeTemplate } from '@templates'
import { FooterMock } from '@mocks/footer'
import { Metas } from '@mocks/meta'
import { NavMock } from '@mocks/nav'
import classes from '../src/pages/NearbyParkovyeKvartalyPage/NearbyParkovyeKvartalyPage.module.css'

const houses = [
  { name: 'Дом «Сканди»', area: '155 м²', url: '/doma-v-lipetskom-rayone/dom-skandi-155-m2' },
  { name: 'Барнхаус', area: '115 м²', url: '/doma-v-lipetskom-rayone/barnhaus-115-m2' },
  { name: 'Дом «Модерн-140»', area: '140 м²', url: '/doma-v-lipetskom-rayone/dom-modern-140-m2' },
  { name: 'Дом «Модерн-100»', area: '97 м²', url: '/doma-v-lipetskom-rayone/dom-modern-100-m2' },
]

const HousesInLipetskDistrictPage: React.FC = () => (
  <>
    <Meta {...Metas.housesInLipetskDistrict} />
    <HomeTemplate navData={NavMock} footerData={FooterMock}>
      <article className={classes.page}>
        <div className="MuiContainer-root MuiContainer-maxWidthXl">
          <div className={classes.content}>
            <p className={classes.eyebrow}>Коттеджный посёлок «Счастливый Квартал»</p>
            <h1>Купить дом в Липецком районе</h1>
            <p className={classes.lead}>
              Дома с участками в селе Ленино Липецкого района, в 6 км от Липецка по Воронежскому направлению.
            </p>

            <section>
              <h2>Дома с участками в «Счастливом Квартале»</h2>
              <p>
                В посёлке предусмотрено 30 коттеджей по современным проектам. Каждый дом строится на участке от 8 соток
                и подключается к коммуникациям.
              </p>
              <div className={classes.cards}>
                {houses.map(house => (
                  <a key={house.url} href={house.url}>
                    {house.name} — {house.area}
                  </a>
                ))}
              </div>
            </section>

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
