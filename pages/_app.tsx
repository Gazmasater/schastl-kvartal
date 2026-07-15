/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import 'normalize.css/normalize.css'
import './styles.css'
import './miui.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MyApp: FC<any> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
