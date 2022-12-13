/** @jsxImportSource @emotion/react */
'use client'

import { FC } from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
type LabelLink = {
  label: string
  link: string | null
}

type Props = {
  labelLinkList: LabelLink[]
}
const BreadcrumbsList: FC<Props> = ({ labelLinkList }: Props) => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        {labelLinkList.map((labelLink) =>
          labelLink.link ? (
            <Link underline="hover" color="inherit" href={labelLink.link}>
              {labelLink.label}
            </Link>
          ) : (
            <Typography color="text.primary">{labelLink.label}</Typography>
          ),
        )}
      </Breadcrumbs>
    </div>
  )
}

export default BreadcrumbsList
