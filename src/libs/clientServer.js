////////////////////////////////////
// 一覧のデータを取得してJSONを生成
// nodeコマンドで直接叩く
////////////////////////////////////

const axios = require('axios')
const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, `../../`)
const jsonDir = rootDir + '/public/json'

require('dotenv').config({ path: rootDir + `.env.local` })

const filePath = (filename) => jsonDir + `/${filename}.json`

const instance = axios.create({
  baseURL: `https://${process?.env?.NEXT_PUBLIC_NEWT_SERVICE_DOMAIN}.cdn.newt.so/v1`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process?.env?.NEXT_PUBLIC_NEWT_CDN_API_TOKEN}`,
  },
})

// jsonディレクトリがなければ作る
if (!fs.existsSync(jsonDir)) {
  fs.mkdirSync(jsonDir)
}

;(async () => {
  // それぞれのデータが入る
  const results = {
    hobby: {},
    skill: {},
    prefectures: {},
    member: [],
  }

  // カテゴリーデータ
  const categories = ['hobby', 'skill', 'prefectures']
  for (const key of categories) {
    let flag = true
    while (flag) {
      const result = await instance
        .get(`/members/${key}`)
        .then((v) => {
          const { skip, limit, total, items } = v.data
          if (skip + limit >= total) {
            flag = false
          }
          let obj = {}
          items.forEach((c, i) => {
            obj = { ...obj, ...{ [c.slug]: c.label } }
          })
          return obj
        })
        .catch((e) => {
          console.log(key + ' data is failed')
          return {}
        })
      results[key] = result
    }
  }

  // メンバーデータ
  let flag = true
  while (flag) {
    const result = await instance
      .get('/members/member?select=name,slug,profile,role,thumbnail.src,skill,hobby,prefectures')
      .then((v) => {
        const { skip, limit, total, items } = v.data
        if (skip + limit >= total) {
          flag = false
        }
        return items
      })
      .catch((e) => {
        console.log('member data is failed')
        return []
      })
    results['member'] = [...results['member'], ...result]
  }

  // jsonを生成
  for (const key in results) {
    fs.writeFileSync(filePath(key), JSON.stringify(results[key]), (e) => console.log(e))
  }
})()
