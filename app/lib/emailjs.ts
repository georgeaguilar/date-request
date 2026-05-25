import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
};

export function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-");
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${parseInt(d)} de ${months[parseInt(m) - 1]} de ${y}`;
}

export function formatTime(timeStr: string): string {
  const [h, m] = timeStr.split(":");
  const hr = parseInt(h);
  const ampm = hr >= 12 ? "PM" : "AM";
  const h12 = hr % 12 || 12;
  return `${h12}:${m} ${ampm}`;
}

export async function sendDateEmail(params: {
  date: string;
  time: string;
  food: string;
}): Promise<void> {
  emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });

  await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
    to_email: "georgeaguilar11@hotmail.com",
    date: params.date,
    time: params.time,
    food: params.food,
  });
}
