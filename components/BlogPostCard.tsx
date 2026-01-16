import Link from "next/link";

import type { PostSummary } from "../lib/blog";

type BlogPostCardProps = {
  post: PostSummary;
};

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const { slug, frontmatter } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {frontmatter.cover ? (
        <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
          <img
            src={frontmatter.cover}
            alt={frontmatter.title}
            className="h-40 w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          {formattedDate}
        </p>
        <h2 className="text-xl font-semibold text-slate-900">
          <Link className="hover:text-brand-500" href={`/blog/${slug}`}>
            {frontmatter.title}
          </Link>
        </h2>
        <p className="text-sm text-slate-600">{frontmatter.description}</p>
      </div>
      {frontmatter.tags && frontmatter.tags.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-2 text-xs">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
};

export default BlogPostCard;
