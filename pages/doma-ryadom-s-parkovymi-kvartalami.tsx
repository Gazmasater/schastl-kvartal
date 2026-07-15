import React from 'react'
import { Meta } from '@components'
import { HomeTemplate } from '@templates'
import { FooterMock } from '@mocks/footer'
import { Metas } from '@mocks/meta'
import { NavMock } from '@mocks/nav'
import classes from '../src/pages/NearbyParkovyeKvartalyPage/NearbyParkovyeKvartalyPage.module.css'

const NearbyParkovyeKvartalyPage: React.FC = () => (
  <>
    <Meta {...Metas.nearbyParkovyeKvartaly} />
    <HomeTemplate navData={NavMock} footerData={FooterMock}>
      <article className={classes.page}>
        <div className="MuiContainer-root MuiContainer-maxWidthXl">
          <div className={classes.content}>
            <p className={classes.eyebrow}>Коттеджный посёлок «Счастливый Квартал»</p>
            <h1>Дома с участком рядом с «Парковыми Кварталами»</h1>
            <p className={classes.lead}>
              Рассматриваете «Парковые Кварталы»? Посмотрите готовые дома с участками в «Счастливом Квартале» —
              коттеджном посёлке рядом с Липецком.
            </p>

            <section>
              <h2>Что предлагает «Счастливый Квартал»</h2>
              <ul className={classes.features}>
                <li>Дома с участками от 8 соток.</li>
                <li>Современные проекты с просторными кухнями-гостиными и панорамным остеклением.</li>
                <li>Подключённые коммуникации.</li>
              </ul>
            </section>

            <section>
              <h2>Выберите проект дома</h2>
              <div className={classes.cards}>
                <a href="/doma-v-lipetskom-rayone/dom-skandi-155-m2">Дом «Сканди» — 155 м²</a>
                <a href="/doma-v-lipetskom-rayone/barnhaus-115-m2">Барнхаус — 115 м²</a>
                <a href="/doma-v-lipetskom-rayone/dom-modern-140-m2">Дом «Модерн-140» — 140 м²</a>
                <a href="/doma-v-lipetskom-rayone/dom-modern-100-m2">Дом «Модерн-100» — 97 м²</a>
              </div>
            </section>

            <section className={classes.faq}>
              <h2>Вопросы о покупке дома рядом с «Парковыми Кварталами»</h2>
              <details>
                <summary>Какие дома можно посмотреть?</summary>
                <p>
                  На сайте представлены проекты домов с планировками, площадью и описанием. Выберите подходящий вариант
                  и запишитесь на просмотр.
                </p>
              </details>
              <details>
                <summary>Как записаться на просмотр?</summary>
                <p>Оставьте заявку на сайте или свяжитесь с нами — согласуем удобное время для просмотра дома.</p>
              </details>
            </section>

            <a className={classes.cta} href="/contacts">
              Записаться на просмотр
            </a>
          </div>
        </div>
      </article>
    </HomeTemplate>
  </>
)

export default NearbyParkovyeKvartalyPage
