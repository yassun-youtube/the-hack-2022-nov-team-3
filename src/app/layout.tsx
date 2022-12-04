import { roboto } from '~/theme'

// regisiter emotion
import EmotionRootStyleRegistry from '~/EmotionRootStyleRegistry'

// components
import Header from '~/components/Header'
import Footer from '~/components/Footer'

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
