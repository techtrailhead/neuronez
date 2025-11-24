import type { NextRequest } from "next/server";

const SHEET_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbyFd5ynFtDriVel4PaxVBcqulLGQuuZ6S7F3mwSNl8Fi37XUY63UYZQSY1ABSscAp2wEg/exec";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const { name, email, phone, project, company } = payload;

    if (!name || !email || !phone || !project || !company) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }

    const res = await fetch(SHEET_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Sheet webhook error:", res.status, errorText);
      return new Response(
        JSON.stringify({
          error: `Sheet endpoint responded with ${res.status}. Verify the Web App URL and access settings.`,
        }),
        { status: 502 },
      );
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(
      JSON.stringify({
        error: "Unexpected error reaching Sheets. Please try again or use the email fallback.",
      }),
      { status: 500 },
    );
  }
}
