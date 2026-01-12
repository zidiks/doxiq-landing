import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");

const normalizePost = (slug: string, data: Record<string, unknown>, content: string): BlogPost => {
  const title = typeof data.title === "string" ? data.title : "Без названия";
  const description = typeof data.description === "string" ? data.description : "";
  const date = typeof data.date === "string" ? data.date : new Date().toISOString();

  return {
    slug,
    title,
    description,
    date,
    content
  };
};

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name);

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(postsDirectory, filename);
      const raw = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(raw);
      return normalizePost(slug, data, content);
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(raw);
    return normalizePost(slug, data, content);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === "ENOENT") {
      return null;
    }

    throw error;
  }
};
