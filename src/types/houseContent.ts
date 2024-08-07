import { TMeta } from '@localTypes/meta'
import { TNavData } from '@localTypes/navData'
import { TFooterData } from '@localTypes/footerData'
import { TMainPageHeader } from '@localTypes/mainPageHeader'
import { THouseTypeInfo } from '@localTypes/houseTypeInfo'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import { TBookCallback } from '@localTypes/bookCallback'
import { TFooterContacts } from '@localTypes/footerContacts'

export type THouseContent = {
  meta: TMeta
  navData: TNavData
  footerData: TFooterData
  mainPageHeaderData: TMainPageHeader['data']
  houseTypeInfoData: THouseTypeInfo
  threeHousesRowData: TThreeHousesRow
  bookCallBackData: TBookCallback
  footerContactsData: TFooterContacts
}
