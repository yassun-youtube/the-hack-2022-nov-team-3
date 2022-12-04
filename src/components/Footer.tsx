/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'
import Copyright from '~/components/Copyright'

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
