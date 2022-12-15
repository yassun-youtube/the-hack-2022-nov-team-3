/** @jsxImportSource @emotion/react */
'use client'

import * as React from 'react'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { css } from '@emotion/react'

type Props = {
  thumbnail: { src: string }
  name: string
  slug: string
  profile: string
  role: '0' | '1'
}

const PROFILE_LIMIT = 40

const ActionAreaCard: React.FC<Props> = ({ thumbnail, name, slug, profile, role }) => {
  return (
    <Card
      css={css`
        width: calc(18%);
        margin-bottom: 25px;
        @media screen and (max-width: 700px) {
          width: calc(31%);
          margin-bottom: 20px;
        }
      `}
    >
      <Link
        href={`/member/${slug}`}
        css={css`
          text-decoration: none;
          color: #444;
        `}
      >
        <CardActionArea>
          <CardMedia component="img" image={thumbnail?.src} alt={name} />
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              css={css`
                font-weight: 800;
              `}
            >
              {role === '0' ? '★' : ''}
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profile.length > PROFILE_LIMIT ? profile.slice(0, PROFILE_LIMIT) + '...' : profile}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default ActionAreaCard
