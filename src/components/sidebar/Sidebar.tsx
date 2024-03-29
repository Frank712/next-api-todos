import { CiLogout } from "react-icons/ci";
import { SidebarItem } from "./SidebarItem";
import Link from "next/link";
import Image from "next/image";
import {
  IoBasketOutline,
  IoBrowsersSharp,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorking,
  IoDocumentLockOutline,
  IoListOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { LogoutButton } from "./LogoutButton";

const menuItems = [
  {
    icon: <IoCalendarOutline />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <IoCheckboxOutline />,
    title: "Rest Todos",
    path: "/dashboard/rest-todos",
  },
  {
    icon: <IoListOutline />,
    title: "Server Actions",
    path: "/dashboard/server-todos",
  },
  {
    icon: <IoCodeWorking />,
    title: "Cookies",
    path: "/dashboard/cookies",
  },
  {
    icon: <IoBasketOutline />,
    title: "Productos",
    path: "/dashboard/products",
  },
  {
    icon: <IoPersonOutline />,
    title: "Perfil",
    path: "/dashboard/profile",
  },
];

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  const imageUrl =
    session?.user?.image ||
    "https://cdn-icons-png.flaticon.com/512/3607/3607444.png";
  const userName = session?.user?.name || "Sin nombre";
  const roles = session?.user?.roles || ["user"];
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          {/* TODO: Next/Link hacia dashboard */}
          <Link href={"/dashboard"} title="home">
            {/* Next/Image */}
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="w-32"
              alt="tailus logo"
              height={50}
              width={50}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          <Image
            src={imageUrl}
            alt="avatar user"
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            height={50}
            width={50}
            priority
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {userName}
          </h5>
          <span className="hidden text-gray-400 lg:block capitalize">
            {roles.join(" - ")}
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  );
};
