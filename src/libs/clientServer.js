////////////////////////////////////
// 一覧のデータを取得してJSONを生成
// nodeコマンドで直接叩く
////////////////////////////////////

const axios = require('axios')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, `../../.env.local`) })

const filePath = (filename) => path.join(__dirname, `../../public/json/${filename}.json`)

const instance = axios.create({
  baseURL: `https://${process?.env?.NEXT_PUBLIC_NEWT_SERVICE_DOMAIN}.cdn.newt.so/v1`,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${process?.env?.NEXT_PUBLIC_NEWT_CDN_API_TOKEN}`,
  },
})

// jsonを生成
;(async () => {
  const results = {}

  results['member'] = await instance.get('/members/member').then((v) => v.data)
  results['hobby'] = await instance.get('/members/hobby').then((v) => v.data)
  results['skill'] = await instance.get('/members/skill').then((v) => v.data)
  results['prefectures'] = await instance.get('/members/prefectures').then((v) => v.data)

  for (const key in results) {
    fs.writeFileSync(filePath(key), JSON.stringify(results[key]), (e) => console.log(e))
  }
})()
