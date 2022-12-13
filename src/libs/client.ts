////////////////////////////////////
// ブラウザでAPI取得用のクライアント
////////////////////////////////////

import axios from 'axios'

export const client = axios.create({
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${process?.env?.NEXT_PUBLIC_NEWT_CDN_API_TOKEN}`,
  },
})
