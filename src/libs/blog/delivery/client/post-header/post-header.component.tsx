"use client";

import { ClassNames } from "@/core/utils/class";
import { usePathname } from "next/navigation";
import styles from "./post-header.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Post } from "@/libs/blog/domain/post";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useResolve } from "@/core/dependency-injection/use-resolve.hook";
import { FindPostQuery } from "@/libs/blog/application/find-post.query";
import { CiLink } from "react-icons/ci";

export const PostHeaderComponent = () => {
  const className = new ClassNames(styles);
  const pathname = usePathname();
  const [post, setPost] = useState<Post>(Post.getVoidPost());
  const [useFindPost] = useResolve([FindPostQuery]);

  useEffect(() => {
    const findPost = async () => {
      const foundPost = await useFindPost.execute(
        pathname.replace("/blog/", "")
      );
      setPost(foundPost);
    };
    findPost();
  }, [pathname, useFindPost]);

  return (
    <div className={className.join("wrapper")}>
      {post.image ? (
        <Image
          className={className.join("image")}
          src={post.image}
          width={2400}
          height={2400}
          alt=""
        />
      ) : null}
      <p className={className.join("title")}>{post.title}</p>
      <p className={className.join("description")}>{post.description}</p>
      <div className={styles["post-info"]}>
        <Image
          src="/images/avatar.jpeg"
          height={300}
          width={300}
          alt="AI picture of myself"
          className={styles["author-image"]}
        />
        <div className={styles["post-details"]}>
          <div className={styles["author"]}>
            <p className={styles["author-name"]}>María Morán</p>
          </div>
          <p className={styles["published"]}>
            Published · {post.datetime.toString("DD LLL yyyy")}
          </p>
        </div>
      </div>
      <hr className={styles["hr"]} />
    </div>
  );
};
