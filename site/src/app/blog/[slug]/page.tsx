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

function parseContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: { type: "heading" | "list-item" | "paragraph"; text: string }[] = [];
  let currentParagraph = "";

  const flushParagraph = () => {
    const trimmed = currentParagraph.trim();
    if (trimmed) {
      elements.push({ type: "paragraph", text: trimmed });
    }
    currentParagraph = "";
  };

  for (const line of lines) {
    const headingMatch = line.match(/^## (.+)/);
    const listMatch = line.match(/^\* \*\*(.+?)\*\*(.*)/) || line.match(/^(\d+)\. \*\*(.+?)\*\*(.*)/);

    if (headingMatch) {
      flushParagraph();
      elements.push({ type: "heading", text: headingMatch[1] });
    } else if (listMatch) {
      flushParagraph();
      elements.push({ type: "list-item", text: line });
    } else if (line.trim() === "") {
      flushParagraph();
    } else {
      currentParagraph += (currentParagraph ? " " : "") + line.trim();
    }
  }
  flushParagraph();

  return elements;
}

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-semibold text-dark">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

function renderListItem(text: string) {
  const bulletMatch = text.match(/^\* \*\*(.+?)\*\*(.*)/);
  const numberedMatch = text.match(/^(\d+)\. \*\*(.+?)\*\*(.*)/);

  if (bulletMatch) {
    return (
      <>
        <strong className="font-semibold text-dark">{bulletMatch[1]}</strong>
        {bulletMatch[2]}
      </>
    );
  }
  if (numberedMatch) {
    return (
      <>
        {numberedMatch[1]}.{" "}
        <strong className="font-semibold text-dark">{numberedMatch[2]}</strong>
        {numberedMatch[3]}
      </>
    );
  }
  return <>{renderInlineMarkdown(text)}</>;
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const contentElements = post.content ? parseContent(post.content) : [];

  return (
    <>
      <article className="pt-32 pb-16 bg-cream">
        <div className="container-site max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-sans font-semibold text-sage hover:text-sage-dark transition-colors mb-8"
          >
            ← Все статьи
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-sage bg-sage/10 px-3 py-1 rounded-full">
              {post.tags[0]}
            </span>
            <span className="font-sans text-xs text-taupe">{post.readTime}</span>
            <span className="font-sans text-xs text-taupe">
              {new Date(post.date).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl text-dark mb-8 leading-tight">{post.title}</h1>
          <p className="font-sans text-xl text-muted leading-relaxed mb-6 font-medium">
            {post.excerpt}
          </p>
        </div>
      </article>

      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl">
          <div className="space-y-6">
            {contentElements.length > 0 ? (
              contentElements.map((el, i) => {
                if (el.type === "heading") {
                  return (
                    <h2
                      key={i}
                      className="font-display text-3xl text-dark font-semibold mt-10 mb-4"
                    >
                      {el.text}
                    </h2>
                  );
                }
                if (el.type === "list-item") {
                  return (
                    <li
                      key={i}
                      className="mb-2 font-sans text-lg text-muted leading-relaxed list-disc ml-6"
                    >
                      {renderListItem(el.text)}
                    </li>
                  );
                }
                return (
                  <p
                    key={i}
                    className="font-sans text-lg text-muted leading-relaxed"
                  >
                    {renderInlineMarkdown(el.text)}
                  </p>
                );
              })
            ) : (
              <p className="font-sans text-lg text-muted leading-relaxed">
                Контент в разработке.
              </p>
            )}
          </div>

          <hr className="my-16 border-border" />

          <div className="bg-beige rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl text-dark mb-4">
              Хотите персональный разбор?
            </h3>
            <p className="font-sans text-muted text-lg mb-8">
              Запишитесь на бесплатную консультацию. Я выслушаю вашу ситуацию и подскажу, с чего начать восстановление.
            </p>
            <a
              href={CONTACT.telegramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-sage text-white rounded-full font-sans font-semibold hover:bg-sage-dark transition-colors"
            >
              Написать мне лично
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
