// カテゴリーのレスポンス
// https://developers.newt.so/apis/cdn

import { Raw } from './CommonCdnApiResponse'

// 元のAPIのデータ型
export type Category = {
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

// APIから生成したJsonのデータ型
export type CategoryJson = {
  [key: string]: string
}
