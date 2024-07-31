import React, { FC } from 'react'
import { HomeTemplate } from '@templates'
import { TNavData } from '@localTypes/navData'

type THomePageProps = {
  navData: TNavData
}

export const HomePage: FC<THomePageProps> = ({ navData }) => {
  return <HomeTemplate navData={navData} />
}
