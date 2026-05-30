import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>

            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            {todo.completed ? (
              <s>{todo.text}</s>
            ) : (
              todo.text
            )}

            <button
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;