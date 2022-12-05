'use client'

import createCache, { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { useState } from 'react'

// MEMO:参考
// https://github.com/emotion-js/emotion/issues/2928
// https://beta.nextjs.org/docs/styling/css-in-js
// https://stackblitz.com/edit/vercel-next-js-ajvkxp?file=app%2Fpage.tsx,app%2Flayout.tsx,app%2FEmotionRootStyleRegistry.tsx,package.json

export default function EmotionRootStyleRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState<EmotionCache>(() => {
    const cache = createCache({ key: 'mui-style' })
    cache.compat = true
    return cache
  })

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        key={cache.key}
        dangerouslySetInnerHTML={{ __html: Object.values(cache.inserted).join(' ') }}
      />
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
