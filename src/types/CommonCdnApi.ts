// 共通データ
// https://developers.newt.so/apis/cdn

// Common Resource Attributes
// CDN API が返すコンテンツのリソースは、以下のプロパティを持ちます。
export type Raw = {
  createdAt: string
  updatedAt: string
  firstPublishedAt: string
  publishedAt: string
}

// 画像
export type Image = {
  _id: string
  src: string
  fileType: 'image/png'
  fileSize: number
  fileName: 'image.png'
  width: number
  height: number
}
