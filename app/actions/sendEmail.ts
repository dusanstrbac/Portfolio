"use server";

import { Resend } from "resend";

// Inicijalizacija sa API ključem koji ćeš dodati na Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: { user_name: string; user_email: string; message: string }) {
  try {
    const { user_name, user_email, message } = data;

    const response = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Kasnije poveži svoj domen ovde
      to: "dusan.strbac01@gmail.com", // Tvoj privatni email
      subject: `Nova poruka od: ${user_name}`,
      replyTo: user_email,
      text: `Ime: ${user_name}\nEmail: ${user_email}\n\nPoruka:\n${message}`,
    });

    if (response.error) {
      return { success: false, error: response.error.message };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: "Došlo je do neočekivane greške." };
  }
}