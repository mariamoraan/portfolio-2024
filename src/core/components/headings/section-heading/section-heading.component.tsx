import { ClassNames } from "@/core/utils/class";
import styles from "./section-heading.module.css";

interface Props {
  children: React.ReactNode;
}

export const SectionHeading = (props: Props) => {
  const { children } = props;
  const className = new ClassNames(styles);
  return <h3 className={className.join("title")}>{children}</h3>;
};
