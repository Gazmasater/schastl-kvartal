import React, { FC, PropsWithChildren } from 'react'
import { Header, Footer, Spacer, NonFooterWrapper } from '@components'

export const HomeTemplate: FC<PropsWithChildren> = ({ children }) => (
  <>
    <NonFooterWrapper>
      <Header />
      {children}
      <Spacer />
    </NonFooterWrapper>
    <Footer />
  </>
)
