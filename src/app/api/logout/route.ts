// logout/route.ts in Nextjs

import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Clear the token from the cookies
        res.setHeader(
            'Set-Cookie',
            'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        );
        return
    }
    catch (error) {
        console.error('Error during logout:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}