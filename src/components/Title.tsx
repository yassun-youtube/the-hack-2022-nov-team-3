/** @jsxImportSource @emotion/react */
'use client'

import Typography from '@mui/material/Typography'
import { css } from '@emotion/react'

type Props = {
  text: string
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title: React.FC<Props> = ({ text, level = 'h2' }) => {
  return (
    <Typography
      component={level}
      variant={level}
      css={css`
        width: 100%;
        border-bottom: 1px solid #bbb;
        padding: 7px 5px 7px;
        margin: 0 0 30px;
      `}
    >
      {text}
    </Typography>
  )
}

export default Title
