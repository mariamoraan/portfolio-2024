import styles from "./pre.module.css";

interface Props {
  children: React.ReactNode;
}

export const Pre = (props: Props) => {
  const { children } = props;
  return <pre className={styles.wrapper}>{children}</pre>;
};
