'use client'

import theme from '~/theme'

export default function Head() {
  return (
    <head>
      <title>TOPページ</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content={theme.palette.primary.main} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </head>
  )
}
