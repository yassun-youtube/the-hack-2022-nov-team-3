/** @jsxImportSource @emotion/react */
'use client'
import { FC } from 'react'
import { css } from '@emotion/react'
import { Typography, Avatar } from '@mui/material/'
import { deepOrange, deepPurple } from '@mui/material/colors'

// constant
import { COPYRIGHT } from '~/constant'

type Props = {
  userName: string
  mainHeroImage: string
  profileThumbnailImage: string
}

const Hero: FC<Props> = ({ userName, mainHeroImage, profileThumbnailImage }: Props) => {
  return (
    <div
      css={css`
        .relative {
          position: relative;
          margin-bottom: 100px;
        }
        .hero_picture {
          width: 100%;
        }
        .hero_icon {
          position: absolute;
          bottom: 25px;
          left: 140px;
          z-index: 10;
        }
        .absolute {
          position: absolute;
          width: 150px;
          height: 100px;
          bottom: -50px;
          left: 20px;
          border: solid 3px #fff;
        }
      `}
    >
      <div className="relative">
        <img src={mainHeroImage} className="hero_picture" alt="" />
        <Avatar className="hero_icon" sx={{ bgcolor: '' }}>
          {userName[0].toUpperCase()}
        </Avatar>
        <img src={profileThumbnailImage} className="absolute" alt="" />
      </div>
    </div>
  )
}
export default Hero
