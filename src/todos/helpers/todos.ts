import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const body = { complete };
  const todo = fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  return todo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description };
  const todo = fetch(`/api/todos/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  return todo;
};

export const deleteTodo = async (id: string): Promise<Todo> => {
  const todo = fetch(`/api/todos/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
  return todo;
};

export const deleteCompletedTodos = async (): Promise<boolean> => {
  await fetch(`/api/todos`, {
    method: "DELETE",
  }).then((res) => res.json());
  return true;
};
