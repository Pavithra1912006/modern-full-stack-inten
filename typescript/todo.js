"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let todolist = [
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
function addTodo(newTodo) {
    todolist.push(newTodo);
}
addTodo({
    id: 3,
    name: "anu",
    title: "python",
    completion: "not started",
    status: false
});
console.log(todolist);
//# sourceMappingURL=todo.js.map