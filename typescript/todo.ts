interface Todo {
    id: number;
    name: string;
    title: string;
    completion: string;
    status: boolean;
}

let todolist: Todo[] = [
    {
        id: 1,
        name: "pavi",
        title: "learn typescript",
        completion: "none",
        status: false
    },
    {
        id: 2,
        name: "priya",
        title: "java",
        completion: "pending",
        status: true
    }
];

function addTodo(newTodo: Todo): void {
    todolist.push(newTodo);
}

function searchTodo(id: number): void {
    const foundTodo = todolist.find(todo => todo.id === id);

    if (foundTodo) {
        console.log("Todo Found:", foundTodo);
    } else {
        console.log("Todo not found");
    }
}

addTodo({
    id: 3,
    name: "anu",
    title: "python",
    completion: "not started",
    status: false
});

console.log("All Todos:");
console.log(todolist);

searchTodo(2);