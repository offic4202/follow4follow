import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  const match = pathname.match(/\/moveon=(.+)$/);
  if (!match) {
    return NextResponse.json({ error: "Invalid redirect format" }, { status: 400 });
  }

  const encodedUrl = match[1];
  const decodedUrl = decodeURIComponent(encodedUrl);

  if (!decodedUrl.startsWith("http://") && !decodedUrl.startsWith("https://")) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  try {
    new URL(decodedUrl);
  } catch {
    return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
  }

  return NextResponse.redirect(decodedUrl, { status: 302 });
}