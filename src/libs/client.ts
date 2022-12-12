////////////////////////////////////
// newt JavaScript SDK
// url: https://github.com/Newt-Inc/newt-client-js
////////////////////////////////////

import { createClient } from 'newt-client-js'

export const client = createClient({
  spaceUid: process.env?.NEWT_SERVICE_DOMAIN ?? '',
  token: process.env?.NEWT_SERVICE_TOKEN ?? '',
  apiType: 'cdn', // You can specify "cdn" or "api".
})
