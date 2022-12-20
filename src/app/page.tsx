/** @jsxImportSource @emotion/react */
'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo, useState, useCallback } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { css } from '@emotion/react'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

// types
import { CategoryJson } from '~/types'

//
import { isEmptyObject } from '~/utils'

// libs
import { setQueryParams } from '~/libs'

// components
import {
  NormalButton,
  Title,
  Section,
  ActionAreaCard,
  SkeletonBox,
  MultipleSelectChip,
  PaginationRanges,
} from '~/components'

// hooks
import { useFetchMembers, useFetchCategories } from '~/hooks'

// 1ページ当たりのメンバー
const UNIT = 5

export default function Page() {
  const router = useRouter()
  const params = useSearchParams()

  const [selectedSkill, setSelectedSkill] = useState<string[]>([])
  const [selectedHobby, setSelectedHobby] = useState<string[]>([])
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([])

  const {
    data: membersData,
    isError: membersIsError,
    isLoading: membersIsLoading,
  } = useFetchMembers() // メンバーのデータを取得
  const {
    data: skillData,
    isError: skillIsError,
    isLoading: skillIsLoading,
    error: skillError,
  } = useFetchCategories({ category: 'skill' }) // 技術のデータを取得
  const {
    data: hobbyData,
    isLoading: hobbyLoading,
    error: hobbyError,
  } = useFetchCategories({ category: 'hobby' }) // 趣味のデータを取得

  const {
    data: prefecturesData,
    isError: prefecturesIsError,
    isLoading: prefecturesIsLoading,
    error: prefecturesError,
  } = useFetchCategories({ category: 'prefectures' }) // 都道府県のデータを取得

  // 検索条件をリセット
  const reset = () => router.push('/')

  const isEmptySkill = useMemo(() => isEmptyObject(skillData), [skillData])
  const isEmptyHobby = useMemo(() => isEmptyObject(hobbyData), [hobbyData])
  const isEmptyPrefectures = useMemo(() => isEmptyObject(prefecturesData), [prefecturesData])

  const currentPage = useMemo(() => {
    const val = Number(params.get('page'))
    if (Number.isNaN(val) || val === 0) return 1
    return val
  }, [params])

  const currentCategory = useCallback(() => {
    return (cate: string, list: CategoryJson) => {
      const val = params.get(cate)
      if (!val) return []
      return val
        .split(',')
        .filter((v) => list[v])
        .map((v) => list[v])
    }
  }, [params])

  const checkExistCategory = ({ target, search }: { target: string[]; search: string[] }) => {
    if (search.length === 0) return true
    return target.some((v) => search.includes(v))
  }

  // フィルタリングされたメンバー一覧
  const filteredData = useMemo(() => {
    return membersData?.filter((member) => {
      const { skill, hobby, prefectures } = member
      const skillVal = skill.map((v) => v.label)
      const hobbyVal = hobby.map((v) => v.label)
      const prefecturesVal = prefectures.map((v) => v.label)

      return (
        checkExistCategory({ target: skillVal, search: selectedSkill }) &&
        checkExistCategory({ target: hobbyVal, search: selectedHobby }) &&
        checkExistCategory({ target: prefecturesVal, search: selectedPrefectures })
      )
    })
  }, [membersData, selectedSkill, selectedHobby, selectedPrefectures])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Section>
          <Title text={'メンバーの絞り込み'} />
          <div
            css={css`
              margin-bottom: 50px;
              width: 100%;
              display: flex;
              justify-content: space-between;
            `}
          >
            {[skillIsLoading, hobbyLoading, prefecturesIsLoading].some((v) => v) ? (
              <>
                {[...new Array(3)].map((_, i) => (
                  <Skeleton key={i} variant="rounded" width={'32%'} height={56} />
                ))}
              </>
            ) : (
              <>
                {!isEmptySkill && (
                  <MultipleSelectChip
                    labelName={'スキル'}
                    value={currentCategory()('skill', skillData as CategoryJson)}
                    categoryItemList={skillData as CategoryJson}
                    changeHandler={(data) => {
                      const result: string[] = []
                      const d = Object.entries(skillData as CategoryJson)
                      d.forEach((v) => {
                        if (data.includes(v[1])) {
                          result.push(v[0])
                        }
                      })
                      const q = setQueryParams({ skill: result })
                      router.replace(`/${q}`)
                    }}
                  />
                )}
                {!isEmptyHobby && (
                  <MultipleSelectChip
                    labelName={'趣味'}
                    value={currentCategory()('hobby', hobbyData as CategoryJson)}
                    categoryItemList={hobbyData as CategoryJson}
                    changeHandler={(data) => {
                      const result: string[] = []
                      const d = Object.entries(hobbyData as CategoryJson)
                      d.forEach((v) => {
                        if (data.includes(v[1])) {
                          result.push(v[0])
                        }
                      })
                      const q = setQueryParams({ hobby: result })
                      router.replace(`/${q}`)
                    }}
                  />
                )}
                {!isEmptyPrefectures && (
                  <MultipleSelectChip
                    labelName={'住んでいる都道府県'}
                    value={currentCategory()('prefectures', prefecturesData as CategoryJson)}
                    categoryItemList={prefecturesData as CategoryJson}
                    changeHandler={(data) => {
                      const result: string[] = []
                      const d = Object.entries(prefecturesData as CategoryJson)
                      d.forEach((v) => {
                        if (data.includes(v[1])) {
                          result.push(v[0])
                        }
                      })
                      const q = setQueryParams({ prefectures: result })
                      router.replace(`/${q}`)
                    }}
                  />
                )}
              </>
            )}
          </div>
          <NormalButton variant="contained" clickHandler={reset}>
            検索条件をリセット
          </NormalButton>
        </Section>
        <Section>
          <Title text={'メンバー'} />
          {membersIsError && (
            <Typography
              variant="h6"
              color={'#ff0000'}
              css={css`
                margin: 0 0 30px;
                font-weight: bold;
              `}
            >
              エラーが発生しました
            </Typography>
          )}
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              width: 100%;
            `}
          >
            {membersIsLoading &&
              [...new Array(10)].map((_, i) => <SkeletonBox _css={BannerWidthStyle} key={i} />)}
            {!!filteredData?.length && (
              <>
                {filteredData
                  .map((member) => <ActionAreaCard key={member.slug} {...member} />)
                  .slice((currentPage - 1) * UNIT, currentPage * UNIT)}
                {[0, 1, 2].map((v) => {
                  return (
                    <div
                      key={v}
                      css={css([
                        BannerWidthStyle,
                        `
                          display: block;
                          order: 1;
                        `,
                      ])}
                    />
                  )
                })}
              </>
            )}
          </div>
        </Section>
        <Section>
          {!!filteredData?.length && (
            <PaginationRanges
              itemCount={filteredData?.length}
              pageSize={UNIT}
              defaultPage={currentPage}
              siblingCount={3}
              boundaryCount={1}
              changeHandler={(page) => {
                const q = setQueryParams({ page: String(page) })
                router.push(`/${q}`)
              }}
            />
          )}
        </Section>
      </Container>
    </>
  )
}

const BannerWidthStyle = css`
  width: calc(18%);
  @media screen and (max-width: 700px) {
    width: calc(31%);
  }
`
