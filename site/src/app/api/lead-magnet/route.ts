import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    await getResend().emails.send({
      from: "Ольга Куркина <onboarding@resend.dev>",
      to: data.email,
      subject: "Ваш чек-лист здоровья 50+",
      html: `
        <h2>Здравствуйте, ${data.name}!</h2>
        <p>Спасибо за интерес к здоровому образу жизни.</p>
        <p>Ваш чек-лист здоровья будет отправлен в ближайшее время.</p>
        <p>С уважением,<br/>Ольга Куркина</p>
      `,
    });

    // Уведомление владельцу о новом подписчике
    await getResend().emails.send({
      from: "Сайт Ольги Куркиной <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL ?? "onboarding@resend.dev",
      subject: `Новый подписчик: ${data.name}`,
      html: `
        <h2>Новый подписчик на чек-лист</h2>
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
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
    console.error("Lead magnet form error:", error);
    return NextResponse.json(
      { error: "Не удалось отправить чек-лист. Попробуйте позже." },
      { status: 500 }
    );
  }
}
