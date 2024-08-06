import React, { FC } from 'react'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { Styled } from './styled'

export const MainPageHeader: FC<TMainPageHeader> = ({ data }) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Padding className="MuiContainer-root MuiContainer-maxWidthXl">
          <Styled.FlexWrapper>
            <nav className="MuiTypography-root MuiBreadcrumbs-root MuiTypography-body1 MuiTypography-colorTextSecondary">
              <ol className="MuiBreadcrumbs-ol">
                <li className="MuiBreadcrumbs-li">
                  <a
                    className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorTextPrimary"
                    href={data.mainPageLink}
                  >
                    {data.mainPageLabel}
                  </a>
                </li>
                <li aria-hidden="true" className="MuiBreadcrumbs-separator">
                  {data.separator}
                </li>
                <li className="MuiBreadcrumbs-li">
                  <span className="MuiTypography-root MuiTypography-colorTextSecondary">{data.subitemText}</span>
                </li>
              </ol>
            </nav>
            <Styled.Headings $isBlack={data.blackHeadings}>
              <Styled.HeadingsSpacer />
              <Styled.HeadingFirst className="MuiTypography-root MuiTypography-h1">
                {data.headingFirst}
              </Styled.HeadingFirst>
              {data.headingSecond && (
                <Styled.HeadingSecond className="MuiTypography-root MuiTypography-subtitle1">
                  {data.headingSecond}
                </Styled.HeadingSecond>
              )}
              {data.features && (
                <Styled.FeaturesContainer>
                  <Styled.FeaturesItem>
                    <div>
                      <div>{data.features.first.label}</div>
                      <b>{data.features.first.value}</b>
                    </div>
                  </Styled.FeaturesItem>
                  <Styled.FeaturesItem>
                    <div>
                      <div>{data.features.first.label}</div>
                      <b>{data.features.first.value}</b>
                    </div>
                  </Styled.FeaturesItem>
                </Styled.FeaturesContainer>
              )}
            </Styled.Headings>
          </Styled.FlexWrapper>
        </Styled.Padding>
      </Styled.Container>
      <Styled.ImageWrapper>
        <Styled.ImageContainer>
          <picture>
            <source media="(max-width: 456px)" srcSet={data.mainPageImageXs} />
            <source media="(max-width: 1080px)" srcSet={data.mainPageImageMd} />
            <img alt="" draggable="false" src={data.mainPageImageLg} loading="lazy" />
          </picture>
        </Styled.ImageContainer>
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  )
}
