import styled from 'styled-components'

type TBlurContainerProps = {
  $isNavOpen: boolean
}

const BlurContainer = styled.div<TBlurContainerProps>`
  top: 0;
  left: 0;
  color: #fff;
  width: 100%;
  bottom: 0;
  opacity: ${({ $isNavOpen }) => ($isNavOpen ? 1 : 0)};
  z-index: 990;
  position: fixed;
  min-width: 320px;
  min-height: 320px;
  transition:
    opacity 0.35s ease,
    visibility 0.35s ease;
  visibility: ${({ $isNavOpen }) => ($isNavOpen ? 'visible' : 'hidden')};
  will-change: opacity, visibility, transform;
  backdrop-filter: blur(16px);
  background-color: rgba(0, 0, 0, 0.4);
  transition-duration: 0.5s, 0.5s;
`

const PaddingContainer = styled.div`
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: stretch;
  padding-top: 6.25rem;
  flex-direction: column;
`

const FlexContainer = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
  align-items: flex-start;
  padding-top: 1.25rem;
  flex-direction: column;
`

const MenuContainer = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  flex: 1;
  transition: transform 0.35s ease;
  transform: translateY(0);
  transition-duration: 0.5s;
`

const Menu = styled.div`
  flex: 1 0 auto;

  a,
  span {
    text-shadow: 0 0 30px black;
  }

  @media (max-width: 455.95px) {
    a,
    span {
      font-size: 1.25rem;
    }
  }
`

const MenuLink = styled.a`
  color: inherit;
  display: inline-block;
  padding: 0.5rem 0 0.875rem;
  transition:
    border-bottom-color 0.3s,
    opacity 0.25s;
  border-bottom: 1px solid transparent;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.21429em;
  margin-bottom: 0.5rem;

  &:active,
  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.9;
    border-bottom-color: #fccda2;
  }

  @media (min-width: 1280px) {
    font-size: 1rem;
    line-height: 1.1875em;
  }
`

const FooterContainer = styled.div`
  color: #fff;
  right: 0;
  width: 100%;
  bottom: 0;
  z-index: 10;
  position: absolute;
  padding-bottom: 1.875rem;

  @media (max-height: 560px) {
    right: var(--ui-css-baseline-container-x-gap);
    width: 60px;
    padding-bottom: 1.5rem;

    & > div {
      padding: 0;
    }
  }
`

const FooterFlexContainer = styled.div`
  display: flex;
`

const FooterCustomGrid = styled.div`
  width: calc(100% + 1rem);
  margin: calc(1rem / -2);
  justify-content: center;
`

export const Styled = {
  BlurContainer,
  PaddingContainer,
  FlexContainer,
  MenuContainer,
  Menu,
  MenuLink,
  FooterContainer,
  FooterFlexContainer,
  FooterCustomGrid,
}
