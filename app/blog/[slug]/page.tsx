import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPostBySlug } from "../../../lib/blog";

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const html = await marked.parse(post.content);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12">
        <Link href="/blog" className="text-sm text-brand-100 hover:text-white">
          ← Вернуться в блог
        </Link>
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {formatDate(post.date)}
          </p>
          <h1 className="text-4xl font-semibold">{post.title}</h1>
          {post.description ? (
            <p className="text-base text-slate-300">{post.description}</p>
          ) : null}
        </header>
        <div
          className="blog-content space-y-6 text-slate-200"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}
