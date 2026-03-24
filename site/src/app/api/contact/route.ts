import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  contact: z.string().min(5),
  message: z.string().optional(),
});

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    await getResend().emails.send({
      from: "Сайт Ольги Куркиной <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL ?? "onboarding@resend.dev",
      subject: `Заявка на консультацию от ${data.name}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Контакт:</strong> ${data.contact}</p>
        ${data.message ? `<p><strong>Сообщение:</strong> ${data.message}</p>` : ""}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Некорректные данные формы." },
        { status: 400 }
      );
    }
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Не удалось отправить заявку. Попробуйте позже." },
      { status: 500 }
    );
  }
}
