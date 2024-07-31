import styled from 'styled-components'

type THeaderProps = {
  $isNavOpen: boolean
}

const Header = styled.header<THeaderProps>`
  color: ${({ $isNavOpen }) => ($isNavOpen ? '#fff' : '#202020')};
  padding: 1rem 0;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  border-bottom: 1px solid rgba(32, 32, 32, 0.1);
  border-bottom-color: ${({ $isNavOpen }) => ($isNavOpen ? 'transparent' : 'rgba(32, 32, 32, 0.1)')};
  background-color: ${({ $isNavOpen }) => ($isNavOpen ? 'transparent' : 'rgba(255, 255, 255, 0.9)')};
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  position: fixed;
  min-width: 320px;
`

const Container = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3.75rem;
  padding-right: 3.75rem;

  display: flex;
  align-items: flex-end;
  padding-bottom: 0.3125rem;

  @media (max-width: 1200px) {
    align-items: center;
    justify-content: center;
  }
`

const Logo = styled.div`
  width: 2.625rem;
  margin-top: -0.3125rem;
  flex-shrink: 0;
  margin-right: 1.25rem;

  @media (min-width: 360px) {
    margin-right: 1.875rem;
  }

  @media (min-width: 456px) {
    width: 3.875rem;
    margin-right: 2.25rem;
  }

  @media (min-width: 640px) {
    margin-right: 4.93421%;
  }
`

const LogoLink = styled.a`
  display: block;
  position: relative;
  padding-top: 113.27434%;
`

const Image = styled.img`
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  position: absolute;
`

const MiddleContainer = styled.div`
  flex-grow: 1;
  margin-bottom: -1.375rem;
  min-width: 135px;
  margin-right: 5px;

  @media (min-width: 640px) {
    display: flex;
    margin-bottom: 0.25rem;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  @media (min-width: 1200px) {
    display: block;
  }
`

const MobPhone = styled.div`
  display: flex;
  padding: 0.4375rem 0 0 1rem;
  align-items: center;

  @media (min-width: 1200px) {
    display: none;
  }

  @media (max-width: 639.95px) {
    padding: 0;
    margin-bottom: 0.375rem;
  }
`

const PhoneSVG = styled.svg`
  color: #79483c;
  width: 1rem;
  margin-right: 0.375rem;
`

const PhoneText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.15;
  border-bottom: 1px dashed #d8d8d8;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const PhonePopupSVG = styled.svg`
  fill: #79483c;
  color: #e8e8e8;
  width: 0.75rem;
  margin-left: 0.375rem;
`

const LinksRight = styled.div`
  @media (min-width: 456px) {
    margin-bottom: 0.25rem;
  }
  @media (max-width: 1199.95px) {
    display: none;
  }
`

export const LinksRightContainer = styled.div`
  width: calc(100% + 0.75rem);
  margin: calc(0.75rem / -2);
`

export const RightLink = styled.a`
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

const CustomButton = styled.button`
  width: 2.625rem;
  height: 2.625rem;
  margin-bottom: -0.25rem;

  margin: 0;
  padding: 6px 8px;
  border: 0;
  outline: 0;
  border-color: currentColor;
  color: inherit;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-size: 1rem;
  box-sizing: border-box;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: Gilroy, sans-serif;
  font-weight: 400;
  line-height: 1.75em;

  @media (min-width: 360px) {
    width: 3rem;
    height: 3rem;
    margin-bottom: -0.5rem;
  }

  @media (min-width: 456px) {
    width: 3.375rem;
    height: 3.375rem;
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`

const CustomButtonLabel = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`

const CustomSVG = styled.svg`
  width: 1.875rem;
  height: auto;

  @media (min-width: 360px) {
    width: 2rem;
  }

  @media (min-width: 456px) {
    width: 2.125rem;
  }
`

const CustomSVGCross = styled.svg`
  width: 1.0625rem;
  height: auto;

  @media (min-width: 360px) {
    width: 1.3125rem;
  }

  @media (min-width: 456px) {
    width: 1.375rem;
  }
`

export const Styled = {
  Header,
  Container,
  Logo,
  LogoLink,
  Image,
  MiddleContainer,
  MobPhone,
  PhoneSVG,
  PhoneText,
  PhonePopupSVG,
  LinksRight,
  LinksRightContainer,
  RightLink,
  CustomButton,
  CustomButtonLabel,
  CustomSVG,
  CustomSVGCross,
}
