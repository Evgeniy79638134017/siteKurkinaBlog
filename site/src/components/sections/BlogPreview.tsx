"use client";

import { ImageIcon } from "lucide-react";
import { blogData } from "@/lib/data/blog-posts";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogPreview() {
  return (
    <section id="blog" className="bg-bg-main py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <ScrollReveal direction="up" className="mb-10 text-center md:mb-14">
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            {blogData.heading}
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal
          direction="up"
          stagger={0.15}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {blogData.posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image placeholder */}
              <div className="flex aspect-video items-center justify-center bg-bg-warm/40">
                <ImageIcon className="h-8 w-8 text-text-secondary/30" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <time className="mb-2 text-xs text-text-secondary">
                  {formatDate(post.date)}
                </time>
                <h3 className="mb-2 font-heading text-lg font-bold text-text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {post.excerpt}
                </p>
                <span className="text-sm font-medium text-accent transition-colors group-hover:text-accent-hover">
                  Читать →
                </span>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
