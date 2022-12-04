////////////////////////////////////
// microCMS JavaScript SDK
// url: https://github.com/microcmsio/microcms-js-sdk
////////////////////////////////////

import { createClient } from 'microcms-js-sdk'

// constant
import { serviceDomain } from '~/constant'

export const client = createClient({
  serviceDomain,
  apiKey: process?.env?.MICROCMS_API_KEY ?? '',
})
