import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const url = request.nextUrl.clone()
	const hostname = url.hostname
	const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1'
	const isMudanzasDomain = hostname === 'mudanzasbilbo.com' || hostname === 'www.mudanzasbilbo.com'

	// Do not force redirects in development or for non-target domains
	if (isLocalhost || !isMudanzasDomain) {
		return NextResponse.next()
	}

	let shouldRedirect = false

	// Enforce HTTPS based on proxy header or protocol
	const forwardedProto = request.headers.get('x-forwarded-proto')
	if (forwardedProto && forwardedProto !== 'https') {
		url.protocol = 'https:'
		shouldRedirect = true
	}

	// Enforce www subdomain
	if (hostname === 'mudanzasbilbo.com') {
		url.hostname = 'www.mudanzasbilbo.com'
		shouldRedirect = true
	}

	return shouldRedirect ? NextResponse.redirect(url, 308) : NextResponse.next()
}

export const config = {
	matcher: '/:path*',
}
