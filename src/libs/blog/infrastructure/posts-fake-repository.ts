import { injectable } from "tsyringe";
import { PostsRepository } from "../domain/repositories/posts-repository";
import { PostsMother } from "./posts.mother";

@injectable()
export class PostFakeRepository implements PostsRepository {
  async findAll() {
    return PostsMother.getPosts();
  }
  async find(_link: string) {
    return PostsMother.getPosts()[0];
  }
}
