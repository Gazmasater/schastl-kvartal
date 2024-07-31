import React, { FC, useState } from 'react'
import { TNavData } from '@localTypes/navData'
import { BlurContainer } from './molecules'
import { Styled } from './styled'

type THeaderProps = {
  navData: TNavData
}

export const Header: FC<THeaderProps> = ({ navData }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <Styled.Header $isNavOpen={isNavOpen} className="header">
        <Styled.Container>
          <Styled.Logo>
            <Styled.LogoLink title={navData.title} href={navData.url}>
              <Styled.Image
                src={isNavOpen ? navData.logoUrlWhite : navData.logoUrl}
                width="113"
                height="128"
                alt={navData.altText}
                draggable="false"
              />
            </Styled.LogoLink>
          </Styled.Logo>
          <Styled.MiddleContainer>
            <div>
              <Styled.MobPhone>
                <Styled.PhoneSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" fill="none">
                  <path
                    d="M15.3471 12.1371L12.4645 9.25465L9.74875 11.1099C9.12376 10.6534 7.95604 9.71539 7.32122 9.08074C6.69974 8.45931 5.86982 7.40546 5.45435 6.82222L7.3331 4.12178L4.13525 0.924998C3.8562 0.646978 3.5095 0.5 3.13258 0.5C2.56732 0.5 1.95124 0.829476 1.30141 1.47926C0.86653 1.91418 0.151984 2.88356 0.252936 4.48932C0.381842 6.53993 1.79095 8.92348 4.44122 11.5738C7.49552 14.628 9.48017 16.5 11.6995 16.5C11.7852 16.5 11.871 16.4971 11.9565 16.4914C12.2767 16.4701 12.6089 16.3888 13.0339 16.2277L13.0384 16.2259C13.4344 16.0709 14.1832 15.5781 14.7911 14.9702C15.4322 14.3291 15.757 13.7084 15.7566 13.1251C15.7564 12.7457 15.6146 12.4039 15.3471 12.1371ZM14.1616 14.3407C13.6143 14.888 12.9766 15.2933 12.7158 15.3962C12.3779 15.5241 12.1254 15.588 11.8973 15.6031C9.96143 15.7322 8.06492 13.9384 5.07071 10.9442C-0.485112 5.38836 1.26286 2.77682 1.93094 2.10874C2.39426 1.64542 2.82099 1.39023 3.13258 1.39023C3.2747 1.39023 3.39364 1.4428 3.50634 1.55511L6.17691 4.22487L4.37695 6.81207L4.54008 7.06307C4.90632 7.62664 5.95128 8.96991 6.69173 9.71036C7.43708 10.4554 8.90717 11.6261 9.49668 12.0215L9.74693 12.1894L12.3571 10.4062L14.718 12.7671C14.8177 12.8666 14.8663 12.9839 14.8664 13.1257C14.8665 13.3161 14.7751 13.7272 14.1616 14.3407Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.1616 14.3407C13.6143 14.888 12.9766 15.2933 12.7158 15.3962C12.3779 15.5241 12.1254 15.588 11.8973 15.6031C9.96143 15.7322 8.06492 13.9384 5.07071 10.9442C-0.485112 5.38836 1.26286 2.77682 1.93094 2.10874C2.39426 1.64542 2.82099 1.39023 3.13258 1.39023C3.2747 1.39023 3.39364 1.4428 3.50634 1.55511L6.17691 4.22487L4.37695 6.81207L4.54008 7.06307C4.90632 7.62664 5.95128 8.96991 6.69173 9.71036C7.43708 10.4554 8.90717 11.6261 9.49668 12.0215L9.74693 12.1894L12.3571 10.4062L14.718 12.7671C14.8177 12.8666 14.8663 12.9839 14.8664 13.1257C14.8665 13.3161 14.7751 13.7272 14.1616 14.3407Z"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                </Styled.PhoneSVG>
                <Styled.PhoneText>
                  <a href={navData.phoneLink}>{navData.phone}</a>
                </Styled.PhoneText>
                {/* <Styled.PhonePopupSVG viewBox="0 0 12 13" role="presentation">
                  <rect y="0.5" width="12" height="12" rx="6" fill="currentColor" />
                  <path
                    d="M6.68373 8.15217C6.37985 8.61594 5.62015 8.61594 5.31627 8.15217L3.60695 5.54348C3.30307 5.07971 3.68292 4.5 4.29068 4.5L7.70932 4.5C8.31708 4.5 8.69693 5.07971 8.39305 5.54348L6.68373 8.15217Z"
                    fill="inherit"
                  />
                </Styled.PhonePopupSVG> */}
              </Styled.MobPhone>
            </div>
          </Styled.MiddleContainer>
          <Styled.LinksRight>
            <Styled.LinksRightContainer className="MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap">
              {navData.navLinks.map(({ label, url }) => (
                <div key={label} className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto">
                  <Styled.RightLink
                    className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                    href={url}
                  >
                    {label}
                  </Styled.RightLink>
                </div>
              ))}
            </Styled.LinksRightContainer>
          </Styled.LinksRight>
          <Styled.CustomButton type="button" onClick={() => setIsNavOpen(!isNavOpen)}>
            <Styled.CustomButtonLabel>
              {isNavOpen ? (
                <Styled.CustomSVGCross xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none">
                  <rect
                    x="2.05859"
                    width="31.457"
                    height="1.96606"
                    transform="rotate(45 2.05859 0)"
                    fill="currentColor"
                  />
                  <rect
                    x="1.07422"
                    y="22.6099"
                    width="31.457"
                    height="1.96606"
                    transform="rotate(-45 1.07422 22.6099)"
                    fill="currentColor"
                  />
                </Styled.CustomSVGCross>
              ) : (
                <Styled.CustomSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 13" fill="none">
                  <rect width="32" height="1" fill="currentColor" />
                  <rect y="6" width="32" height="1" fill="currentColor" />
                  <rect x="11" y="12" width="21" height="1" fill="currentColor" />
                </Styled.CustomSVG>
              )}
            </Styled.CustomButtonLabel>
            <span className="MuiTouchRipple-root" />
          </Styled.CustomButton>
        </Styled.Container>
      </Styled.Header>
      <BlurContainer navLinks={navData.navLinks} socialLinks={navData.socialLinks} isNavOpen={isNavOpen} />
    </>
  )
}
