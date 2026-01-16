import fs from "fs";
import path from "path";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  cover?: string;
};

export type PostSummary = {
  slug: string;
  frontmatter: PostFrontmatter;
};

export type PostContent = PostSummary & {
  content: string;
};

const POSTS_PATH = path.join(process.cwd(), "content/posts");

const parseFrontmatter = (
  source: string
): { data: Record<string, unknown>; content: string } => {
  const frontmatterMatch = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);

  if (!frontmatterMatch) {
    return { data: {}, content: source };
  }

  const rawFrontmatter = frontmatterMatch[1];
  const content = source.slice(frontmatterMatch[0].length);
  const data: Record<string, unknown> = {};

  rawFrontmatter.split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      return;
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();

    if (!key) {
      return;
    }

    if (rawValue.startsWith("[")) {
      try {
        data[key] = JSON.parse(rawValue);
      } catch {
        data[key] = rawValue;
      }
      return;
    }

    data[key] = rawValue.replace(/^"|"$/g, "");
  });

  return { data, content };
};

const getPostFilePath = (slug: string): string | null => {
  const mdxPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const mdPath = path.join(POSTS_PATH, `${slug}.md`);

  if (fs.existsSync(mdxPath)) {
    return mdxPath;
  }

  if (fs.existsSync(mdPath)) {
    return mdPath;
  }

  return null;
};

const normalizeFrontmatter = (data: Record<string, unknown>): PostFrontmatter => {
  const tagsValue = data.tags;

  return {
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(tagsValue) ? tagsValue.map((tag) => String(tag)) : undefined,
    cover: data.cover ? String(data.cover) : undefined
  };
};

export const getPostSlugs = (): string[] => {
  if (!fs.existsSync(POSTS_PATH)) {
    return [];
  }

  return fs
    .readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
};

export const getPostBySlug = (slug: string): PostContent | null => {
  const filePath = getPostFilePath(slug);

  if (!filePath) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = parseFrontmatter(fileContents);

  return {
    slug,
    frontmatter: normalizeFrontmatter(data),
    content
  };
};

export const getAllPosts = (): PostSummary[] => {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is PostContent => post !== null)
    .map((post) => ({
      slug: post.slug,
      frontmatter: post.frontmatter
    }))
    .sort((a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
};
