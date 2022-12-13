// regisiter emotion
import EmotionRootStyleRegistry from '~/EmotionRootStyleRegistry'
// react-query
import ReactQueryWrapper from '~/ReactQueryWrapper'

// components
import { Header, Footer } from '~/components'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <ReactQueryWrapper>
          <EmotionRootStyleRegistry>{children}</EmotionRootStyleRegistry>
        </ReactQueryWrapper>
        <Footer />
      </body>
    </html>
  )
}
