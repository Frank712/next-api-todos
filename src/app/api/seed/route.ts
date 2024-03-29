import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "test1@gmail.com",
      password: bcryptjs.hashSync("123456"),
      roles: ["admin", "client", "super-user"],
      todos: {
        create: [
          { description: "Piedra del alma" },
          { description: "Piedra del poder" },
          { description: "Piedra del tiempo" },
          { description: "Piedra del espacio" },
          { description: "Piedra del realidad" },
        ],
      },
    },
  });

  return NextResponse.json({ message: "Seed Executed" });
}
