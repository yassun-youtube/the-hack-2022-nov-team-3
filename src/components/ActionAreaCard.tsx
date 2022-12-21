/** @jsxImportSource @emotion/react */
'use client'

import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { css } from '@emotion/react'
import { useRouter } from 'next/navigation'

type Props = {
  thumbnail: { src: string }
  name: string
  slug: string
  profile: string
  role: '0' | '1'
}

const PROFILE_LIMIT = 40

const ActionAreaCard: React.FC<Props> = ({ thumbnail, name, slug, profile, role }) => {
  const router = useRouter()
  return (
    <Card
      onClick={() => router.push(`/member/${slug}`)}
      css={css`
        width: calc(18%);
        margin-bottom: 25px;
        @media screen and (max-width: 700px) {
          width: calc(31%);
          margin-bottom: 20px;
        }
      `}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={thumbnail?.src}
          alt={name}
          css={css`
            aspect-ratio: 1/1;
          `}
        />
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
    </Card>
  )
}

export default ActionAreaCard
