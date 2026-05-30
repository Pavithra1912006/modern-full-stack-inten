import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, TypeScript and Tailwind CSS. Features a shared layout, multiple pages and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Blog Platform",
    description: "A blog that fetches posts from a REST API, with a list view and dynamic individual post pages using Next.js App Router.",
    tech: ["Next.js", "REST API", "TypeScript"],
    github: "https://github.com",
    live: "/blog",
  },
  {
    title: "Todo CRUD App",
    description: "A full CRUD todo application with add, edit, delete and toggle complete features. Built with React hooks and client-side state.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "/todo",
  },
  {
    title: "E-Commerce Store",
    description: "A full-stack e-commerce app with product listings, cart management and checkout flow.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with rooms and private messaging using WebSockets.",
    tech: ["React", "Socket.io", "Express"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Weather app that shows current conditions and a 7-day forecast using a public weather API.",
    tech: ["React", "TypeScript", "REST API"],
    github: "https://github.com",
    live: "#",
  },
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Projects</h1>
      <p className="text-gray-500 mb-12 text-lg">A selection of things I&apos;ve built.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-bold text-gray-900">{project.title}</h2>
            <p className="text-gray-500 text-sm flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm font-medium">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                GitHub ↗
              </a>
              <Link href={project.live} className="text-blue-600 hover:text-blue-800 transition-colors">
                Live ↗
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
