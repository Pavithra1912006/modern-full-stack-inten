const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Tech Company",
    period: "2023 – Present",
    description: "Building scalable web applications using React, Next.js and Node.js.",
  },
  {
    role: "Frontend Developer",
    company: "Startup Inc.",
    period: "2022 – 2023",
    description: "Developed responsive UIs and improved performance across the product.",
  },
  {
    role: "Junior Developer",
    company: "Agency Co.",
    period: "2021 – 2022",
    description: "Worked on client websites and internal tools using React and TypeScript.",
  },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Bio */}
      <section className="mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center text-5xl shrink-0">
            👨‍💻
          </div>
          <div className="text-gray-600 text-lg leading-relaxed space-y-4">
            <p>
              I&apos;m <strong className="text-gray-900">Pavithra</strong>, a Full Stack Developer with 3+ years of experience
              building modern web applications. I love turning ideas into clean, performant products.
            </p>
            <p>
              I specialize in React and Next.js on the frontend, and Node.js on the backend. I care deeply
              about code quality, user experience and accessibility.
            </p>
            <p>
              When I&apos;m not coding, I enjoy reading tech blogs, contributing to open source and exploring new frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map(({ category, items }) => (
            <div key={category} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map(({ role, company, period, description }) => (
            <div key={role} className="border-l-4 border-blue-600 pl-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-semibold text-gray-900">{role} — {company}</h3>
                <span className="text-sm text-gray-400">{period}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
