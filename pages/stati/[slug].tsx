/* eslint-disable react/prop-types */
import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Meta } from '@components'
import { HomeTemplate } from '@templates'
import { FooterMock } from '@mocks/footer'
import { NavMock } from '@mocks/nav'
import { Articles, getArticleBySlug, TArticle } from '@mocks/articles'
import classes from '../../src/pages/NearbyParkovyeKvartalyPage/NearbyParkovyeKvartalyPage.module.css'

type TArticlePageProps = {
  article: TArticle
}

const ArticlePage: NextPage<TArticlePageProps> = ({ article }) => (
  <>
    <Meta
      title={`${article.title} — «Счастливый Квартал»`}
      description={article.description}
      structuredData={{
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        author: { '@type': 'Organization', name: 'Счастливый Квартал' },
        publisher: { '@type': 'Organization', name: 'Счастливый Квартал' },
      }}
    />
    <HomeTemplate navData={NavMock} footerData={FooterMock}>
      <article className={classes.page}>
        <div className="MuiContainer-root MuiContainer-maxWidthXl">
          <div className={classes.content}>
            <p className={classes.eyebrow}>{article.eyebrow}</p>
            <h1>{article.title}</h1>
            <p className={classes.lead}>{article.lead}</p>

            {article.sections.map(section => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map(paragraph => (
                  <p className={classes.text} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className={classes.features}>
                    {section.list.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {article.faq && (
              <section className={classes.faq}>
                <h2>Частые вопросы</h2>
                {article.faq.map(item => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </section>
            )}

            <a className={classes.cta} href="/doma-v-lipetskom-rayone">
              Посмотреть готовые дома
            </a>
          </div>
        </div>
      </article>
    </HomeTemplate>
  </>
)

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Articles.map(article => ({ params: { slug: article.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<TArticlePageProps> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : undefined
  const article = getArticleBySlug(slug)

  if (!article) {
    return { notFound: true }
  }

  return { props: { article } }
}

export default ArticlePage
