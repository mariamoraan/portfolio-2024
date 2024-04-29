import Link from "next/link";
import styles from "./link.module.css";

type LinkType = "base" | "icon";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  target?: string;
  type?: LinkType;
}

export const CustomLink = (props: Props) => {
  const {
    children,
    href,
    external = false,
    className = "",
    target = "",
    type = "base",
  } = props;

  const linkTypeStyles: Record<LinkType, string> = {
    base: styles["base-link"],
    icon: styles["icon-link"],
  };
  const style = `${linkTypeStyles[type]} ${className}`;

  if (external) {
    <a href={href} className={style} target={target}>
      {children}
    </a>;
  }
  return (
    <Link href={href} className={style}>
      {children}
    </Link>
  );
};
