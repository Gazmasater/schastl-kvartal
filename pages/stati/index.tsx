import React from 'react'
import { Meta } from '@components'
import { HomeTemplate } from '@templates'
import { FooterMock } from '@mocks/footer'
import { NavMock } from '@mocks/nav'
import { Articles } from '@mocks/articles'
import classes from '../../src/pages/NearbyParkovyeKvartalyPage/NearbyParkovyeKvartalyPage.module.css'

const ArticlesPage: React.FC = () => (
  <>
    <Meta
      title="Статьи о покупке дома в Липецком районе — «Счастливый Квартал»"
      description="Полезные статьи о выборе готового дома, участка и жизни за городом рядом с Липецком."
    />
    <HomeTemplate navData={NavMock} footerData={FooterMock}>
      <article className={classes.page}>
        <div className="MuiContainer-root MuiContainer-maxWidthXl">
          <div className={classes.content}>
            <p className={classes.eyebrow}>Полезные материалы</p>
            <h1>Статьи о покупке дома</h1>
            <p className={classes.lead}>
              Собрали практические материалы о выборе готового дома, участка и загородной жизни рядом с Липецком.
            </p>
            <section className={classes.articles} aria-label="Список статей">
              {Articles.map(article => (
                <a className={classes.articleCard} href={`/stati/${article.slug}`} key={article.slug}>
                  <span>{article.eyebrow}</span>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <b>Читать статью →</b>
                </a>
              ))}
            </section>
          </div>
        </div>
      </article>
    </HomeTemplate>
  </>
)

export default ArticlesPage
