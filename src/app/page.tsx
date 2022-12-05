/** @jsxImportSource @emotion/react */

'use client'

import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

// components
import { NormalButton, Title } from '~/components'

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* 絞り込み */}
        <Box
          sx={{
            my: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title text={'メンバーの絞り込み'} />
          <NormalButton
            variant="contained"
            clickHandler={() => {
              alert('reset')
            }}
          >
            検索条件をリセット
          </NormalButton>
        </Box>
        {/* 運営者 */}
        <Box
          sx={{
            my: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title text={'運営者'} />
        </Box>
        {/* サロンメンバー */}
        <Box
          sx={{
            my: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title text={'サロンメンバー'} />
        </Box>
      </Container>
    </>
  )
}
