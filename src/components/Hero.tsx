/** @jsxImportSource @emotion/react */
'use client'
import { FC } from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import dayjs from 'dayjs'

// theme
import theme from '~/theme'

// constants
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
  const releaseDateVal = dayjs(releaseDate).format('YYYY年MM月DD日 HH:mm')
  const lastUpdatedDateVal = dayjs(lastUpdatedDate).format('YYYY年MM月DD日 HH:mm')

  return (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          .relative {
            position: relative;
            margin-bottom: 90px;
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
            object-fit: cover;
            bottom: -30px;
            left: 20px;
            border: solid 3px #fff;
          }
          .datesParent {
            margin-top: 30px;
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
            width={150}
            height={150}
            fill={false}
            priority={true}
          />
          <div className="datesParent">
            {releaseDateVal && (
              <div className="datesAndTimes">
                <Typography>公開日：{releaseDateVal}</Typography>
              </div>
            )}
            {lastUpdatedDateVal && releaseDateVal !== lastUpdatedDateVal && (
              <div className="datesAndTimes">
                <Typography>最終更新日：{lastUpdatedDateVal}</Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
export default Hero
