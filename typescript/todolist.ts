interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

class TodoList {
    private todos: Todo[] = [];

    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }

    displayTodos(): void {
        console.log("Todo List:");
        this.todos.forEach((todo) => {
            console.log(
                `${todo.id}. ${todo.title} - ${
                    todo.completed ? "Completed" : "Pending"
                }`
            );
        });
    }

    markCompleted(id: number): void {
        const todo = this.todos.find(t => t.id === id);

        if (todo) {
            todo.completed = true;
        }
    }
}

// Create object
const todoList = new TodoList();

// Add todos
todoList.addTodo({
    id: 1,
    title: "Learn TypeScript",
    completed: false
});

todoList.addTodo({
    id: 2,
    title: "Practice Interfaces",
    completed: false
});

// Display todos
todoList.displayTodos();

// Mark task as completed
todoList.markCompleted(1);

console.log("\nAfter Completion:");
todoList.displayTodos();