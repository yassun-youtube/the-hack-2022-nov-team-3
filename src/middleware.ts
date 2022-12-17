import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]

    // ここで BASE64 の decode を行っていますが、
    // middleware は Edge Runtime 上で動くので、Node.js API の Buffer.from('', 'base64') は利用できないため、代わりに atob を利用しています。
    // https://nextjs.org/docs/api-reference/edge-runtime#encoding-apis
    const [user, pwd] = atob(auth).split(':')

    if (user === 'hogehoge' && pwd === 'hogehoge') {
      return NextResponse.next()
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="TheHack member only"',
    },
  })
}
