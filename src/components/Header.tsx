/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'
import NextLink from 'next/link'
import Typography from '@mui/material/Typography'

// components
import { ExternalLink } from '~/components'

// constants
import { SITE_TITLE, MICROCMS_ADMIN } from '~/constant'

export default function Header() {
  return (
    <header
      css={css`
        background: #000;
        color: #fff;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <Typography
        component="h1"
        css={css`
          color: #fff;
          font-size: 30px;
          & a {
            color: #fff;
            text-decoration: none;
          }
        `}
      >
        <NextLink href={'/'}>{SITE_TITLE}</NextLink>
      </Typography>
      <ExternalLink url={MICROCMS_ADMIN} title={'ログイン'} color={'#fff'} />
    </header>
  )
}
