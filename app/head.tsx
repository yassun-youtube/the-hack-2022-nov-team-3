'use client'

import theme from '~/src/theme'

export default function Head() {
  return (
    <head>
      <title></title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      {/* PWA primary color */}
      <meta name="theme-color" content={theme.palette.primary.main} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </head>
  )
}
