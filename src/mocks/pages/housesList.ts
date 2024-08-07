import { THousePage } from '@localTypes/pageTypes'
import { house1PageMock } from './houses/house1'
import { house2PageMock } from './houses/house2'
import { house3PageMock } from './houses/house3'

export const housesAvailableUrls: string[] = ['house1', 'house2', 'house3']

export const housesContent: { [key: string]: THousePage } = {
  house1: house1PageMock,
  house2: house2PageMock,
  house3: house3PageMock,
}
