import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  let decodedUrl = url;
  if (url.includes("=")) {
    const match = url.match(/=[^=]*$/);
    if (match) {
      decodedUrl = decodeURIComponent(match[0].substring(1));
    }
  }

  if (!decodedUrl.startsWith("http://") && !decodedUrl.startsWith("https://")) {
    decodedUrl = `https://${decodedUrl}`;
  }

  try {
    new URL(decodedUrl);
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  return NextResponse.redirect(decodedUrl, { status: 302 });
}