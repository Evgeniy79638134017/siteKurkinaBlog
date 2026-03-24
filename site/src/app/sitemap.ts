import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { POSTS } from "@/lib/content/posts";
import { PROGRAMS } from "@/lib/content/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/programs",
    "/results",
    "/partner",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const programRoutes = PROGRAMS.map((program) => ({
    url: `${SITE.url}/programs/${program.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...routes, ...blogRoutes, ...programRoutes];
}
