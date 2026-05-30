import Link from "next/link";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Git"];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-extrabold mb-4">
        Hi, I'm <span className="text-blue-600">Pavithra</span>
      </h1>
      <p className="text-gray-500 text-lg mb-8">
        Full Stack Developer building fast, accessible web experiences with React & Next.js.
      </p>
      <div className="flex justify-center gap-4 mb-16">
        <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
          View Projects
        </Link>
        <Link href="/contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50">
          Contact Me
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((s) => (
          <span key={s} className="border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
