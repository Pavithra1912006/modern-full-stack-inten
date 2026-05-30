"use client";

import { useState } from "react";
import { submitFeedback, Feedback } from "./actions";

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const feedback = await submitFeedback(formData);

    setFeedbacks([...feedbacks, feedback]);

    form.reset();
  }

  return (
    <div>
      <h1>Feedback Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
    

        <input
          type="text"
          name="name"
          required
          style={{ border: "1px solid black" }}
        />

        <br />
        <br />

        <label>Feedback:</label>

        <textarea
          name="message"
          required
          style={{ border: "1px solid black" }}
        />

        <br />
        <br />

        <button
          type="submit"
          style={{ border: "1px solid black" }}
        >
          Submit
        </button>
      </form>

      <br></br>

      <h2>Feedback List</h2>

      {feedbacks.map((item) => (
        <div key={item.id}>
          <p>
            <strong>{item.name}</strong>
          </p>

          <p>{item.message}</p>

          
        </div>
      ))}
    </div>
  );
}