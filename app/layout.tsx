import { roboto } from '~/src/theme'
import EmotionRootStyleRegistry from '~/src/EmotionRootStyleRegistry'

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html className={roboto.className}>
      <head></head>
      <body>
        <EmotionRootStyleRegistry>{children}</EmotionRootStyleRegistry>
      </body>
    </html>
  )
}
