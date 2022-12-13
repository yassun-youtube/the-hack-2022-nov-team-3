// Member情報
// https://developers.newt.so/apis/cdn

export type Member = {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
    raw: Raw
  }
  name: string
  slug: string
  role: string
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

export type Raw = {
  createdAt: string
  updatedAt: string
  firstPublishedAt: string
  publishedAt: string
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

export type Image = {
  _id: string
  src: string
  fileType: 'image/png'
  fileSize: number
  fileName: 'image.png'
  width: number
  height: number
}
