import React, { FC } from 'react'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { Styled } from './styled'

type TMainPageHeaderProps = {
  data: TMainPageHeader
}

export const MainPageHeader: FC<TMainPageHeaderProps> = ({ data }) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Padding className="MuiContainer-root MuiContainer-maxWidthXl">
          <Styled.FlexWrapper>
            <Styled.BreadcrumbsContainer $color={data.breadcrumbsColor}>
              {/* <nav className="MuiTypography-root MuiBreadcrumbs-root MuiTypography-body1 MuiTypography-colorTextSecondary"> */}
              <nav className="MuiTypography-root MuiBreadcrumbs-root MuiTypography-body1">
                <ol className="MuiBreadcrumbs-ol">
                  <li className="MuiBreadcrumbs-li">
                    <a
                      // className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorTextPrimary"
                      className="MuiTypography-root MuiLink-root MuiLink-underlineHover"
                      href={data.mainPageLink}
                    >
                      {data.mainPageLabel}
                    </a>
                  </li>
                  <li aria-hidden="true" className="MuiBreadcrumbs-separator">
                    {data.separator}
                  </li>
                  <li className="MuiBreadcrumbs-li">
                    {/* <span className="MuiTypography-root MuiTypography-colorTextSecondary">{data.subitemText}</span> */}
                    <span className="MuiTypography-root">{data.subitemText}</span>
                  </li>
                </ol>
              </nav>
            </Styled.BreadcrumbsContainer>
            <Styled.Headings $isBlack={data.blackHeadings} $customHeadingHexColor={data.customHeadingHexColor}>
              <Styled.HeadingsSpacer />
              <Styled.DarkenContainer>
                <Styled.HeadingFirst className="MuiTypography-root MuiTypography-h1">
                  {data.headingFirst}
                </Styled.HeadingFirst>
                {data.headingSecond && (
                  <Styled.HeadingSecond
                    className="MuiTypography-root MuiTypography-subtitle1"
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
            <img alt="" draggable="false" src={data.mainPageImageLg} loading="lazy" />
          </picture>
        </Styled.ImageContainer>
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  )
}
