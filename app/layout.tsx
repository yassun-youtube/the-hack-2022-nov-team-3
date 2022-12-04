import { roboto } from '~/src/theme'
import EmotionRootStyleRegistry from '~/src/EmotionRootStyleRegistry'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={roboto.className}>
      <head></head>
      <body>
        {/* {children} */}
        <EmotionRootStyleRegistry>{children}</EmotionRootStyleRegistry>
      </body>
    </html>
  )
}
