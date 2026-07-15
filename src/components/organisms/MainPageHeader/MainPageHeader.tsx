/* eslint-disable react/no-unknown-property */
import React, { FC } from 'react'
import Head from 'next/head'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { Styled } from './styled'

type TMainPageHeaderProps = {
  data: TMainPageHeader
}

export const MainPageHeader: FC<TMainPageHeaderProps> = ({ data }) => {
  return (
    <Styled.Wrapper>
      <Head>
        <link rel="preload" as="image" href={data.mainPageImageXs} media="(max-width: 456px)" fetchPriority="high" />
        <link
          rel="preload"
          as="image"
          href={data.mainPageImageMd}
          media="(min-width: 456.01px) and (max-width: 1080px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={data.mainPageImageLg}
          media="(min-width: 1080.01px)"
          fetchPriority="high"
        />
      </Head>
      <Styled.Container>
        <Styled.Padding className="MuiContainer-root MuiContainer-maxWidthXl">
          <Styled.FlexWrapper>
            {data.showBreadcrumbs !== false && (
              <Styled.BreadcrumbsContainer $color={data.breadcrumbsColor}>
                <nav className="MuiTypography-root MuiBreadcrumbs-root MuiTypography-body1">
                  <ol className="MuiBreadcrumbs-ol">
                    <li className="MuiBreadcrumbs-li">
                      <a className="MuiTypography-root MuiLink-root MuiLink-underlineHover" href={data.mainPageLink}>
                        {data.mainPageLabel}
                      </a>
                    </li>
                    <li aria-hidden="true" className="MuiBreadcrumbs-separator">
                      {data.separator}
                    </li>
                    <li className="MuiBreadcrumbs-li">
                      <span className="MuiTypography-root">{data.subitemText}</span>
                    </li>
                  </ol>
                </nav>
              </Styled.BreadcrumbsContainer>
            )}
            <Styled.Headings $isBlack={data.blackHeadings} $customHeadingHexColor={data.customHeadingHexColor}>
              <Styled.HeadingsSpacer />
              <Styled.DarkenContainer $bgColor={data.darkenBgColor}>
                <Styled.HeadingFirst className="MuiTypography-root MuiTypography-h1">
                  {data.headingFirst}
                </Styled.HeadingFirst>
                {data.headingSecond && (
                  <Styled.HeadingSecond
                    className="MuiTypography-root MuiTypography-subtitle1"
                    $fontFamily={data.headingSecondProps?.fontFamily}
                    $fontSizeDefault={data.headingSecondProps?.fontSizeDefault}
                    $fontWeightDefault={data.headingSecondProps?.fontWeightDefault}
                    $lineHeightDefault={data.headingSecondProps?.lineHeightDefault}
                    $fontSizeMiddleViewPort={data.headingSecondProps?.fontSizeMiddleViewPort}
                    $fontWeightMiddleViewPort={data.headingSecondProps?.fontWeightMiddleViewPort}
                    $lineHeightMiddleViewPort={data.headingSecondProps?.lineHeightMiddleViewPort}
                    $fontSizeBigViewPort={data.headingSecondProps?.fontSizeBigViewPort}
                    $fontWeightBigViewPort={data.headingSecondProps?.fontWeightBigViewPort}
                    $lineHeightBigViewPort={data.headingSecondProps?.lineHeightBigViewPort}
                  >
                    {data.headingSecond}
                  </Styled.HeadingSecond>
                )}
                {data.features && (
                  <Styled.FeaturesContainer>
                    <Styled.FeaturesItem
                      $customFeaturesBaseColor={data.customFeaturesBaseColor}
                      $customFeaturesPrimaryColor={data.customFeaturesPrimaryColor}
                    >
                      <div>
                        <div>{data.features.first.label}</div>
                        <b>{data.features.first.value}</b>
                      </div>
                    </Styled.FeaturesItem>
                    <Styled.FeaturesItem
                      $customFeaturesBaseColor={data.customFeaturesBaseColor}
                      $customFeaturesPrimaryColor={data.customFeaturesPrimaryColor}
                    >
                      <div>
                        <div>{data.features.second.label}</div>
                        <b>{data.features.second.value}</b>
                      </div>
                    </Styled.FeaturesItem>
                  </Styled.FeaturesContainer>
                )}
              </Styled.DarkenContainer>
            </Styled.Headings>
          </Styled.FlexWrapper>
        </Styled.Padding>
      </Styled.Container>
      <Styled.ImageWrapper>
        <Styled.ImageContainer>
          <picture>
            <source media="(max-width: 456px)" srcSet={data.mainPageImageXs} />
            <source media="(max-width: 1080px)" srcSet={data.mainPageImageMd} />
            <img
              alt=""
              draggable="false"
              src={data.mainPageImageLg}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </Styled.ImageContainer>
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  )
}
