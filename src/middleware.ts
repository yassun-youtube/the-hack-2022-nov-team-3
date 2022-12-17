import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/member/:path*'],
}

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = atob(auth).split(':')
    const { BASIC_AUTH_USER, BASIC_AUTH_PASSWORD } = process.env

    if (user === BASIC_AUTH_USER && pwd === BASIC_AUTH_PASSWORD) {
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
