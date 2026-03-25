"use client";

import Link from "next/link";
import { motion } from "motion/react";

const PREVIEW_POSTS = [
  {
    tag: "Биохакинг",
    title: "Клеточное питание: что это такое и почему оно работает, когда лекарства не помогают",
    excerpt:
      "Разбираем разницу между обычными витаминами и клеточным питанием. Почему один подход даёт временный эффект, а другой — стойкую ремиссию.",
    readTime: "5 мин",
    slug: "cellular-nutrition-basics",
  },
  {
    tag: "Здоровье 50+",
    title: "Почему в 50+ организм работает иначе и что с этим делать",
    excerpt:
      "После 50 лет у каждого человека снижается усвоение питательных веществ на 30–40%. Именно поэтому обычный рацион перестаёт справляться.",
    readTime: "4 мин",
    slug: "why-body-changes-after-50",
  },
  {
    tag: "Истории",
    title: "Как семья из Казахстана вернулась к активной жизни: суставы, давление, ЖКТ",
    excerpt:
      "Муж, 67 лет — суставы и давление. Жена, 60 лет — тахикардия и боли. Через 2 месяца оба начали путешествовать и работать в саду.",
    readTime: "6 мин",
    slug: "kazakhstan-family-case",
  },
];

export function BlogPreview() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-site">

        {/* Заголовок */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-sage-dark mb-3">
              Блог
            </p>
            <h2 className="font-display text-dark">
              Полезные статьи
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-sans font-semibold text-sage-dark hover:text-dark transition-colors flex-shrink-0"
          >
            Все статьи →
          </Link>
        </div>

        {/* Карточки статей со stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREVIEW_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
            <Link
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(44,24,16,0.06)] hover:shadow-[0_20px_60px_rgba(44,24,16,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Тег и время */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-sage-dark bg-sage/10 px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="font-sans text-xs text-taupe">
                  {post.readTime}
                </span>
              </div>

              {/* Заголовок */}
              <h3 className="font-display text-xl text-dark mb-3 leading-snug group-hover:text-sage transition-colors flex-1">
                {post.title}
              </h3>

              {/* Описание */}
              <p className="font-sans text-muted text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Ссылка */}
              <span className="font-sans text-sm font-semibold text-sage-dark group-hover:text-dark transition-colors mt-auto">
                Читать →
              </span>
            </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
