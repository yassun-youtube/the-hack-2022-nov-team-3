////////////////////////////////////
// microCMS JavaScript SDK
// url: https://github.com/microcmsio/microcms-js-sdk
////////////////////////////////////

import { createClient } from 'microcms-js-sdk'

// constant

export const client = createClient({
  serviceDomain: process.env?.MICROCMS_SERVICE_DOMAIN ?? '',
  apiKey: process.env?.MICROCMS_API_KEY ?? '',
})
