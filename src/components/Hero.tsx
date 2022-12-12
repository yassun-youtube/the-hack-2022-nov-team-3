/** @jsxImportSource @emotion/react */
'use client'
import { FC } from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

import { HERO_NO_IMAGE } from '~/constant'

type Props = {
  userName: string
  mainHeroImage?: string
  profileThumbnailImage: string
  releaseDate?: string
  lastUpdatedDate?: string
}

const Hero: FC<Props> = ({
  userName,
  mainHeroImage,
  profileThumbnailImage,
  releaseDate,
  lastUpdatedDate,
}: Props) => {
  return (
    <div
      css={css`
        .relative {
          position: relative;
          margin-bottom: 100px;
        }
        .hero_wrapper {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          overflow: hidden;
        }
        .hero_picture {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0%;
          top: 0;
          object-fit: cover;
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
          height: 150px;
          object-fit: cover;
          bottom: -50px;
          left: 20px;
          border: solid 3px #fff;
        }
        .datesAndTimes {
          display: flex;
          justify-content: flex-end;
        }
      `}
    >
      <div className="relative">
        <div className="hero_wrapper">
          <Image
            className="hero_picture"
            src={mainHeroImage ? mainHeroImage : HERO_NO_IMAGE}
            alt=""
            fill={true}
            priority={true}
          />
        </div>

        <Image
          className="absolute"
          src={profileThumbnailImage}
          alt={userName}
          fill={true}
          priority={true}
        />
      </div>
      {releaseDate && (
        <div className="datesAndTimes">
          <Typography>公開日：{releaseDate}</Typography>
        </div>
      )}
      {lastUpdatedDate && (
        <div className="datesAndTimes">
          <Typography>最終更新日：{lastUpdatedDate}</Typography>
        </div>
      )}
    </div>
  )
}
export default Hero
