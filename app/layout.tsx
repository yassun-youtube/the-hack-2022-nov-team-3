import { roboto } from '~/src/theme'

// regisiter emotion
import EmotionRootStyleRegistry from '~/src/EmotionRootStyleRegistry'

// components
import Header from '~/src/components/Header'
import Footer from '~/src/components/Footer'

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
