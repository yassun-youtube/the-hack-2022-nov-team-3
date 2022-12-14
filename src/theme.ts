'use client'

import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// 参考:
// https://zenn.dev/anozon/articles/mui-default-typography

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily:
      '"Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    h1: { fontSize: 40 },
    h2: { fontSize: 35 },
    h3: { fontSize: 30 },
    h4: { fontSize: 25 },
    h5: { fontSize: 20 },
    h6: { fontSize: 18 },
    body1: { fontSize: 16 },
    button: { textTransform: 'none' },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
