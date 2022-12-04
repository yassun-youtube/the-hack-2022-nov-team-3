'use client'

import theme from '~/src/theme'

export default function Head() {
  return (
    <head>
      <title></title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      {/* PWA primary color */}
      <meta name="theme-color" content={theme.palette.primary.main} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </head>
  )
}
