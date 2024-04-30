import { inject, injectable } from "tsyringe";
import type { PostsRepository } from "../domain/repositories/posts-repository";
import { POSTS_REPOSITORY } from "@/core/dependency-injection/injection-tokens";
import { Query } from "@/core/use-case/query";
import { Post } from "../domain/post";

@injectable()
export class FindPostsQuery implements Query<Post[]> {
  constructor(
    @inject(POSTS_REPOSITORY) private readonly postsRepository: PostsRepository
  ) {}
  handle() {
    return this.postsRepository.findAll();
  }
}
