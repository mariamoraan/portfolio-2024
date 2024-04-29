import Link from "next/link";
import styles from "./footer.module.css";
import { ClassNames } from "@/core/utils/class";

export const FooterComponent = () => {
  const className = new ClassNames(styles);
  return (
    <footer className={className.join("wrapper")}>
      <div className={className.join("about")}>
        <p className={className.join("title")}>Maria Moran</p>
        <p className={className.join("description")}>Software Engineer</p>
      </div>
      <div className={className.join("links")}>
        <Link className={className.join("link")} href={"/"}>
          Home
        </Link>
        <Link className={className.join("link")} href={"/blog/"}>
          Blog
        </Link>
      </div>
    </footer>
  );
};
