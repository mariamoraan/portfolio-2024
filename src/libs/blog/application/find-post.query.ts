import { inject, injectable } from "tsyringe";
import type { PostsRepository } from "../domain/repositories/posts-repository";
import { POSTS_REPOSITORY } from "@/core/dependency-injection/injection-tokens";

@injectable()
export class FindPostQuery {
  constructor(
    @inject(POSTS_REPOSITORY) private readonly postsRepository: PostsRepository
  ) {}
  execute(id: string) {
    return this.postsRepository.find(id);
  }
}
