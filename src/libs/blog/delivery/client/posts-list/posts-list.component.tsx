"use client";

import { ClassNames } from "@/core/utils/class";
import styles from "./posts-list.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { FindPostsQuery } from "@/libs/blog/application/find-posts.query";
import { useGetUseCase } from "@/core/hooks/use-get-use-case";

export const PostList = () => {
  const className = new ClassNames(styles);
  const { execute, result: posts } = useGetUseCase(FindPostsQuery);

  useEffect(() => {
    execute();
  }, [execute]);

  if (!posts) return null;

  return (
    <div className={className.join("wrapper")}>
      {posts.map((post) => (
        <Link
          href={post.link}
          className={className.join("post")}
          key={post.link}
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className={className.join("details")}>
            <p className={className.join("title")}>{post.title}</p>
            <p className={className.join("description")}>{post.description}</p>
            <p className={className.join("date")}>
              {post.datetime.toString("dd LLL yyyy")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
