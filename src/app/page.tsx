/** @jsxImportSource @emotion/react */
'use client'
import { useMemo, useState, useRef } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { css } from '@emotion/react'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

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

export default function Page() {
  const [useParams, setUseParams] = useState({
    skip: 0,
    limit: 100,
  })
  const [selectedSkill, setSelectedSkill] = useState<string[]>([])
  const [selectedHobby, setSelectedHobby] = useState<string[]>([])
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([])

  const cate1Ref = useRef<{ resetCategories: () => void }>(null)
  const cate2Ref = useRef<{ resetCategories: () => void }>(null)
  const cate3Ref = useRef<{ resetCategories: () => void }>(null)

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

  const resetCategories = () => {
    cate1Ref.current?.resetCategories()
    cate2Ref.current?.resetCategories()
    cate3Ref.current?.resetCategories()
  }

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
                {!!skillData?.length && (
                  <MultipleSelectChip
                    labelName={'スキル'}
                    categoryItemList={skillData}
                    ref={cate1Ref}
                    changeHandler={(data) => {
                      setSelectedSkill(data)
                    }}
                  />
                )}
                {!!hobbyData?.length && (
                  <MultipleSelectChip
                    labelName={'趣味'}
                    categoryItemList={hobbyData}
                    ref={cate2Ref}
                    changeHandler={(data) => {
                      setSelectedHobby(data)
                    }}
                  />
                )}
                {!!prefecturesData?.length && (
                  <MultipleSelectChip
                    labelName={'住んでいる都道府県'}
                    categoryItemList={prefecturesData}
                    ref={cate3Ref}
                    changeHandler={(data) => {
                      setSelectedPrefectures(data)
                    }}
                  />
                )}
              </>
            )}
          </div>
          <NormalButton variant="contained" clickHandler={resetCategories}>
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
                {filteredData.map((member) => (
                  <ActionAreaCard key={member.slug} {...member} />
                ))}
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
              pageSize={4}
              defaultPage={1}
              siblingCount={3}
              boundaryCount={1}
              changeHandler={(page) => {
                console.log(page)
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
