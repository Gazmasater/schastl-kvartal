/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useRef, useEffect, PropsWithChildren } from 'react'
import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

type TFancyBoxProps = {
  delegate?: string
  options?: any
} & PropsWithChildren

export const Fancybox: FC<TFancyBoxProps> = ({ delegate, options, children }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    NativeFancybox.bind(container, delegate || '[data-fancybox]', options || {})

    return () => {
      NativeFancybox.unbind(container)
      NativeFancybox.close()
    }
  })

  return <div ref={containerRef}>{children}</div>
}
