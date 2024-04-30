import { PropsWithChildren } from "react";
import styles from "./paragraph.module.css";
import { ClassNames } from "@/core/utils/class";

export const Paragraph: React.FC<PropsWithChildren> = (props) => {
  const className = new ClassNames(styles);
  const { children } = props;
  return <p className={className.join("paragraph")}>{children}</p>;
};
