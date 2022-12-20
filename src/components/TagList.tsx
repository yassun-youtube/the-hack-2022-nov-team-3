/** @jsxImportSource @emotion/react */
'use client'

import { useMemo } from 'react'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { css } from '@emotion/react'
import Button from '@mui/material/Button'

// theme
import theme from '~/theme'

// types
import { CategoryList } from '~/types'

type Props = {
  skill: CategoryList[]
  hobby: CategoryList[]
  prefectures: CategoryList[]
}

type TagArr = { label: string; link: string }[]

const TagList: React.FC<Props> = ({ skill, hobby, prefectures }) => {
  const data: { label: string; link: string }[] = useMemo(() => {
    const d = [
      { arr: skill, link: '/?skill=' },
      { arr: hobby, link: '/?hobby=' },
      { arr: prefectures, link: '/?prefectures=' },
    ]
    return d.reduce((prev, current) => {
      return prev.concat(
        current.arr.map((v) => {
          return {
            label: v.label,
            link: current.link + v.slug,
          }
        }),
      )
    }, [] as TagArr)
  }, [skill, hobby, prefectures])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ul
        css={css`
          list-style-type: none;
          margin: 0 0 65px;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
        `}
      >
        {data.map((v, i) => {
          return (
            <li
              key={v.link + String(i)}
              css={css`
                display: block;
                margin: 0 5px 10px;
              `}
            >
              <Button variant="outlined" href={v.link}>
                {v.label}
              </Button>
            </li>
          )
        })}
      </ul>
    </ThemeProvider>
  )
}

export default TagList
