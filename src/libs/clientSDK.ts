////////////////////////////////////
// newt JavaScript SDK
// url: https://github.com/Newt-Inc/newt-client-js
////////////////////////////////////

import { createClient } from 'newt-client-js'

export const clientSDK = createClient({
  spaceUid: process?.env?.NEXT_PUBLIC_NEWT_SERVICE_DOMAIN ?? '',
  token: process?.env?.NEXT_PUBLIC_NEWT_CDN_API_TOKEN ?? '',
  apiType: 'cdn', // You can specify "cdn" or "api".
})
