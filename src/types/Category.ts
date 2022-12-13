// カテゴリーのレスポンス
// https://developers.newt.so/apis/cdn

import { Raw } from './CommonCdnApi'

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
