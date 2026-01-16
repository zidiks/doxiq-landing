import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "../../../lib/blog";
import { renderMarkdown } from "../../../lib/markdown";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  return getPostSlugs().map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params
}: BlogPostPageProps): Promise<Metadata> => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Статья не найдена"
    };
  }

  const { frontmatter, slug } = post;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      url: `/blog/${slug}`,
      publishedTime: frontmatter.date,
      tags: frontmatter.tags,
      images: frontmatter.cover ? [{ url: frontmatter.cover }] : undefined
    }
  };
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const mdxContent = renderMarkdown(content);

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-3xl px-6 pb-16 pt-16">
        <div className="mb-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-500">
            DoxiQ Blog
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            {frontmatter.title}
          </h1>
          <p className="text-sm text-slate-500">{formattedDate}</p>
          {frontmatter.tags && frontmatter.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2 text-xs">
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
        </div>

        {frontmatter.cover ? (
          <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src={frontmatter.cover}
              alt={frontmatter.title}
              className="h-64 w-full object-cover"
            />
          </div>
        ) : null}

        <article
          className="blog-content space-y-4 text-base text-slate-700"
          dangerouslySetInnerHTML={{ __html: mdxContent }}
        />
      </section>
    </main>
  );
};

export default BlogPostPage;
