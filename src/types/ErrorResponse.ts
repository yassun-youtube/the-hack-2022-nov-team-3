// エラー時のレスポンス
// https://developers.newt.so/apis/cdn

export type ErrorResponse = Error_400 | Error_401 | Error_403 | Error_404 | Error_429 | Error_500

export type Error_400 = {
  status: 400
  code: 'BadRequest'
  message: 'The request was invalid.'
}

export type Error_401 = {
  status: 401
  code: 'Unauthorized'
  message: 'The authorization token was invalid.'
}

export type Error_403 = {
  status: 403
  code: 'Forbidden'
  message: "The token doesn't have permissions to perform the request."
}

export type Error_404 = {
  status: 404
  code: 'NotFound'
  message: 'The requested resource could not be found.'
}

export type Error_429 = {
  status: 429
  code: 'TooManyRequests'
  message: 'Too many requests, please try again later.'
}

export type Error_500 = {
  status: 500
  code: 'InternalServerError'
  message: 'Something went wrong on the Newt servers.'
}
