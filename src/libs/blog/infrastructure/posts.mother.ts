import { Post } from "../domain/post";

export class PostsMother {
  static getPosts() {
    return [
      Post.fromPrimitives({
        title:
          "¿Qué son las Custom Properties de CSS y por qué deberías usarlas?",
        description:
          "En este artículo exploraremos las custom properties de css, desde la facilidad para modificar valores globales hasta la creación de temas dinámicos y adaptables. Aprende a implementarlas en tus proyectos y descubre cómo pueden transformar tu forma de trabajar con CSS.",
        image: "/images/css-custom-props-image.jpg",
        datetime: { iso: "2024-04-24" },
        link: "css-custom-properties",
      }),
    ];
  }
}
