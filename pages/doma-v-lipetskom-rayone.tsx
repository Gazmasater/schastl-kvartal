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
              <p className={classes.text}>Актуальный статус: дом «Сканди» продан, остальные дома готовы к продаже.</p>
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

            <section>
              <h2>Локация и инфраструктура</h2>
              <p className={classes.text}>
                «Счастливый Квартал» расположен в селе Ленино Липецкого района, в 6 км от Липецка по Воронежскому
                направлению. Адрес посёлка: ул. Перспективная.
              </p>
              <p className={classes.text}>
                Дома подключены к коммуникациям; в посёлке предусмотрены освещение улиц и единый стиль застройки.
                Условия покупки в ипотеку можно уточнить у менеджера перед оформлением сделки.
              </p>
              <p className={classes.text}>
                Зимой в окрестностях Ленино можно выбраться на тюбинг, коньки и лыжи: такие активности заявлены на базе
                отдыха «Алые Паруса» в селе Пады. Это ещё один вариант семейного выходного рядом с домом.
              </p>
              <p className={classes.text}>
                В Ленино работает конный клуб «Жокей», где можно заниматься верховой ездой, отправиться на прогулку или
                организовать фотосессию с лошадьми. Перед поездкой уточните расписание и доступные форматы занятий.
              </p>
            </section>

            <section>
              <h2>Сильное преимущество локации — Romanovo City</h2>
              <p className={classes.text}>
                В Ленино работает инфраструктура Romanovo City: спорт и SPA с бассейном, баней, сауной и хаммамом,
                теннис, ресторан, продуктовый рынок и сервисы доставки. За повседневными покупками, тренировкой или
                отдыхом не нужно каждый раз ехать в город.
              </p>
              <p className={classes.text}>
                Для семей с дошкольниками в Romanovo City заявлен образовательный кластер с детским садом и начальной
                школой; площадка под него выбрана. Уже сейчас в спортивном комплексе есть детская игровая зона. Стадию
                реализации образовательного проекта уточняйте у застройщика.
              </p>
            </section>

            <section className={classes.faq}>
              <h2>Частые вопросы</h2>
              <details>
                <summary>Где находится посёлок?</summary>
                <p>В селе Ленино Липецкого района, в 6 км от Липецка по Воронежскому направлению.</p>
              </details>
              <details>
                <summary>Какие коммуникации предусмотрены?</summary>
                <p>Дома подключены к коммуникациям. На территории посёлка есть освещение улиц.</p>
              </details>
              <details>
                <summary>Можно ли купить дом в ипотеку?</summary>
                <p>Да, возможность покупки и актуальные условия ипотеки уточняйте у менеджера.</p>
              </details>
              <details>
                <summary>Как записаться на просмотр?</summary>
                <p>Оставьте заявку на сайте или позвоните, чтобы согласовать удобное время просмотра.</p>
              </details>
              <details>
                <summary>Где провести зимние выходные рядом с Ленино?</summary>
                <p>
                  В селе Пады база отдыха «Алые Паруса» заявляет зимние активности: тюбинг, коньки и лыжи. Перед
                  поездкой уточните режим работы и наличие снега.
                </p>
              </details>
              <details>
                <summary>Есть ли рядом занятия верховой ездой?</summary>
                <p>
                  В Ленино работает конный клуб «Жокей». По открытым данным, здесь проводят занятия верховой ездой,
                  конные прогулки и фотосессии. Перед визитом уточните расписание и условия записи.
                </p>
              </details>
              <details>
                <summary>Какая инфраструктура есть в Romanovo City?</summary>
                <p>
                  В Romanovo City работают спорт и SPA с бассейном, баней, сауной и хаммамом, теннис, ресторан,
                  продуктовый рынок и сервисы доставки.
                </p>
              </details>
              <details>
                <summary>Что предусмотрено для семей с дошкольниками?</summary>
                <p>
                  В Romanovo City заявлен образовательный кластер с детским садом и начальной школой; площадка под него
                  выбрана. В спортивном комплексе есть детская игровая зона. Сроки реализации образовательного проекта
                  уточняйте у застройщика.
                </p>
              </details>
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
