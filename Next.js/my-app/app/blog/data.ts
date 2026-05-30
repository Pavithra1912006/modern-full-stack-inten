export type Post = {
  id: number;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  date: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js App Router",
    excerpt: "Learn how the App Router works in Next.js 13+ and how it differs from the Pages Router.",
    body: `The App Router is the new way to build Next.js applications. It uses React Server Components by default, which means your components run on the server and send only HTML to the client.\n\nWith the App Router, you create a folder called app/ and place page.tsx files inside it. Each folder becomes a route segment. For example, app/about/page.tsx maps to /about.\n\nLayouts are another powerful feature. A layout.tsx file wraps all pages inside its folder, letting you share Navbar, Footer and other UI without re-rendering them on navigation.\n\nDynamic routes use square brackets like [id]. You can also use generateStaticParams to pre-render dynamic pages at build time, making them blazing fast.\n\nOverall, the App Router makes it easier to build fast, scalable applications with less boilerplate.`,
    category: "Next.js",
    date: "Jan 15, 2025",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "TypeScript Tips Every React Developer Should Know",
    excerpt: "Practical TypeScript patterns that will make your React code safer and easier to maintain.",
    body: `TypeScript adds static typing to JavaScript, catching bugs before they reach production. Here are some tips every React developer should know.\n\nFirst, always type your props. Instead of using any, define an interface or type for your component props. This makes your components self-documenting.\n\nSecond, use generics when building reusable components or hooks. For example, a custom useFetch hook can accept a generic type T to type the returned data.\n\nThird, use union types for props that accept a limited set of values, like a Button component that accepts variant as "primary" | "secondary" | "danger".\n\nFourth, use the React.FC type sparingly. It is often better to just type the props parameter directly and let TypeScript infer the return type.\n\nFinally, use the as const assertion when defining static arrays or objects to get the narrowest possible type.`,
    category: "TypeScript",
    date: "Jan 22, 2025",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Mastering Tailwind CSS Layouts",
    excerpt: "A deep dive into Flexbox and Grid utilities in Tailwind CSS to build any layout you need.",
    body: `Tailwind CSS makes building layouts fast and intuitive with its utility-first approach. Instead of writing custom CSS, you compose layouts directly in your JSX.\n\nFor one-dimensional layouts, use Flexbox utilities. Add flex to a container, then control direction with flex-row or flex-col, alignment with items-center and justify-between, and spacing with gap-4.\n\nFor two-dimensional layouts, use Grid. Add grid to a container, then define columns with grid-cols-3 or grid-cols-1 md:grid-cols-3 for responsive grids. Control gaps with gap-6.\n\nResponsive design is built in. Prefix any utility with sm:, md:, lg: or xl: to apply it at that breakpoint. For example, text-sm md:text-lg makes text larger on medium screens.\n\nTailwind also has great utilities for positioning, like sticky, fixed, absolute and relative, combined with top-0, z-50 for sticky navbars.\n\nWith practice, you can build any layout without writing a single line of custom CSS.`,
    category: "CSS",
    date: "Feb 3, 2025",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "React Server Components Explained",
    excerpt: "Understand what React Server Components are, how they work and when to use them.",
    body: `React Server Components (RSC) are a new type of component that runs exclusively on the server. They were introduced with React 18 and are the default in Next.js App Router.\n\nThe key benefit is that RSCs can directly access databases, file systems and APIs without exposing sensitive logic to the client. They also reduce the JavaScript bundle size because their code is never sent to the browser.\n\nYou can mix Server and Client Components. A Server Component can import and render a Client Component, but not the other way around. Client Components are marked with the "use client" directive at the top of the file.\n\nWhen should you use Client Components? Only when you need interactivity — useState, useEffect, event handlers or browser APIs. Everything else should be a Server Component by default.\n\nThis model leads to faster page loads, smaller bundles and better performance overall.`,
    category: "React",
    date: "Feb 14, 2025",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Building a REST API with Node.js and Express",
    excerpt: "Step-by-step guide to creating a production-ready REST API using Node.js, Express and TypeScript.",
    body: `Express is the most popular Node.js framework for building REST APIs. Combined with TypeScript, it gives you a robust and type-safe backend.\n\nStart by initialising a Node project and installing express and typescript. Create an index.ts file and set up your Express app with app.listen().\n\nOrganise your code into routes, controllers and services. Routes define the endpoints, controllers handle the request and response, and services contain the business logic.\n\nUse middleware for cross-cutting concerns like authentication, logging and error handling. Express middleware is just a function that receives req, res and next.\n\nFor validation, use a library like zod or joi to validate request bodies before they reach your controller. Always return meaningful HTTP status codes — 200 for success, 201 for created, 400 for bad request, 404 for not found and 500 for server errors.\n\nFinally, use environment variables for secrets and configuration, and never commit them to version control.`,
    category: "Node.js",
    date: "Mar 1, 2025",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Git Workflow for Solo and Team Projects",
    excerpt: "Learn the Git branching strategies and best practices that keep your codebase clean.",
    body: `Git is the most widely used version control system. Having a solid workflow makes collaboration smoother and your history cleaner.\n\nFor solo projects, a simple workflow works well. Commit often with clear messages, use branches for new features or experiments, and merge back to main when done.\n\nFor team projects, use a branching strategy like Git Flow or GitHub Flow. In GitHub Flow, main is always deployable. You create a feature branch, open a pull request, get a code review and merge.\n\nWrite good commit messages. A good message has a short subject line in the imperative mood, like "Add contact form validation", followed by an optional body explaining why the change was made.\n\nUse .gitignore to exclude node_modules, .env files and build outputs. Never commit secrets or credentials.\n\nFinally, use git rebase to keep a clean linear history, and git stash when you need to switch context without committing unfinished work.`,
    category: "Git",
    date: "Mar 10, 2025",
    readTime: "4 min read",
  },
];
