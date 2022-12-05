'use client'
import { Roboto } from '@next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// 参考:
// https://zenn.dev/anozon/articles/mui-default-typography

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    h1: { fontSize: 50 },
    h2: { fontSize: 40 },
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
