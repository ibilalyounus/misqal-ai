import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Misqal waitlist API is live.",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body.email || "").trim().toLowerCase();
    const role = String(body.role || "").trim();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("waitlist").insert({
      email,
      role,
      source: "website",
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "You are already on the waitlist." },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "You are on the waitlist." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}