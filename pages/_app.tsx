/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import 'normalize.css/normalize.css'
import './styles.css'

const MyApp: FC<any> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
