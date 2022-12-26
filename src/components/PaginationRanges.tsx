/** @jsxImportSource @emotion/react */
'use client'
import { FC, useEffect, useState, useMemo } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { css } from '@emotion/react'
import { PaginationItem, PaginationRenderItemParams } from '@mui/material'

type Props = {
  itemCount: number
  pageSize: number
  defaultPage: number
  currentPage: number
  siblingCount: number
  boundaryCount: number
  changeHandler: (current: number) => void
}

const PaginationRanges: FC<Props> = ({
  itemCount,
  pageSize,
  defaultPage,
  currentPage,
  siblingCount,
  boundaryCount,
  changeHandler,
}: Props) => {
  const [defaultPageVal, setDefaultPageVal] = useState<null | number>(null)

  useEffect(() => {
    setDefaultPageVal(defaultPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isCurrent = (params: PaginationRenderItemParams) => {
    return params.type === 'page' && params.page === currentPage
  }

  return (
    <Stack
      spacing={2}
      css={css`
        margin-bottom: 20px;
      `}
    >
      {defaultPageVal && (
        <Pagination
          renderItem={(item) => {
            return (
              <PaginationItem
                {...item}
                css={css`
                  background-color: rgba(0, 0, 0, 0) !important;
                  font-size: 18px;
                  font-weight: ${isCurrent(item) ? 'bold' : 'normal'};
                `}
              />
            )
          }}
          count={Math.ceil(itemCount / pageSize)}
          defaultPage={defaultPageVal}
          siblingCount={siblingCount}
          boundaryCount={boundaryCount}
          onChange={(event: React.ChangeEvent<unknown>, page: number) => {
            changeHandler(page)
          }}
        />
      )}
    </Stack>
  )
}

export default PaginationRanges
