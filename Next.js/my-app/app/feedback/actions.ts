"use server";

import pool from "@/lib/db";

export type Feedback = {
  id: number;
  name: string;
  message: string;
  rating: number;
  date: string;
};

async function initTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS feedback (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      rating INT NOT NULL,
      date VARCHAR(50) NOT NULL
    )
  `);
}

export async function submitFeedback(formData: FormData): Promise<Feedback> {
  await initTable();

  const name = formData.get("name") as string;
  const message = formData.get("message") as string;
  const rating = Number(formData.get("rating"));
  const date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const result = await pool.query(
    `INSERT INTO feedback (name, message, rating, date) VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, message, rating, date]
  );

  return result.rows[0];
}

export async function getFeedbacks(): Promise<Feedback[]> {
  await initTable();
  const result = await pool.query(`SELECT * FROM feedback ORDER BY id DESC`);
  return result.rows;
}
