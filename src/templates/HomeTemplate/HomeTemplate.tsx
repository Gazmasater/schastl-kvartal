import React, { FC, PropsWithChildren } from 'react'
import { Nav, Footer } from '@components'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { Styled } from './styled'

type THomeTemplateProps = {
  navData: TNavData
  footerData: TFooterData
}

export const HomeTemplate: FC<THomeTemplateProps & PropsWithChildren> = ({ children, navData, footerData }) => (
  <>
    <Nav navData={navData} />
    <Styled.MainContainer>{children}</Styled.MainContainer>
    <Footer data={footerData} />
  </>
)
