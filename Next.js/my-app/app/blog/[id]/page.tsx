import Link from "next/link";
import { posts } from "../data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ id: String(p.id) }));
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-blue-600 hover:underline">← Back to Blog</Link>

      <div className="flex gap-3 text-xs text-gray-400 mt-6 mb-3">
        <span className="text-blue-600 font-semibold uppercase">{post.category}</span>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>

      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">{post.title}</h1>

      <div className="text-gray-600 text-lg leading-relaxed space-y-5">
        {post.body.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </div>
  );
}
