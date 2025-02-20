import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  (await cookies()).delete("token");
  return NextResponse.json({ success: true });
}





// import { NextResponse } from 'next/server';
// import { serialize } from 'cookie';

// export async function GET() {
//   const cookie = serialize('admin_token', '', {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     path: '/',
//     expires: new Date(0),
//   });

//   return new NextResponse(JSON.stringify({ message: 'Logged out' }), {
//     status: 200,
//     headers: { 'Set-Cookie': cookie },
//   });
// }
