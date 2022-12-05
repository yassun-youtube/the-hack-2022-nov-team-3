/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'

// constant
import { COPYRIGHT } from '~/constant'

export default function Footer() {
  return (
    <footer
      css={css`
        background: #000;
        color: #fff;
        padding: 20px 20px;
        text-align: center;
      `}
    >
      <small>{COPYRIGHT}</small>
    </footer>
  )
}
