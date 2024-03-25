export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { GridTodos, NewTodo } from "@/todos";

export const metadata = {
  title: "Listado de Todos",
  description: "Listado de Todos",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <div className="w-full px-5 mx-5 mb-5">
        <NewTodo />
      </div>
      <GridTodos todos={todos} />
    </div>
  );
}
