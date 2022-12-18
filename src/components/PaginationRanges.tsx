/** @jsxImportSource @emotion/react */
'use client'
import { FC } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { css } from '@emotion/react'
import { PaginationItem } from '@mui/material'

type Props = {
  itemCount: number
  pageSize: number
  defaultPage: number
  siblingCount: number
  boundaryCount: number
  changeHandler: () => void
}

const PaginationRanges: FC<Props> = ({
  itemCount,
  pageSize,
  defaultPage,
  siblingCount,
  boundaryCount,
  changeHandler,
}: Props) => {
  return (
    <Stack
      spacing={2}
      css={css`
        margin-bottom: 20px;
      `}
    >
      <Pagination
        renderItem={(item) => (
          <PaginationItem
            {...item}
            css={css`
              background-color: rgba(0, 0, 0, 0) !important;
              font-size: 18px;
            `}
          />
        )}
        count={Math.ceil(itemCount / pageSize)}
        defaultPage={defaultPage}
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        onChange={changeHandler}
      />
    </Stack>
  )
}

export default PaginationRanges
