"use server";

import fs from "fs";
import path from "path";

export type Feedback = {
  id: number;
  name: string;
  message: string;
  date: string;
};

const filePath = path.join(process.cwd(), "app", "feedback", "feedback.json");

function readFeedbacks(): Feedback[] {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export async function submitFeedback(formData: FormData): Promise<Feedback> {
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  const feedbacks = readFeedbacks();

  const newFeedback: Feedback = {
    id: Date.now(),
    name,
    message,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  };

  fs.writeFileSync(
    filePath,
    JSON.stringify([...feedbacks, newFeedback], null, 2)
  );

  return newFeedback;
}

export async function getFeedbacks(): Promise<Feedback[]> {
  return readFeedbacks();
}