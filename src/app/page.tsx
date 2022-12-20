/** @jsxImportSource @emotion/react */
'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { css } from '@emotion/react'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

// types
import { CategoryJson } from '~/types'

// utils
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
  RepeatComponent,
} from '~/components'

// hooks
import { useFetchMembers, useFetchCategories } from '~/hooks'

// 1ページ当たりのメンバー
const UNIT = 5

export default function Page() {
  const router = useRouter()
  const params = useSearchParams()

  // メンバーのデータを取得
  const {
    data: membersData,
    isError: membersIsError,
    isLoading: membersIsLoading,
  } = useFetchMembers()

  // 技術のデータを取得
  const { data: skillData, isLoading: skillIsLoading } = useFetchCategories({ category: 'skill' })

  // 趣味のデータを取得
  const { data: hobbyData, isLoading: hobbyLoading } = useFetchCategories({ category: 'hobby' })

  // 都道府県のデータを取得
  const { data: prefecturesData, isLoading: prefecturesIsLoading } = useFetchCategories({
    category: 'prefectures',
  })

  // 検索条件をリセット
  const resetSearchParams = () => router.push('/')

  // 各カテゴリーデータが空かチェック
  const isEmptySkill = useMemo(() => isEmptyObject(skillData), [skillData])
  const isEmptyHobby = useMemo(() => isEmptyObject(hobbyData), [hobbyData])
  const isEmptyPrefectures = useMemo(() => isEmptyObject(prefecturesData), [prefecturesData])

  // 現在のページ番号を返す
  const currentPage = useMemo(() => {
    const val = Number(params.get('page'))
    if (Number.isNaN(val) || val === 0) return 1
    return val
  }, [params])

  // 現在選択中のカテゴリーを返す
  const currentCategory = ({
    params,
    cate,
    list,
  }: {
    params: URLSearchParams
    cate: string
    list: CategoryJson
  }): string[] => {
    const val = params.get(cate)
    if (!val) return []
    return val
      .split(',')
      .filter((v) => list[v])
      .map((v) => list[v])
  }

  // 選択されているスキルの値
  const selectedSkill: string[] = useMemo(() => {
    if (!skillData) return []
    return currentCategory({ params, cate: 'skill', list: skillData })
  }, [skillData, params])

  // 選択されている趣味の値
  const selectedHobby: string[] = useMemo(() => {
    if (!hobbyData) return []
    return currentCategory({ params, cate: 'hobby', list: hobbyData })
  }, [hobbyData, params])

  // 選択されている都道府県の値
  const selectedPrefectures: string[] = useMemo(() => {
    if (!prefecturesData) return []
    return currentCategory({ params, cate: 'prefectures', list: prefecturesData })
  }, [prefecturesData, params])

  // 選択されたカテゴリーがある場合はtrueを返す
  const isExistCategory = ({ target, search }: { target: string[]; search: string[] }): boolean => {
    if (search.length === 0) return true
    return target.some((v) => search.includes(v))
  }

  // フィルタリングされたメンバー一覧を出力
  const filteredData = useMemo(() => {
    return membersData?.filter((member) => {
      const { skill, hobby, prefectures } = member
      const skillVal = skill.map((v) => v.label)
      const hobbyVal = hobby.map((v) => v.label)
      const prefecturesVal = prefectures.map((v) => v.label)

      return (
        isExistCategory({ target: skillVal, search: selectedSkill }) &&
        isExistCategory({ target: hobbyVal, search: selectedHobby }) &&
        isExistCategory({ target: prefecturesVal, search: selectedPrefectures })
      )
    })
  }, [membersData, selectedSkill, selectedHobby, selectedPrefectures])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* ======================メンバーの絞り込み=========================== */}
        <Section>
          <Title text={'メンバーの絞り込み'} />
          <div css={SideListStyle}>
            {[skillIsLoading, hobbyLoading, prefecturesIsLoading].some((v) => v) ? (
              <RepeatComponent count={3}>
                <Skeleton variant="rounded" width={'32%'} height={56} />
              </RepeatComponent>
            ) : (
              <>
                {!isEmptySkill && (
                  <MultipleSelectChip
                    labelName={'スキル'}
                    value={selectedSkill}
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
                      router.push(`/${q}`)
                    }}
                  />
                )}
                {!isEmptyHobby && (
                  <MultipleSelectChip
                    labelName={'趣味'}
                    value={selectedHobby}
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
                      router.push(`/${q}`)
                    }}
                  />
                )}
                {!isEmptyPrefectures && (
                  <MultipleSelectChip
                    labelName={'住んでいる都道府県'}
                    value={selectedPrefectures}
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
                      router.push(`/${q}`)
                    }}
                  />
                )}
              </>
            )}
          </div>
          <NormalButton variant="contained" clickHandler={resetSearchParams}>
            検索条件をリセット
          </NormalButton>
        </Section>
        {/* =====================メンバー=========================== */}
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
          <div css={SideListStyle}>
            {membersIsLoading && (
              <RepeatComponent count={10}>
                <SkeletonBox _css={BannerWidthStyle} />
              </RepeatComponent>
            )}
            {!!filteredData?.length && (
              <>
                {filteredData
                  .map((member) => <ActionAreaCard key={member.slug} {...member} />)
                  .slice((currentPage - 1) * UNIT, currentPage * UNIT)}
                <RepeatComponent count={3}>
                  <div
                    css={css([
                      BannerWidthStyle,
                      `
                          display: block;
                          order: 1;
                      `,
                    ])}
                  />
                </RepeatComponent>
              </>
            )}
          </div>
        </Section>
        {/* =====================ページ送り========================= */}
        <Section>
          {!!filteredData?.length && (
            <PaginationRanges
              itemCount={filteredData?.length}
              pageSize={UNIT}
              defaultPage={currentPage}
              siblingCount={3}
              boundaryCount={1}
              changeHandler={(page) => {
                const q = setQueryParams({ page: [String(page)] })
                router.push(`/${q}`)
              }}
            />
          )}
        </Section>
      </Container>
    </>
  )
}

const SideListStyle = css`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const BannerWidthStyle = css`
  width: calc(18%);
  @media screen and (max-width: 700px) {
    width: calc(31%);
  }
`
