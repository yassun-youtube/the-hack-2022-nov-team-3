/** @jsxImportSource @emotion/react */

'use client'

import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

import Box from '@mui/material/Box'

// components
import { NormalButton } from '~/components'

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <NormalButton
            variant="contained"
            clickHandler={() => {
              alert('reset')
            }}
          >
            検索条件をリセット
          </NormalButton>
        </Box>
      </Container>
    </>
  )
}
