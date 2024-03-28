import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
      <WidgetItem title="Usuario conectado [SS]">
        <div className="flex flex-col">
          <div>Email: {session.user?.email}</div>
          <div>Image: {session.user?.image}</div>
          <div>Name: {session.user?.name}</div>
        </div>
      </WidgetItem>
    </div>
  );
}
