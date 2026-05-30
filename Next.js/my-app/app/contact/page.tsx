"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Contact Me</h1>
      <p className="text-gray-500 mb-12 text-lg">Have a project in mind? Let&apos;s talk.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Location</h2>
            <p className="text-gray-500">New York, USA (Remote friendly)</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Email</h2>
            <a href="mailto:john@example.com" className="text-blue-600 hover:underline">
              john@example.com
            </a>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Socials</h2>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub ↗</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn ↗</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">Twitter ↗</a>
            </div>
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="flex items-center justify-center border border-green-200 bg-green-50 rounded-xl p-10 text-center">
            <div>
              <p className="text-3xl mb-3">✅</p>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Message Sent!</h2>
              <p className="text-gray-500 text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
