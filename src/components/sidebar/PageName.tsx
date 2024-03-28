"use client";

import { usePathname } from "next/navigation";

export const PageName = () => {
  const pathName = usePathname();
  const pageNameEltos = pathName.split("/");
  const pageName = pageNameEltos[pageNameEltos.length - 1]
    .replace("-", " ")
    .toUpperCase();
  return (
    <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
      {pageName}
    </h5>
  );
};
