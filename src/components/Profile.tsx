/** @jsxImportSource @emotion/react */
'use client'

import Typography from '@mui/material/Typography'
import { css } from '@emotion/react'
import { ThemeProvider } from '@mui/material'

// theme
import theme from '~/theme'

type Props = {
  text: string
}

const Profile: React.FC<Props> = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Typography
          component={'p'}
          variant={'body1'}
          css={css`
            max-width: 850px;
            width: 100%;
            padding: 7px 20px 7px;
            margin: 0 0 30px;
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 2;
          `}
        >
          {text}
        </Typography>
      </div>
    </ThemeProvider>
  )
}

export default Profile
