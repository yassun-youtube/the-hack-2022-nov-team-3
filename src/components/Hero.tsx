/** @jsxImportSource @emotion/react */
'use client'
import { FC } from 'react'
import { css } from '@emotion/react'
import Typography from '@mui/material/Typography'

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
          height: 150px;
          object-fit: cover; /* この一行を追加するだけ！ */
          bottom: -50px;
          left: 20px;
          border: solid 3px #fff;
        }
        .updateTime
      `}
    >
      <div className="relative">
        <img src={mainHeroImage} className="hero_picture" alt="" />
        <img src={profileThumbnailImage} className="absolute" alt="" />
      </div>
    </div>
  )
}
export default Hero
