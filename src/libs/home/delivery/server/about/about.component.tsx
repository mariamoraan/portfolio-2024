import { ClassNames } from "@/core/utils/class";
import styles from "./about.module.css";
import { IoGameControllerOutline } from "react-icons/io5";
import { GrYoga } from "react-icons/gr";
import { LuCoffee } from "react-icons/lu";
import { GiCat } from "react-icons/gi";
import { SectionHeading } from "@/core/components/headings/section-heading/section-heading.component";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoStack } from "react-icons/go";

const aboutMeCards = [
  {
    Icon: IoGameControllerOutline,
    text: "Juego al Stardew Valley",
  },
  {
    Icon: GrYoga,
    text: "Hago Pilates",
  },
  {
    Icon: LuCoffee,
    text: "Me encanta el té chai",
  },
  {
    Icon: GiCat,
    text: "Tengo un gatito",
  },
];

const info = [
  {
    Icon: MdOutlineWorkOutline,
    title: "Mi Experiencia",
    description:
      "Soy ingeniera de software y tengo 3 años de experiencia en el desarrollo de aplicaciones web e híbridas. Me apasiona crear interfaces de usuario intuitivas, escalables y eficientes. Tengo un fuerte enfoque en la arquitectura, testing y buenas prácticas, ysiempre estoy buscando nuevas formas de mejorar la calidad del código y la experiencia del usuario.",
  },
  {
    Icon: GoStack,
    title: "Mi Stack",
    description:
      "En mi stack principal tengo Typescript, React, React Native y Nextjs pero siempre me gusta investigar y he desarrollado proyectos personales y profesionales con SwiftUI, Angular y Flutter.",
  },
];

export const AboutComponent = () => {
  const className = new ClassNames(styles);
  return (
    <div id="about" className={className.join("about")}>
      <SectionHeading>Sobre mi</SectionHeading>
      <div className={className.join("cards")}>
        {aboutMeCards.map((card) => (
          <div
            key={card.text}
            className={className.join("card")}
            content="Holaa"
          >
            <card.Icon className={className.join("icon")} />
            <p className={className.join("text")}>{card.text}</p>
          </div>
        ))}
      </div>
      {info.map(({ Icon, title, description }) => (
        <div key={title} className={styles["info"]}>
          <div className={styles["header"]}>
            <Icon /> {title}
          </div>
          <p className={styles["description"]}>{description}</p>
        </div>
      ))}
    </div>
  );
};
