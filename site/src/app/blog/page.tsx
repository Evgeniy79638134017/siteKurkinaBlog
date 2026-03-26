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
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sage mb-4">
              Полезные материалы
            </p>
            <h1 className="font-display text-dark mb-6">
              Блог
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed">
              Статьи о биохакинге, клеточном питании и активном долголетии.
              Всё основано на личном опыте и реальных историях клиентов.
            </p>
          </div>
        </div>
      </section>

      {/* Статьи */}
      <section className="section-padding bg-beige">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(44,24,16,0.06)] hover:shadow-[0_8px_40px_rgba(44,24,16,0.10)] transition-shadow flex flex-col"
              >
                {/* Шапка */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-sage bg-sage/10 px-3 py-1 rounded-full">
                    {post.tags[0]}
                  </span>
                  <span className="font-sans text-xs text-taupe">{post.readTime}</span>
                </div>

                {/* Заголовок */}
                <h2 className="font-display text-xl text-dark mb-3 leading-snug group-hover:text-sage transition-colors flex-1">
                  {post.title}
                </h2>

                {/* Описание */}
                <p className="font-sans text-muted text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                {/* Дата + ссылка */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="font-sans text-xs text-taupe">
                    {new Date(post.date).toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="font-sans text-sm font-semibold text-sage group-hover:text-sage-dark transition-colors">
                    Читать →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — подписаться */}
      <section className="section-padding bg-sage">
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
            className="inline-flex items-center px-8 py-4 bg-white text-sage-dark rounded-full font-sans font-semibold text-lg hover:bg-cream transition-colors"
          >
            Подписаться на канал
          </a>
        </div>
      </section>
    </>
  );
}
