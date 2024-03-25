"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SidebarItem = ({ icon, path, title }: Props) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl
          hover:bg-gradient-to-r hover:from-sky-600 hover:text-white
          ${
            pathName === path
              ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
              : ""
          }
          `}
      >
        {icon}
        <span className="-mr-1 font-medium group-hover:text-white-700">
          {title}
        </span>
      </Link>
    </li>
  );
};
