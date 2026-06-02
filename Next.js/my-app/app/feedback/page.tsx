"use client";

import { useState, useEffect } from "react";
import { submitFeedback, getFeedbacks, type Feedback } from "./actions";

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFeedbacks().then(setFeedbacks);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    const formData = new FormData(form);
    const newFeedback = await submitFeedback(formData);
    setFeedbacks((prev) => [newFeedback, ...prev]);
    form.reset();
    setLoading(false);
  }

  return (
    <div>
      <h1>Feedback</h1>
      <p>Share your thoughts!</p>

      <form onSubmit={handleSubmit}>
        <input name="name" required placeholder="Your name" />
        <br />
        <textarea name="message" required rows={4} placeholder="Your feedback..." />
        <br />
        <label>Rating: </label>
        <select name="rating">
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>{"⭐".repeat(r)} ({r})</option>
          ))}
        </select>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>

      <h2>All Feedbacks ({feedbacks.length})</h2>
      {feedbacks.length === 0 ? (
        <p>No feedbacks yet. Be the first!</p>
      ) : (
        <div>
          {feedbacks.map((f) => (
            <div key={f.id}>
              <strong>{f.name}</strong> — <small>{f.date}</small>
              <p>{f.message}</p>
              <span>{"⭐".repeat(f.rating)}</span>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
