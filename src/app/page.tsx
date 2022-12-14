/** @jsxImportSource @emotion/react */
'use client'
import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { css } from '@emotion/react'

// components
import { NormalButton, Title, Section, ActionAreaCard } from '~/components'

// hooks
import { useFetchMembers, useFetchCategories } from '~/hooks'

export default function Page() {
  const [useParams, setUseParams] = useState({
    skip: 0,
    limit: 100,
  })
  const {
    data: membersData,
    isError: membersIsError,
    isLoading: membersIsLoading,
    error: membersError,
  } = useFetchMembers(useParams) // メンバーのデータを取得
  const {
    data: hobbyData,
    isError: hobbyIsError,
    isLoading: hobbyLoading,
    error: hobbyError,
  } = useFetchCategories({ category: 'hobby' }) // 趣味のデータを取得
  const {
    data: skillData,
    isError: skillIsError,
    isLoading: skillIsLoading,
    error: skillError,
  } = useFetchCategories({ category: 'skill' }) // 技術のデータを取得
  const {
    data: prefecturesData,
    isError: prefecturesIsError,
    isLoading: prefecturesIsLoading,
    error: prefecturesError,
  } = useFetchCategories({ category: 'prefectures' }) // 都道府県のデータを取得

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Section>
          <Title text={'メンバーの絞り込み'} />
          <div style={{ display: 'flex' }}>
            <ul>
              {skillData?.items && skillData?.items.map((v) => <li key={v.slug}>{v.label}</li>)}
            </ul>
            <ul>
              {hobbyData?.items && hobbyData?.items.map((v) => <li key={v.slug}>{v.label}</li>)}
            </ul>
            <ul>
              {prefecturesData?.items &&
                prefecturesData?.items.map((v) => <li key={v.slug}>{v.label}</li>)}
            </ul>
          </div>
          <NormalButton variant="contained" clickHandler={() => alert('reset')}>
            検索条件をリセット
          </NormalButton>
        </Section>
        {membersIsLoading && <>...isLoading</>}
        {membersIsError && <>エラーです</>}
        {membersData?.items && membersData.items.length > 0 && (
          <div>
            <Section>
              <Title text={'メンバー'} />
              <div
                css={css`
                  display: flex;
                  flex-wrap: wrap;
                  width: 100%;
                `}
              >
                {membersData?.items &&
                  membersData?.items.map((v) => (
                    <article key={v.slug}>
                      <ActionAreaCard
                        name={v.name}
                        text={'ああああああああ'}
                        src={v.thumbnail.src}
                      />
                    </article>
                  ))}
              </div>
            </Section>
          </div>
        )}
      </Container>
    </>
  )
}
