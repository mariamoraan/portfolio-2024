import { container } from "tsyringe";
import { MESSAGE_REPOSITORY, POSTS_REPOSITORY } from "./injection-tokens";
import { MessageApiRepository } from "@/libs/contact/infrastructure/message-api.repository";
import { PostFakeRepository } from "@/libs/blog/infrastructure/posts-fake-repository";

export const injectAppDependencies = () => {
  container.registerSingleton(MESSAGE_REPOSITORY, MessageApiRepository);
  container.registerSingleton(POSTS_REPOSITORY, PostFakeRepository);
};
