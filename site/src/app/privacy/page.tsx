import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Ольга Куркина",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-24 pb-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-hover"
      >
        <ArrowLeft className="h-4 w-4" />
        Вернуться на главную
      </Link>

      <h1 className="mb-8 font-heading text-3xl font-bold text-text-primary md:text-4xl">
        Политика конфиденциальности
      </h1>

      <div className="space-y-6 text-base leading-relaxed text-text-secondary">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            1. Общие положения
          </h2>
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки и
            защиты персональных данных пользователей сайта kurkina.ru (далее —
            Сайт). Оператором персональных данных является ИП Куркина Ольга
            (далее — Оператор).
          </p>
          <p className="mt-2">
            К персональным данным относятся: имя, номер телефона, адрес
            электронной почты, данные о посещении сайта (cookie-файлы, IP-адрес).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            2. Цели сбора данных
          </h2>
          <ul className="list-inside list-disc space-y-1">
            <li>Обработка заявок на консультацию</li>
            <li>Связь с пользователем по указанным контактным данным</li>
            <li>Улучшение качества работы сайта и анализ посещаемости</li>
            <li>Выполнение требований законодательства РФ</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            3. Условия обработки
          </h2>
          <p>
            Оператор не передаёт персональные данные третьим лицам без согласия
            пользователя, за исключением случаев, предусмотренных
            законодательством Российской Федерации. Данные обрабатываются в
            соответствии с Федеральным законом №&nbsp;152-ФЗ «О персональных
            данных».
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            4. Cookie-файлы
          </h2>
          <p>
            Сайт использует cookie-файлы для обеспечения корректной работы,
            сохранения пользовательских предпочтений и сбора статистики
            посещаемости (Яндекс.Метрика). Вы можете отключить cookie в
            настройках браузера, однако это может повлиять на функциональность
            сайта.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            5. Права пользователя
          </h2>
          <p>Вы имеете право:</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>Запросить информацию о хранимых персональных данных</li>
            <li>Потребовать исправления или удаления персональных данных</li>
            <li>Отозвать согласие на обработку персональных данных</li>
          </ul>
          <p className="mt-2">
            Для реализации указанных прав свяжитесь с Оператором по контактам,
            указанным ниже.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-text-primary">
            6. Контактные данные оператора
          </h2>
          <p>
            Email:{" "}
            <a
              href="mailto:info@kurkina.ru"
              className="text-accent underline underline-offset-2"
            >
              info@kurkina.ru
            </a>
          </p>
          <p>Телефон: по запросу</p>
        </section>

        <p className="pt-4 text-sm text-text-secondary/70">
          Дата последнего обновления: 9 марта 2026 г.
        </p>
      </div>
    </main>
  );
}
