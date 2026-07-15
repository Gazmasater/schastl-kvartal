import React, { FC, PropsWithChildren } from 'react'
import { Nav, Footer } from '@components'
import { TNav } from '@localTypes/nav'
import { TFooter } from '@localTypes/footer'
import { Styled } from './styled'

type THomeTemplateProps = {
  navData: TNav
  footerData: TFooter
}

export const HomeTemplate: FC<THomeTemplateProps & PropsWithChildren> = ({ children, navData, footerData }) => (
  <>
    <Nav navData={navData} />
    <Styled.MainContainer as="main">{children}</Styled.MainContainer>
    <Footer data={footerData} />
  </>
)
