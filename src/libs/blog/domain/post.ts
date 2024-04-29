import { DateTime, DatetimePrimitives } from "@/core/datetime/datetime";

interface PostPrimitives {
  title: string;
  description: string;
  image: string;
  datetime: DatetimePrimitives;
  link: string;
}

export class Post {
  private baseUrl: string = "/blog/";
  title: string;
  description: string;
  image: string;
  datetime: DateTime;
  link: string;

  constructor(postPrimitives: PostPrimitives) {
    this.title = postPrimitives.title;
    this.description = postPrimitives.description;
    this.image = postPrimitives.image;
    this.datetime = DateTime.fromISO(postPrimitives.datetime.iso);
    this.link = `${this.baseUrl}${postPrimitives.link}`;
  }

  static fromPrimitives(postPrimitives: PostPrimitives) {
    return new Post(postPrimitives);
  }

  static getVoidPost() {
    return new Post({
      title: "",
      description: "",
      image: "",
      datetime: { iso: "2024-05-06" },
      link: "",
    });
  }

  toPrimitives() {
    return {
      title: this.title,
      description: this.description,
      image: this.image,
    };
  }
}
