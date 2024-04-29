"use client";

import { ClassNames } from "@/core/utils/class";
import styles from "./posts-list.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Post } from "@/libs/blog/domain/post";
import { useResolve } from "@/core/dependency-injection/use-resolve.hook";
import { FindPostsQuery } from "@/libs/blog/application/find-posts.query";

export const PostList = () => {
  const className = new ClassNames(styles);
  const [posts, setPosts] = useState<Post[]>([]);
  const [useFindPosts] = useResolve([FindPostsQuery]);

  useEffect(() => {
    const getPosts = async () => {
      const foundPosts = await useFindPosts.execute();
      setPosts(foundPosts);
    };
    getPosts();
  }, [useFindPosts]);

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
