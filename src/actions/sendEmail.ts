"use server";

import { Resend } from "resend";
import { validateString } from "@/libs/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const senderSubject = formData.get("senderSubject");
  const senderMessage = formData.get("senderMessage");

  if (!validateString(senderEmail, 50)) {
    return {
      error: "Invalid sender email"
    };
  }
  if (!validateString(senderMessage, 5000)) {
    return {
      error: "Invalid sender message"
    };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "irvanagamingyt@gmail.com",
    subject: "Message from contact from",
    reply_to: senderEmail as string,
    text: senderMessage as string
  });
};
