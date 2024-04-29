import { inject, injectable } from "tsyringe";
import type { PostsRepository } from "../domain/repositories/posts-repository";
import { POSTS_REPOSITORY } from "@/core/dependency-injection/injection-tokens";

@injectable()
export class FindPostsQuery {
  constructor(
    @inject(POSTS_REPOSITORY) private readonly postsRepository: PostsRepository
  ) {}
  execute() {
    return this.postsRepository.findAll();
  }
}
