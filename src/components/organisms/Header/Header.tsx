import React, { FC } from 'react'
import { Styled } from './styled'

export const Header: FC = () => {
  return (
    <Styled.Header $isNavOpen={false}>
      <Styled.Container>
        <Styled.Logo>
          <Styled.LogoLink title="Главная страница" href="/">
            <Styled.Image src="/pic/logo-default.svg" width="113" height="128" alt="Логотип" draggable="false" />
          </Styled.LogoLink>
        </Styled.Logo>
        <div />
        <Styled.LinksRight>
          <div className="MuiGrid-root jss35 jss40 jss109 MuiGrid-container MuiGrid-wrap-xs-nowrap">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto">
              <a
                className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss142 jss149 jss143 MuiTypography-colorPrimary"
                href="#buildings"
              >
                Будинки
              </a>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto">
              <a
                className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss142 jss149 jss143 MuiTypography-colorPrimary"
                href="#3d-tour"
              >
                3D тур
              </a>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto">
              <a
                className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss142 jss149 jss143 MuiTypography-colorPrimary"
                href="#gallery"
              >
                Галерея
              </a>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto">
              <a
                className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss142 jss149 jss143 MuiTypography-colorPrimary"
                href="#infrastructure"
              >
                Інфраструктура
              </a>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto">
              <a
                className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss142 jss149 jss143 MuiTypography-colorPrimary"
                href="/villaggo/hid-budivnytstva"
              >
                Хід будівництва
              </a>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto">
              <a
                className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss142 jss149 jss143 MuiTypography-colorPrimary"
                href="/aktsii"
              >
                Акції
              </a>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto">
              <a
                className="MuiTypography-root MuiLink-root MuiLink-underlineHover jss142 jss149 jss143 MuiTypography-colorPrimary"
                href="/kontakty"
              >
                Контакти
              </a>
            </div>
          </div>
        </Styled.LinksRight>
        <button
          className="MuiButtonBase-root MuiButton-root MuiButton-text jss14 jss10 MuiButton-colorInherit"
          type="button"
        >
          <span className="MuiButton-label">
            <svg className="icon jss15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 13" fill="none">
              <rect width="32" height="1" fill="currentColor" />
              <rect y="6" width="32" height="1" fill="currentColor" />
              <rect x="11" y="12" width="21" height="1" fill="currentColor" />
            </svg>
          </span>
          <span className="MuiTouchRipple-root" />
        </button>
      </Styled.Container>
    </Styled.Header>
  )
}
