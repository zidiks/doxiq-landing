import Link from "next/link";
import { getAllPosts } from "../../lib/blog";

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Блог</p>
          <h1 className="text-4xl font-semibold">Новости и материалы DoxiQ</h1>
          <p className="max-w-2xl text-base text-slate-300">
            Собираем заметки о шаблонах, автоматизации документов и кейсах команды.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {formatDate(post.date)}
                </span>
                <h2 className="text-2xl font-semibold text-white group-hover:text-brand-100">
                  {post.title}
                </h2>
                {post.description ? (
                  <p className="text-sm text-slate-300">{post.description}</p>
                ) : null}
                <span className="mt-2 inline-flex items-center gap-2 text-sm text-brand-100">
                  Читать статью
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
