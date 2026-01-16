import type { Metadata } from "next";

import BlogPostCard from "../../components/BlogPostCard";
import { getAllPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Блог DoxiQ",
  description: "Новости и материалы о шаблонах документов, автоматизации и DoxiQ."
};

const BlogPage = () => {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16">
        <div className="mb-10 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-500">
            DoxiQ Blog
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Блог о документах и шаблонах
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 md:text-base">
            Публикуем заметки о том, как ускорять работу с документами, хранить
            шаблоны в одном месте и снижать количество ошибок.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            Пока нет публикаций. Добавьте статьи в папку
            <span className="font-semibold"> /content/posts</span>.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default BlogPage;
