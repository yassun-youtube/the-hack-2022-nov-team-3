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
            <ul>{skillData?.length && skillData.map((v) => <li key={v.slug}>{v.label}</li>)}</ul>
            <ul>{hobbyData?.length && hobbyData.map((v) => <li key={v.slug}>{v.label}</li>)}</ul>
            <ul>
              {prefecturesData?.length &&
                prefecturesData.map((v) => <li key={v.slug}>{v.label}</li>)}
            </ul>
          </div>
          <NormalButton variant="contained" clickHandler={() => alert('reset')}>
            検索条件をリセット
          </NormalButton>
        </Section>
        {membersIsLoading && <>...isLoading</>}
        {membersIsError && <>エラーです</>}
        {membersData?.length && (
          <div>
            <Section>
              <Title text={'メンバー'} />
              <div
                css={css`
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  width: 100%;
                `}
              >
                {membersData.map((member) => (
                  <ActionAreaCard key={member.slug} {...member} />
                ))}
                {[0, 1, 2].map((v) => {
                  return (
                    <div
                      key={v}
                      css={css`
                        display: block;
                        order: 1;
                        width: calc(18%);
                        @media screen and (max-width: 700px) {
                          width: calc(31%);
                        }
                      `}
                    ></div>
                  )
                })}
              </div>
            </Section>
          </div>
        )}
      </Container>
    </>
  )
}
