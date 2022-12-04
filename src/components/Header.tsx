/** @jsxImportSource @emotion/react */

'use client'

import React from 'react'

import { css } from '@emotion/react'

export default function Header() {
  return (
    <header
      css={css`
        background: #f00;
        color: #0f0;
      `}
    >
      Header!
    </header>
  )
}
