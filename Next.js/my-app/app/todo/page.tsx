"use client";

import { useState } from "react";

type Todo = { id: number; text: string; completed: boolean };

export default function TodoPage() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const addTodo = () => {
    if (!task.trim()) return;
    if (editId !== null) {
      setTodos(todos.map((t) => (t.id === editId ? { ...t, text: task } : t)));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    }
    setTask("");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">Todo App</h1>

      <div className="flex gap-2">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 flex-1"
          placeholder="Enter task"
        />
        <button onClick={addTodo} className="bg-black text-white px-5">
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <div className="mt-5">
        {todos.map((todo) => (
          <div key={todo.id} className="border p-3 mb-3 rounded flex justify-between">
            <p className={todo.completed ? "line-through" : ""}>{todo.text}</p>
            <div className="flex gap-2">
              <button onClick={() => setTodos(todos.map((t) => t.id === todo.id ? { ...t, completed: !t.completed } : t))}>Done</button>
              <button onClick={() => { setTask(todo.text); setEditId(todo.id); }}>Edit</button>
              <button onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}