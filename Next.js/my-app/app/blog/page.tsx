import Link from "next/link";
import { posts } from "./data";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-2">Blog</h1>
      <p className="text-gray-500 mb-10">Thoughts on web development, tools and best practices.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="border rounded-xl p-5 flex flex-col gap-2 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-blue-600 uppercase">{post.category}</span>
            <h2 className="font-bold text-gray-900">{post.title}</h2>
            <p className="text-gray-500 text-sm flex-1">{post.excerpt}</p>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
