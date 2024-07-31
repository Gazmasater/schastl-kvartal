import React, { FC, PropsWithChildren } from 'react'
import { Header } from '@components'
import { TNavData } from '@localTypes/navData'

type THomeTemplateProps = {
  navData: TNavData
}

export const HomeTemplate: FC<THomeTemplateProps & PropsWithChildren> = ({ children, navData }) => (
  <>
    <Header navData={navData} />
    {children}
  </>
)
