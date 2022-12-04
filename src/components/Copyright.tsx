/** @jsxImportSource @emotion/react */
'use client'

import * as React from 'react'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'
import { css } from '@emotion/react'

type Props = {
  text?: string
  link?: string
}

const Copyright: React.FC<Props> = ({ text, link }) => {
  return (
    <Typography
      variant="body2"
      css={css`
        color: #fff;
        text-align: center;
      `}
    >
      {'Copyright © '}
      {text && link && (
        <MuiLink color="inherit" href={link}>
          {text}
        </MuiLink>
      )}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default Copyright
