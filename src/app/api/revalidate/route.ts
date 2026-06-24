import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/revalidate
 *
 * Called by the Contentful webhook on every Entry publish/unpublish.
 * Revalidates only the blog index and all blog post pages — no full rebuild.
 *
 * Protected by a secret token: set REVALIDATE_SECRET in .env.local and in
 * the Amplify console env vars. Pass it as ?secret=<token> in the webhook URL.
 */
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'REVALIDATE_SECRET not configured' }, { status: 500 });
  }

  if (token !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  revalidatePath('/blog', 'page');
  revalidatePath('/blog/[slug]', 'page');

  return NextResponse.json({ revalidated: true, timestamp: new Date().toISOString() });
}
