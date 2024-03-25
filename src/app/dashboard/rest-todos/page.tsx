import prisma from "@/lib/prisma";
import { GridTodos } from "@/todos";

export const metadata = {
  title: "Listado de Todos",
  description: "Listado de Todos",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <GridTodos todos={todos} />
    </div>
  );
}
