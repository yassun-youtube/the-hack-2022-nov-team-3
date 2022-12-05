/** @jsxImportSource @emotion/react */
'use client'

import Button from '@mui/material/Button'

// components
import React from 'react'

type Props = {
  children: React.ReactNode
  variant?: 'text' | 'contained' | 'outlined' | undefined
  clickHandler: () => void
}

const NormalButton: React.FC<Props> = ({ children, variant = 'text', clickHandler }) => {
  return (
    <Button variant={variant} onClick={clickHandler}>
      {children}
    </Button>
  )
}
export default NormalButton
