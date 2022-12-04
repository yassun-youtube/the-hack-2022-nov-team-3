/** @jsxImportSource @emotion/react */
'use client'

import React from 'react'

import { css } from '@emotion/react'
import Copyright from '~/src/components/Copyright'

export default function Footer() {
  return (
    <footer
      css={css`
        background: #000;
        color: #fff;
        padding: 20px 20px;
      `}
    >
      <Copyright text={'hogehoge'} link={'#'} />
    </footer>
  )
}
