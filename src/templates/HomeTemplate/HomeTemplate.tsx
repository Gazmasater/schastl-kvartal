import React, { FC, PropsWithChildren } from 'react'
import { Nav, Footer } from '@components'
import { TNavData } from '@localTypes/navData'
import { Styled } from './styled'

type THomeTemplateProps = {
  navData: TNavData
}

export const HomeTemplate: FC<THomeTemplateProps & PropsWithChildren> = ({ children, navData }) => (
  <>
    <Nav navData={navData} />
    <Styled.MainContainer>{children}</Styled.MainContainer>
    <Footer />
  </>
)
