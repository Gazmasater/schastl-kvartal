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

const LinksRight = styled.div`
  @media (min-width: 456px) {
    margin-bottom: 0.25rem;
  }
`

export const Styled = { Header, Container, Logo, LogoLink, Image, LinksRight }
