/** @jsxImportSource @emotion/react */
'use client'

import { ThemeProvider } from '@mui/material'
import Link from '@mui/material/Link'
import CssBaseline from '@mui/material/CssBaseline'
import { css } from '@emotion/react'

// theme
import theme from '~/theme'

// types
import { Member } from '~/types'

type Props = Pick<Member, 'links'>

const LinkList: React.FC<Props> = ({ links }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          list-style-type: none;
          margin: 0 0 65px;
          padding: 0;
        `}
      >
        {links.map((v, i) => {
          return (
            <li
              key={v.value + String(i)}
              css={css`
                display: inline-block;
                margin: 0 10px 10px 10px;
              `}
            >
              <Link
                href={v.value}
                target="_blank"
                rel="noopener"
                css={css`
                  font-weight: bold;
                  text-decoration: none;
                  font-size: 18px;
                `}
              >
                🔗 {v.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </ThemeProvider>
  )
}

export default LinkList
