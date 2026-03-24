import { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { POSTS } from "@/lib/content/posts";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Статьи о биохакинге, клеточном питании и активном долголетии для людей 50+.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F7F0E6]">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-[#96AB88] mb-4">
              Полезные материалы
            </p>
            <h1 className="font-display text-[#2C1810] mb-6">
              Блог
            </h1>
            <p className="font-sans text-xl text-[#6B5B52] leading-relaxed">
              Статьи о биохакинге, клеточном питании и активном долголетии.
              Всё основано на личном опыте и реальных историях клиентов.
            </p>
          </div>
        </div>
      </section>

      {/* Статьи */}
      <section className="section-padding bg-[#F4E1C4]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(44,24,16,0.06)] hover:shadow-[0_8px_40px_rgba(44,24,16,0.10)] transition-shadow flex flex-col"
              >
                {/* Шапка */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#96AB88] bg-[#96AB88]/10 px-3 py-1 rounded-full">
                    {post.tags[0]}
                  </span>
                  <span className="font-sans text-xs text-[#A58D7F]">{post.readTime}</span>
                </div>

                {/* Заголовок */}
                <h2 className="font-display text-xl text-[#2C1810] mb-3 leading-snug group-hover:text-[#96AB88] transition-colors flex-1">
                  {post.title}
                </h2>

                {/* Описание */}
                <p className="font-sans text-[#6B5B52] text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                {/* Дата + ссылка */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E5D5C5]">
                  <span className="font-sans text-xs text-[#A58D7F]">
                    {new Date(post.date).toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#96AB88] group-hover:text-[#7A9270] transition-colors">
                    Читать →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — подписаться */}
      <section className="section-padding bg-[#96AB88]">
        <div className="container-site text-center">
          <h2 className="font-display text-white mb-4">
            Новые статьи — в Telegram-канале
          </h2>
          <p className="font-sans text-white/80 text-lg mb-8 max-w-lg mx-auto">
            Подпишитесь, чтобы не пропустить полезные материалы о здоровье и долголетии.
          </p>
          <a
            href={CONTACT.telegramChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-[#7A9270] rounded-full font-sans font-semibold text-lg hover:bg-[#F7F0E6] transition-colors"
          >
            Подписаться на канал
          </a>
        </div>
      </section>
    </>
  );
}
