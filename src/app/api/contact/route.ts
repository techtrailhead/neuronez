import type { NextRequest } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const fromEmail = process.env.RESEND_FROM_EMAIL || "neuronez@resend.dev";
const toEmail = "contact@ankita.cc";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, project, company, message } = await req.json();

    if (!name || !email || !phone || !project || !company) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project Brief: ${project}`,
      `Company: ${company}`,
      `Message: ${message || "N/A"}`,
    ].join("\n");

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY env var.");
      return new Response(
        JSON.stringify({ error: "Email service not configured. Please add RESEND_API_KEY." }),
        { status: 500 },
      );
    }

    const resendRes = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Lab request — ${name}`,
        text,
        reply_to: email,
      }),
    });

    if (!resendRes.ok) {
      const errorText = await resendRes.text();
      console.error("Resend error:", errorText);
      return new Response(
        JSON.stringify({ error: "Email provider rejected the request. Check API key or from domain." }),
        { status: 502 },
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(JSON.stringify({ error: "Unexpected error." }), { status: 500 });
  }
}
