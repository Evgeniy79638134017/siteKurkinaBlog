import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { POSTS } from "@/lib/content/posts";
import { CONTACT } from "@/lib/constants";

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Статья не найдена" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Простой парсинг markdown для текущей структуры постов
  const formattedContent = post.content
    ? post.content
        .replace(/## (.*)/g, '<h2 className="font-display text-3xl text-[#2C1810] font-semibold mt-10 mb-4">$1</h2>')
        .replace(/\* \*\*(.*?)\*\*(.*)/g, '<li className="mb-2"><strong className="text-[#2C1810] font-semibold">$1</strong>$2</li>')
        .replace(/\n\n/g, '</p><p className="font-sans text-lg text-[#6B5B52] leading-relaxed mb-6">')
    : "Контент в разработке.";

  return (
    <>
      <article className="pt-32 pb-16 bg-[#F7F0E6]">
        <div className="container-site max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-sans font-semibold text-[#96AB88] hover:text-[#7A9270] transition-colors mb-8"
          >
            ← Все статьи
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#96AB88] bg-[#96AB88]/10 px-3 py-1 rounded-full">
              {post.tags[0]}
            </span>
            <span className="font-sans text-xs text-[#A58D7F]">{post.readTime}</span>
            <span className="font-sans text-xs text-[#A58D7F]">
              {new Date(post.date).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl text-[#2C1810] mb-8 leading-tight">{post.title}</h1>
          <p className="font-sans text-xl text-[#6B5B52] leading-relaxed mb-6 font-medium">
            {post.excerpt}
          </p>
        </div>
      </article>

      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl">
          
          <div 
            className="font-sans text-lg text-[#6B5B52] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: `<p className="font-sans text-lg text-[#6B5B52] leading-relaxed mb-6">${formattedContent}</p>` }}
          />

          <hr className="my-16 border-[#E5D5C5]" />
          
          <div className="bg-[#F4E1C4] rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl text-[#2C1810] mb-4">
              Хотите персональный разбор?
            </h3>
            <p className="font-sans text-[#6B5B52] text-lg mb-8">
              Запишитесь на бесплатную консультацию. Я выслушаю вашу ситуацию и подскажу, с чего начать восстановление.
            </p>
            <a
              href={CONTACT.telegramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#96AB88] text-white rounded-full font-sans font-semibold hover:bg-[#7A9270] transition-colors"
            >
              Написать мне лично
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
