import { PropsWithChildren } from "react";
import styles from "./ul.module.css";
import { ClassNames } from "@/core/utils/class";

export const Ul: React.FC<PropsWithChildren> = (props) => {
  const className = new ClassNames(styles);
  const { children } = props;
  return <ul className={className.join("items")}>{children}</ul>;
};
