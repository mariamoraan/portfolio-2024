import { ClassNames } from "@/core/utils/class";
import { PostHeaderComponent } from "@/libs/blog/delivery/client/post-header/post-header.component";
import styles from "./layout.module.css";

export default function PostLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const className = new ClassNames(styles);
  return (
    <div className={className.join("wrapper")}>
      <div className={className.join("content")}>
        <PostHeaderComponent />
        {children}
      </div>
    </div>
  );
}
