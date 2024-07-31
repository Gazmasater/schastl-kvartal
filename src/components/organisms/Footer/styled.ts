import styled from 'styled-components'

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 3rem 0 2.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  @media (min-width: 640px) {
    padding: 3rem 0 3.125rem;
  }

  @media (min-width: 1280px) {
    padding: 5.3125rem 0 3.4375rem;
  }
`

const FooterContainer = styled.div`
  position: relative;
  min-height: 6.25rem;
  text-align: center;

  @media (min-width: 640px) {
    padding: 0 0 0 10.3125rem;
    text-align: left;
  }

  @media (min-width: 1280px) {
    padding: 0 0 0 10.1875rem;
  }
`

const ImageContainer = styled.div`
  width: 7.0625rem;
  margin: 0 auto 2rem;

  @media (min-width: 640px) {
    top: 0.25rem;
    left: 0;
    width: 7.625rem;
    margin: 0;
    position: absolute;
  }

  @media (min-width: 1280px) {
    top: -1.625rem;
    width: 7.0625rem;
  }
`

const ImageLink = styled.a`
  display: block;
  position: relative;
  padding-top: 113.27434%;
`

const ImageCustom = styled.img`
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  position: absolute;
`

const MainFooterGrid = styled.div`
  width: calc(100% + 1rem);
  margin: calc(1rem / -2);

  @media (min-width: 640px) {
    flex-wrap: nowrap;
  }
`

const CopyRightText = styled.div`
  font-size: 0.75rem;
  line-height: 1.4;
  margin-left: 0.375rem;
  letter-spacing: 0.005em;
  text-transform: uppercase;

  @media (min-width: 1280px) {
    font-size: 0.875rem;
    line-height: 1.21429em;
  }
`

const SocialLinksPadding = styled.div`
  margin: -0.875rem 0.1875rem 0;

  @media (min-width: 1280px) {
    margin: -1.1875rem 3.625rem 0;
  }
`

const SocialLinksGrid = styled.div`
  justify-content: center;
  width: calc(100% + 0.75rem);
  margin: calc(0.75rem / -2);

  @media (min-width: 640px) {
    width: calc(100% + 0.25rem);
    margin: calc(0.25rrem / -2);
  }

  @media (min-width: 1280px) {
    width: calc(100% + 0.75rem);
    margin: calc(0.75rem / -2);
  }
`

const FooterMenuContainer = styled.div`
  // jss128
  @media (max-width: 639.95px) {
    display: none;
  }
`

const FooterMenuGrid = styled.div`
  width: calc(100% + 2rem);
  margin: calc(2rem / -2);
`

const FooterMenuItem = styled.div`
  padding: 0.625rem 0.5rem !important;
  max-height: 4.125rem;

  @media (min-width: 900px) {
    padding: 0.625rem 1rem !important;
  }

  @media (min-width: 1280px) {
    .jss404 {
      padding: 0.5rem 1rem !important;
    }
  }
`

const FooterMenuItemLink = styled.a`
  color: inherit;
  display: inline-block;
  padding: 0.5rem 0 0.875rem;
  transition:
    border-bottom-color 0.3s,
    opacity 0.25s;
  border-bottom: 1px solid transparent;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.21429em;
  text-decoration: none;

  &:active,
  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.9;
    border-bottom-color: #fccda2;
  }

  @media (min-width: 360px) {
    font-size: 0.9375rem;
    line-height: 1.2em;
  }

  @media (min-width: 456px) {
    font-size: 0.875rem;
    line-height: 1.21429em;
  }
`

export const Styled = {
  Footer,
  FooterContainer,
  ImageContainer,
  ImageLink,
  ImageCustom,
  MainFooterGrid,
  CopyRightText,
  SocialLinksPadding,
  SocialLinksGrid,
  FooterMenuContainer,
  FooterMenuGrid,
  FooterMenuItem,
  FooterMenuItemLink,
}
