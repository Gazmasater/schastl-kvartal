import styled from 'styled-components'

const Wrapper = styled.div`
  z-index: 5;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.75rem 0;
  z-index: 10;
  position: relative;

  @media (min-width: 640px) {
    top: 0;
    left: 0;
    position: absolute;
  }
`

const Padding = styled.div`
  height: 100%;
  position: relative;
`

const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
`

type TBreadcrumbsContainerProps = {
  $color?: string
}

const BreadcrumbsContainer = styled.div<TBreadcrumbsContainerProps>`
  color: ${({ $color }) => $color || '#fff'};

  a {
    color: ${({ $color }) => $color || '#fff'};
  }
`

const CustomNav = styled.nav`
  font-size: 0.8571428571428571rem;
  font-family: Gilroy, sans-serif;
  font-weight: 400;
  line-height: 1.66;

  @media (max-width: 639.95px) {
    display: none;
  }
`

type THeadingsProps = {
  $isBlack?: boolean
  $customHeadingHexColor?: string
}

const Headings = styled.div<THeadingsProps>`
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 640px) {
    color: ${({ $isBlack, $customHeadingHexColor }) => {
      if ($customHeadingHexColor) {
        return $customHeadingHexColor
      }
      return $isBlack ? '#000' : '#fff'
    }};
  }
`

const DarkenContainer = styled.div`
  @media (min-width: 640px) {
    background: #000000c7;
    padding: 23px;
    border-radius: 30px;
  }
`

const HeadingsSpacer = styled.div`
  @media (max-width: 639.95px) {
    flex: 1 1 auto;
  }

  @media (min-width: 640px) {
    margin-top: 50px;
  }

  @media (min-width: 1080px) {
    margin-top: 105px;
  }
`

const HeadingFirst = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.25;

  @media (min-width: 900px) {
    font-size: 2.375rem;
    text-transform: uppercase;
  }

  @media (min-width: 992px) {
    font-size: 3rem;
  }
`

const HeadingSecond = styled.div`
  font-size: 1.125rem;
  max-width: 31.25rem;
  margin-top: 0.75rem;
  font-weight: 400;
  line-height: 1.3;
  text-transform: uppercase;

  @media (min-width: 640px) and (max-width: 991.95px) {
    font-size: 1.3125rem;
    margin-top: 1.125rem;
  }

  @media (min-width: 992px) {
    font-size: 1.5rem;
    margin-top: 1.625rem;
  }
`

const FeaturesContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 3.0625rem 0;
  justify-content: center;

  @media (min-width: 456px) {
    width: auto;
  }

  @media (max-width: 455.95px) {
    padding: 1.5rem 0 2.1875rem;
    max-width: 17.5rem;
  }
`

type TFeaturesItem = {
  $customFeaturesBaseColor?: string
  $customFeaturesPrimaryColor?: string
}

const FeaturesItem = styled.div<TFeaturesItem>`
  width: 50%;
  display: flex;
  padding: 0;
  position: relative;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5em;

  &:nth-child(odd) {
    color: ${({ $customFeaturesBaseColor }) => $customFeaturesBaseColor || '#000'};
    padding-right: 2em;
    justify-content: flex-start;
  }

  &:nth-child(even) {
    color: ${({ $customFeaturesBaseColor }) => $customFeaturesBaseColor || '#000'};
    padding-left: 2em;
    justify-content: flex-end;
  }

  b {
    color: ${({ $customFeaturesPrimaryColor }) => $customFeaturesPrimaryColor || '#965a46'};
    display: block;
    font-size: 2.25rem;
    margin-top: 0.33333em;
    font-weight: 700;
    line-height: 1.16em;
  }

  & + &::after {
    top: 0.16667em;
    left: 0;
    width: 1px;
    bottom: 0.16667em;
    content: '';
    position: absolute;
    background-color: rgba(32, 32, 32, 0.08);
  }

  @media (min-width: 900px) {
    width: initial;
  }

  @media (max-width: 455.95px) {
    font-size: 0.75rem;
    font-weight: 400;

    b {
      font-size: 1.5rem;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  @media (min-width: 640px) {
    height: calc(var(--screen-vh, 100) * 1vh - var(--header-height, 0));
    padding-top: calc(var(--ratio-height, 1080) / var(--ratio-width, 1920) * 100%);
  }

  @media (min-width: 640px) and (max-width: 1079.95px) {
    height: unset;
    min-height: 30rem;
    --ratio-width: 1920;
    --ratio-height: 1080;
    /* max-height: 37.5rem; */
    /* min-height: 37.5rem; */
  }

  @media (min-width: 640px) and (orientation: landscape) {
    max-height: 30rem;
    min-height: 25rem;
    --screen-vh: 50;
    padding-top: unset;
  }

  @media (min-width: 640px) and (orientation: portrait) {
    max-height: 30rem;
    min-height: 27.5rem;
    --screen-vh: 60;
    padding-top: unset;
  }

  @media (min-width: 1080px) {
    margin: 0 auto;
    max-width: 1920px;
    max-height: 980px;
    min-height: 320px;
    --screen-vh: 100;
    padding-top: unset;
    --header-height: 6.4375rem;
  }
`

const ImageContainer = styled.div`
  position: relative;

  picture {
    width: 100%;
    height: 100%;
    display: flex;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 640px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    position: absolute;
  }

  @media (min-width: 640px) and (max-width: 1079.95px) {
    img {
      object-position: left bottom;
    }
  }

  @media (min-width: 1080px) {
    img {
      object-position: center bottom;
    }
  }

  @media (max-width: 639.95px) {
    img {
      object-position: left bottom;
    }
  }

  @media (max-width: 455.95px) {
    img {
      object-position: center bottom;
    }
  }
`

export const Styled = {
  Wrapper,
  Container,
  Padding,
  FlexWrapper,
  BreadcrumbsContainer,
  CustomNav,
  Headings,
  DarkenContainer,
  HeadingsSpacer,
  HeadingFirst,
  HeadingSecond,
  FeaturesContainer,
  FeaturesItem,
  ImageWrapper,
  ImageContainer,
}
