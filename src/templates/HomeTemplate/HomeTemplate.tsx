import React, { FC, PropsWithChildren } from 'react'
import { Header } from '@components'

export const HomeTemplate: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)
