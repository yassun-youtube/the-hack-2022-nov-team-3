// 成功時のレスポンス
// https://developers.newt.so/apis/cdn

export type SuccessResponse<T> = {
  skip: number
  limit: number
  total: number
  items: T[]
}
