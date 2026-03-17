import { createClient } from '@/lib/supabase/middleware'
import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = createClient(request)
  
  console.log('middleware a correr')

  if (request.nextUrl.pathname.startsWith('/admin')) {
    const { data: { user }, error } = await supabase.auth.getUser()

    console.log('user:', user)
    console.log('error:', error)

    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}