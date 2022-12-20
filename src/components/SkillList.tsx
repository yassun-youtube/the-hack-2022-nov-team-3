/** @jsxImportSource @emotion/react */
'use client'

import * as React from 'react'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { css } from '@emotion/react'
import Typography from '@mui/material/Typography'

// theme
import theme from '~/theme'

// types
import { Member } from '~/types'

type Props = Pick<Member, 'years_of_use'>

const SkillList: React.FC<Props> = ({ years_of_use }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ul
        css={css`
          list-style-type: none;
          margin: 0 0 65px;
          padding: 0;
        `}
      >
        {years_of_use.map((v, i) => {
          const label = v.label.trim()
          const value = v.value.trim()
          if (!label || !value) return <></>
          return (
            <li
              key={value + String(i)}
              css={css`
                display: block;
                margin: 0 10px 10px;
              `}
            >
              <Typography
                variant="subtitle2"
                component="div"
                css={css`
                  font-size: 24px;
                `}
              >
                <span>⭐️ {label}</span>
                <b
                  css={css`
                    margin: 0 10px;
                  `}
                >
                  :
                </b>
                <span>{value}</span>
              </Typography>
            </li>
          )
        })}
      </ul>
    </ThemeProvider>
  )
}

export default SkillList
