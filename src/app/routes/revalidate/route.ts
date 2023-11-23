// import { NextRequest, NextResponse } from "next/server";
// import { revalidatePath } from "next/cache";

// export async function GET(request: NextRequest) {
//   const path = request.nextUrl.searchParams.get("path") || "/";
//   console.log("ERROOOOOOOOOOOO");
//   revalidatePath(path, "page");
//   return NextResponse.json({ revalidated: true, now: Date.now() });
// }


import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || "/";
 
  if (path) {
    revalidatePath(path)
    return Response.json({ revalidated: true, now: Date.now() })
  }
 
  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  })
}