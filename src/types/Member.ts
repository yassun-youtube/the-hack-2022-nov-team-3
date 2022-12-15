// Member情報
// https://developers.newt.so/apis/cdn

import { Raw, Image } from './CommonCdnApiResponse'

export type Member = {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
    raw: Raw
  }
  name: string
  slug: string
  role: '0' | '1'
  thumbnail: Image
  mainImage: Image | null
  skill: CategoryList[]
  hobby: CategoryList[]
  prefectures: CategoryList[]
  profile: string
  links: {
    label: string
    value: string
  }[]
  years_of_use: {
    label: string
    value: string
  }[]
}

export type CategoryList = {
  _id: string
  _sys: {
    raw: Raw
    customOrder: number
    createdAt: string
    updatedAt: string
  }
  label: string
  slug: string
}
