import styles from "./link.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
}

export const Link = ({ children, href }: Props) => {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
};
