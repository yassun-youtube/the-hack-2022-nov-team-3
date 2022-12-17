/** @jsxImportSource @emotion/react */
'use client'

import { css, SerializedStyles } from '@emotion/react'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

type Props = {
  _css: SerializedStyles
}

export default function SkeletonBox({ _css }: Props) {
  return (
    <Box sx={{ my: 5 }} css={_css}>
      <div
        css={css`
          aspect-ratio: 1/1;
        `}
      >
        <Skeleton
          variant="rectangular"
          width={'100%'}
          height={'100%'}
          css={css`
            display: block;
            border-radius: 4px;
          `}
        />
      </div>

      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  )
}
