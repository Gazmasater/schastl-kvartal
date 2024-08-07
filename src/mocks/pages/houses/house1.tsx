import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { THouseTypeInfo } from '@localTypes/houseTypeInfo'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import { TBookCallback } from '@localTypes/bookCallback'
import { TFooterContacts } from '@localTypes/footerContacts'
import { Metas } from '../../meta'
import { NavMock } from '../../nav'
import { FooterMock } from '../../footer'
import { houseTypeInfoExampleMock } from '../../houseTypeInfos'
import { ThreeHousesRowMock } from '../../threeHousesRow'
import { BookCallbackMock } from '../../bookCallback'
import { FooterContactsMock } from '../../footerContacts'

type THousePageMock = {
  meta: TMeta
  navData: TNavData
  footerData: TFooterData
  mainPageHeaderData: TMainPageHeader['data']
  houseTypeInfoData: THouseTypeInfo
  threeHousesRowData: TThreeHousesRow
  bookCallBackData: TBookCallback
  footerContactsData: TFooterContacts
}

export const house1PageMock: THousePageMock = {
  meta: Metas.house1,
  navData: NavMock,
  footerData: FooterMock,
  mainPageHeaderData: {
    mainPageLink: '/',
    mainPageLabel: 'Главная страница',
    separator: '/',
    subitemText: 'Название',
    headingFirst: 'Дом 1',
    headingSecond: 'Заголовок 2',
    features: {
      first: {
        label: 'Общая площадь',
        value: '83.84 m2',
      },
      second: {
        label: 'Размер чего-то',
        value: 'вид 5.3 а',
      },
    },
    mainPageImageXs: '/img/mainPageBanner/mainPageBanner-xs.jpg',
    mainPageImageMd: '/img/mainPageBanner/mainPageBanner-md.jpg',
    mainPageImageLg: '/img/mainPageBanner/mainPageBanner-lg.jpg',
  },
  houseTypeInfoData: houseTypeInfoExampleMock,
  threeHousesRowData: ThreeHousesRowMock,
  bookCallBackData: BookCallbackMock,
  footerContactsData: FooterContactsMock,
}
