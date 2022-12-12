/** @jsxImportSource @emotion/react */
'use client'
import { useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

import { client } from '~/libs'

// components
import { NormalButton, Title, Section } from '~/components'

export default function Home() {
  useEffect(() => {
    client
      .getContents({
        appUid: 'members',
        modelUid: 'member',
      })
      .then((content) => console.log(content))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* 絞り込み */}
        <Section>
          <Title text={'メンバーの絞り込み'} />
          <NormalButton
            variant="contained"
            clickHandler={() => {
              alert('reset')
            }}
          >
            検索条件をリセット
          </NormalButton>
        </Section>
        {/* 運営者 */}
        <Section>
          <Title text={'運営者'} />
        </Section>
        {/* サロンメンバー */}
        <Section>
          <Title text={'サロンメンバー'} />
        </Section>
      </Container>
    </>
  )
}
