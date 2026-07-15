import { THousePage } from '@localTypes/pageTypes'
import { house1PageMock } from './houses/house1'
import { house2PageMock } from './houses/house2'
import { house3PageMock } from './houses/house3'
import { house4PageMock } from './houses/house4'

export const housesAvailableUrls: string[] = [
  'dom-skandi-155-m2',
  'barnhaus-115-m2',
  'dom-modern-140-m2',
  'dom-modern-100-m2',
]

export const housesContent: { [key: string]: THousePage } = {
  'dom-skandi-155-m2': house1PageMock,
  'barnhaus-115-m2': house2PageMock,
  'dom-modern-140-m2': house3PageMock,
  'dom-modern-100-m2': house4PageMock,
}
