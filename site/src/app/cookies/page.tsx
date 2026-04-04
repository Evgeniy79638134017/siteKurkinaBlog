import { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Политика Cookie",
  description:
    "Политика использования cookie-файлов на сайте Ольги Куркиной.",
};

export default function CookiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sage mb-4">
              Документы
            </p>
            <h1 className="font-display text-dark mb-6">
              Политика использования cookie
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed">
              Как и зачем сайт{" "}
              <span className="text-dark font-medium">{SITE.url}</span>{" "}
              использует cookie-файлы
            </p>
          </div>
        </div>
      </section>

      {/* Контент */}
      <section className="section-padding bg-beige">
        <div className="container-site">
          <div className="max-w-3xl space-y-10">
            <Block number="1" title="Что такое cookie-файлы">
              <p>
                Cookie — это небольшие текстовые файлы, кото��ые сохраняются на
                вашем устройстве при посещении сайта. Они помогают сайту
                запоминать ваши предпочтения и обеспечивают корректную работу
                функционала.
              </p>
            </Block>

            <Block number="2" title="Какие cookie мы используем">
              <p>
                <span className="font-medium text-dark">
                  Строго необходимые (технические):
                </span>{" "}
                обеспечивают базовую работу сайта — навигацию, безопасность,
                сохранение вашего выбора о cookie. Без них сайт не может
                функционировать. Не требуют согласия.
              </p>
              <p>
                <span className="font-medium text-dark">
                  Аналитические:
                </span>{" "}
                помогают понять, как посетители используют сайт (какие страницы
                посещают, откуда приходят). Данные собираются в обезличенном
                виде. Устанавливаются только с вашего согласия. На Сайте могут
                использоваться следующие сервисы аналитики:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <span className="font-medium text-dark">
                    Яндекс.Метрика
                  </span>{" "}
                  (ООО «Яндекс», Россия) — сбор статистики посещений,
                  вебвизор, карта кликов.{" "}
                  <a
                    href="https://yandex.ru/legal/confidential/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage underline hover:text-sage-dark transition-colors"
                  >
                    Политика конфиденциальности Яндекса
                  </a>
                </li>
                <li>
                  <span className="font-medium text-dark">
                    Google Analytics
                  </span>{" "}
                  (Google LLC, США) — анализ трафика и поведения
                  пользователей.{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage underline hover:text-sage-dark transition-colors"
                  >
                    Политика конфиденциальности Google
                  </a>
                </li>
              </ul>
              <p>
                Перечень сервисов может изменяться. Актуальный список всегда
                отражён на данной странице.
              </p>
            </Block>

            <Block number="3" title="Правовое основание">
              <p>
                Обработка данных через cookie осуществляется в соответствии с
                Федеральным законом от 27.07.2006 N 152-ФЗ «О персональных
                данных» и Федеральным законом от 27.07.2006 N 149-ФЗ «Об
                информации, информационных технологиях и о защите информации».
              </p>
              <p>
                Аналитические cookie устанавливаются только после получения
                вашего явного и активного согласия через баннер при первом
                посещении сайта.
              </p>
            </Block>

            <Block number="4" title="Срок хранения">
              <p>
                Технические cookie действуют в течение сессии браузера или до
                1 года. Аналитические cookie хранятся до 2 лет с момента
                последнего посещения сайта.
              </p>
            </Block>

            <Block number="5" title="Управление cookie">
              <p>
                Вы можете в любой момент изменить или отозвать своё согласие.
                Для этого:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Очистите данные сайта в настройках браузера — при следующем
                  посещении баннер cookie появится снова
                </li>
                <li>
                  Отключите cookie полностью в настройках браузера (некоторые
                  функции сайта могут перестать работать)
                </li>
              </ul>
            </Block>

            <Block number="6" title="Передача данных третьим лицам">
              <p>
                Данные, собранные через аналитические cookie, могут
                передаваться поставщикам систем веб-аналитики исключительно
                для целей формирования статистики посещений. Передача
                осуществляется в обезличенном виде.
              </p>
            </Block>

            <Block number="7" title="Изменение Политики">
              <p>
                Оператор вправе обновлять настоящую Политику. Актуальная
                версия всегда доступна на данной странице.
              </p>
              <p className="text-sm text-taupe">
                Дата последнего обновления: 4 апреля 2026 г.
              </p>
            </Block>

            <div className="flex gap-6 pt-4">
              <Link
                href="/privacy"
                className="text-sage hover:text-sage-dark font-sans font-medium transition-colors"
              >
                Политика конфиденциальности &rarr;
              </Link>
              <Link
                href="/terms"
                className="text-sage hover:text-sage-dark font-sans font-medium transition-colors"
              >
                Пользовательское соглашение &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl text-dark mb-4">
        {number}. {title}
      </h2>
      <div className="font-sans text-muted leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
