/** @jsxImportSource @emotion/react */
'use client'

import { FC } from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
type Props = {
  userName: string
  clickHandler?: () => void
}
const BreadcrumbsList: FC<Props> = ({ userName, clickHandler }: Props) => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link underline="hover" color="inherit" href="/" onClick={clickHandler}>
          TOP
        </Link>
        <Typography color="text.primary">{userName}</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default BreadcrumbsList
