import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json(
        { error: "Missing CONTACT_TO_EMAIL" },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    // Resend requires a verified sender address for `from`.
    // Customer's email is set as replyTo so you can reply directly.
    const fromAddress =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const from = `${sanitizeFromName(name)} via Portfolio <${fromAddress}>`;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: [
        `From: ${name} <${email}>`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <p style="margin:0 0 4px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:.08em;">From</p>
          <p style="margin:0 0 16px;"><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p>
          <p style="margin:0 0 4px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:.08em;">Message</p>
          <p style="margin:0;white-space:pre-wrap;">${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizeFromName(value: string) {
  return value.replace(/[<>\r\n]/g, "").slice(0, 64) || "Guest";
}
