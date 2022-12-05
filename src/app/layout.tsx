import { roboto } from '~/theme'

// regisiter emotion
import EmotionRootStyleRegistry from '~/EmotionRootStyleRegistry'

// components
import { Header, Footer } from '~/components'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={roboto.className}>
      <head />
      <body>
        <Header />
        <EmotionRootStyleRegistry>{children}</EmotionRootStyleRegistry>
        <Footer />
      </body>
    </html>
  )
}
