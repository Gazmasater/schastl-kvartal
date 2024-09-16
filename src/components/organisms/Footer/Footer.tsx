import React, { FC } from 'react'
import { TFooter } from '@localTypes/footer'
import { Styled } from './styled'

type TFooterProps = {
  data: TFooter
}

export const Footer: FC<TFooterProps> = ({ data }) => {
  return (
    <Styled.Footer>
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <Styled.FooterContainer>
          <Styled.ImageContainer>
            <Styled.ImageLink title={data.imageTitle} href={data.imageLinkUrl}>
              <Styled.ImageCustom src={data.imageUrl} width="113" height="128" alt={data.imageAlt} draggable="false" />
            </Styled.ImageLink>
          </Styled.ImageContainer>
          <Styled.MainFooterGrid className="MuiGrid-root MuiGrid-container">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-true">
              <Styled.CopyRightText>{data.copyrightText}</Styled.CopyRightText>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-auto">
              <Styled.SocialLinksPadding>
                {data.socialLinks && (
                  <Styled.SocialLinksGrid className="MuiGrid-root MuiGrid-container">
                    {data.socialLinks.youtube && (
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto MuiGrid-grid-md-auto">
                        <a
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
                          aria-disabled="false"
                          title={data.socialLinks.youtube.title}
                          href={data.socialLinks.youtube.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="MuiIconButton-label">
                            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                              <path
                                fill="currentColor"
                                d="M25.282 4.678l-18.563 0c-3.38,0 -6.129,2.759 -6.129,6.148l0 10.348c0,3.39 2.749,6.147 6.129,6.147l18.563 0c3.379,0 6.128,-2.758 6.128,-6.147l0 -10.348c0,-3.389 -2.749,-6.148 -6.128,-6.148zm4.871 16.496c0,2.697 -2.186,4.89 -4.871,4.89l-18.563 0c-2.686,0 -4.871,-2.194 -4.871,-4.89l0 -10.348c0,-2.696 2.185,-4.889 4.871,-4.889l18.563 0c2.685,0 4.871,2.193 4.871,4.889l0 10.348z"
                              />
                              <path
                                fill="currentColor"
                                d="M21.574 15.773l-8.715 -5.104c-0.194,-0.114 -0.435,-0.116 -0.63,-0.004 -0.196,0.112 -0.317,0.32 -0.317,0.546l0 10.208c0,0.225 0.121,0.434 0.316,0.546 0.097,0.056 0.205,0.083 0.314,0.083 0.109,0 0.219,-0.029 0.317,-0.086l8.715 -5.103c0.192,-0.113 0.311,-0.32 0.311,-0.543 0,-0.223 -0.118,-0.431 -0.311,-0.543zm-8.403 4.549l0 -8.014 6.84 4.007 -6.84 4.007z"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    )}
                    {data.socialLinks.facebook && (
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto MuiGrid-grid-md-auto">
                        <a
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
                          aria-disabled="false"
                          title={data.socialLinks.facebook.title}
                          href={data.socialLinks.facebook.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="MuiIconButton-label">
                            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                              <path
                                fill="currentColor"
                                d="M20.835 8.29l2.347 0 0 -4.288 -4.267 0c-0.356,-0.014 -4.695,-0.097 -5.82,4.192 -0.017,0.045 -0.376,1.065 -0.376,3.448l-3.903 0.012 0 4.497 3.907 -0.012 0 11.861 5.969 0 0 -11.85 3.95 0 0 -4.509 -3.95 0 0 -1.418c0,-0.882 0.372,-1.933 2.143,-1.933zm0.82 4.338l0 2.534 -3.951 0 0 11.85 -3.993 0 0 -11.863 -3.907 0.011 0 -2.522 3.918 -0.011 -0.011 -0.502c-0.051,-2.524 0.309,-3.586 0.325,-3.637 0.971,-3.694 4.678,-3.508 4.837,-3.498l3.322 0 0 2.313 -1.36 0c-2.308,0 -3.13,1.508 -3.13,2.919l0 2.406 3.95 0z"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    )}
                    {data.socialLinks.insta && (
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto MuiGrid-grid-md-auto">
                        <a
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
                          aria-disabled="false"
                          title={data.socialLinks.insta.title}
                          href={data.socialLinks.insta.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="MuiIconButton-label">
                            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                              <path
                                fill="currentColor"
                                d="M21.485 4.039l-10.97 0c-3.571,0 -6.476,2.905 -6.476,6.476l0 10.971c0,3.57 2.905,6.475 6.476,6.475l10.971 0c3.57,0 6.475,-2.905 6.475,-6.475l0 -10.971c0,-3.571 -2.905,-6.476 -6.476,-6.476l0 0zm5.073 17.447c0,2.797 -2.275,5.072 -5.073,5.072l-10.97 0c-2.798,0 -5.073,-2.275 -5.073,-5.072l0 -10.971c0,-2.798 2.275,-5.073 5.073,-5.073l10.971 0c2.797,0 5.072,2.275 5.072,5.073l0 10.971z"
                              />
                              <path
                                fill="currentColor"
                                d="M16 9.459c-3.607,0 -6.541,2.934 -6.541,6.541 0,3.607 2.934,6.541 6.541,6.541 3.606,0 6.541,-2.934 6.541,-6.541 0,-3.607 -2.935,-6.541 -6.541,-6.541zm0 11.679c-2.833,0 -5.139,-2.304 -5.139,-5.138 0,-2.833 2.306,-5.138 5.139,-5.138 2.833,0 5.138,2.305 5.138,5.138 0,2.834 -2.305,5.138 -5.138,5.138z"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    )}
                  </Styled.SocialLinksGrid>
                )}
              </Styled.SocialLinksPadding>
            </div>
            <Styled.FooterMenuContainer className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-auto">
              <Styled.FooterMenuGrid className="MuiGrid-root MuiGrid-container">
                {data.footerLinks.map(({ url, label }) => (
                  <Styled.FooterMenuItem
                    key={label}
                    className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-auto"
                  >
                    <Styled.FooterMenuItemLink
                      className="MuiTypography-root MuiLink-root MuiLink-underlineHover MuiTypography-colorPrimary"
                      href={url}
                    >
                      {label}
                    </Styled.FooterMenuItemLink>
                  </Styled.FooterMenuItem>
                ))}
              </Styled.FooterMenuGrid>
            </Styled.FooterMenuContainer>
          </Styled.MainFooterGrid>
        </Styled.FooterContainer>
      </div>
    </Styled.Footer>
  )
}
