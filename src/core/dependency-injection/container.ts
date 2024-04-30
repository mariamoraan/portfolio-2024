import { container } from "tsyringe";
import { POSTS_REPOSITORY } from "./injection-tokens";
import { PostFakeRepository } from "@/libs/blog/infrastructure/posts-fake-repository";

export const injectAppDependencies = () => {
  container.registerSingleton(POSTS_REPOSITORY, PostFakeRepository);
};
