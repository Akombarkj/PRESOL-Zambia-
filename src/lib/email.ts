import nodemailer from "nodemailer";

type Notification = { subject: string; text: string; replyTo?: string };

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  if (!host || !user || !password) return null;
  return nodemailer.createTransport({ host, port, secure: process.env.SMTP_SECURE === "true", auth: { user, pass: password } });
}

export async function sendNotification(notification: Notification) {
  const transporter = getTransporter();
  const recipient = process.env.NOTIFICATION_EMAIL ?? "info@presol.co.zm";
  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER;
  if (!transporter || !from) return { sent: false, reason: "Email is not configured" };
  await transporter.sendMail({ from, to: recipient, replyTo: notification.replyTo, subject: notification.subject, text: notification.text });
  return { sent: true };
}