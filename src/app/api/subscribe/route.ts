import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, score } = body;

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Valid email is required" },
      { status: 400 }
    );
  }

  // TODO: Integrate with ConvertKit or other email provider
  // For now, log and return success
  console.log(`New subscriber: ${email} (score: ${score})`);

  return NextResponse.json({ success: true });
}
