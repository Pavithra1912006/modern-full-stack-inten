import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Pavithra. All rights reserved.</p>
        <ul className="flex gap-6 text-sm">
          <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
          <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
}
