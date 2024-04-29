import { Post } from "../post";

export interface PostsRepository {
  findAll: () => Promise<Post[]>;
  find: (link: string) => Promise<Post>;
}
