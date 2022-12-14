/** @jsxImportSource @emotion/react */
'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

type Props = {
  src: string
  name: string
  slug: string
  text: string
}

const ActionAreaCard: React.FC<Props> = ({ src, name, slug, text }) => {
  const router = useRouter()
  return (
    <Card
      onClick={() => {
        router.push(`/member/${slug}`)
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="160" image={src} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ActionAreaCard
