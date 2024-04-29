"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const pagesWithoutNavbar = [/\/blog\/./];

export const Navbar = () => {
  const pathname = usePathname();
  const hasNav = !pagesWithoutNavbar.some((rx) => rx.test(pathname));
  if (!hasNav) return null;
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["links"]}>
        <Link
          className={pathname === "/" ? styles["current-link"] : ""}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={pathname === "/blog" ? styles["current-link"] : ""}
          href={"/blog/"}
        >
          Blog
        </Link>
      </div>
    </div>
  );
};
