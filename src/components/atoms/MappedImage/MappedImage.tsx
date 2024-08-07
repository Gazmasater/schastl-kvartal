/* eslint-disable max-lines-per-function */
import React, { FC } from 'react'
import ImageMapper from 'react-img-mapper'
import classes from './MappedImage.module.css'

export const MappedImage: FC = () => {
  const imgUrl = '/img/mappedImage/image.jpg'
  const mapData = {
    name: 'my-map',
    areas: [
      {
        id: 'house-1',
        title: 'house-1',
        shape: 'poly',
        name: 'house-1',
        fillColor: '#eab54d4d',
        strokeColor: 'black',
        coords: [354, 552, 402, 511, 438, 526, 388, 573],
      },
      {
        id: 'house-2',
        title: 'house-2',
        shape: 'poly',
        name: 'house-2',
        fillColor: '#eab54d4d',
        strokeColor: 'black',
        coords: [296, 520, 343, 477, 370, 491, 320, 533],
      },
      {
        id: 'house-3',
        title: 'house-3',
        shape: 'poly',
        name: 'house-3',
        fillColor: '#eab54d4d',
        strokeColor: 'black',
        coords: [243, 495, 293, 450, 318, 462, 265, 506],
      },
    ],
  }

  return (
    <div className={classes.container}>
      <div>
        <ImageMapper src={imgUrl} map={mapData} width={1280} height={922} />
      </div>
    </div>
  )
}
