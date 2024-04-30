import { inject, injectable } from "tsyringe";
import type { PostsRepository } from "../domain/repositories/posts-repository";
import { POSTS_REPOSITORY } from "@/core/dependency-injection/injection-tokens";
import { Query } from "@/core/use-case/query";
import { Post } from "../domain/post";

@injectable()
export class FindPostQuery implements Query<Post, string> {
  constructor(
    @inject(POSTS_REPOSITORY) private readonly postsRepository: PostsRepository
  ) {}
  handle(id: string) {
    return this.postsRepository.find(id);
  }
}
