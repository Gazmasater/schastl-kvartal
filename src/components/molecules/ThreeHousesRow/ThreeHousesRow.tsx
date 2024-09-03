import React, { FC } from 'react'
import { TThreeHousesRow } from '@localTypes/threeHousesRow'
import { SimpleThreeItems, SliderItems } from './molecules'
import classes from './ThreeHousesRow.module.css'

type TThreeHousesRowProps = {
  data: TThreeHousesRow
}

export const ThreeHousesRow: FC<TThreeHousesRowProps> = ({ data }) => {
  return (
    <div className={classes.container} id="threeHouses">
      <div className={classes.background} />
      <div className={classes.padding}>
        {data.houses.length > 3 ? <SliderItems data={data.houses} /> : <SimpleThreeItems data={data.houses} />}
      </div>
    </div>
  )
}
