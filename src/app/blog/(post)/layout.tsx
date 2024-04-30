import { ClassNames } from "@/core/utils/class";
import { PostHeaderComponent } from "@/libs/blog/delivery/client/post-header/post-header.component";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "María Morán",
  description:
    "Soy ingeniera de software y tengo 3 años de experiencia en el desarrollo de aplicaciones web e híbridas. Me apasiona crear interfaces de usuario intuitivas, escalables y eficientes. Tengo un fuerte enfoque en la arquitectura, testing y buenas prácticas, ysiempre estoy buscando nuevas formas de mejorar la calidad del código y la experiencia del usuario.",
};

export default function PostLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const className = new ClassNames(styles);
  return (
    <div className={className.join("wrapper")}>
      <div className={className.join("content")}>
        <PostHeaderComponent />
        {children}
      </div>
    </div>
  );
}
