"use server";

import { Resend } from "resend";

interface ResendMessage {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendMessageAcction(message: ResendMessage) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  await resend.emails.send(message);
}
