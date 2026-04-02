import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase env vars:', { 
        hasUrl: !!supabaseUrl, 
        hasKey: !!supabaseKey 
      })
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const { email } = await req.json()

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const normalizedEmail = email.trim().toLowerCase()
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { error } = await supabase
      .from('waitlist')
      .insert({ email: normalizedEmail })

    if (error) {
      // Duplicate email is fine — treat as success
      if (error.code === '23505') {
        return NextResponse.json({ ok: true })
      }
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Waitlist route error:', err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
