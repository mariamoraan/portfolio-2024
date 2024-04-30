import { ClassNames } from "@/core/utils/class";
import styles from "./post-content.module.css";
import { PropsWithChildren } from "react";

export const PostContent: React.FC<PropsWithChildren> = (props) => {
  const className = new ClassNames(styles);
  return <div className={className.join("wrapper")}>{props.children}</div>;
};
