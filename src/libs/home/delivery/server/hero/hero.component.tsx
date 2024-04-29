import Image from "next/image";
import styles from "./hero.module.css";
import { BoxesPatternComponent } from "@/core/components/patterns/boxes-pattern/boxes-pattern.component";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CustomLink } from "@/core/components/link/link.component";
import { ClassNames } from "@/core/utils/class";

const socialLinks = [
  { href: "https://github.com/mariamoraan", icon: <FaGithub /> },
  { href: "https://twitter.com/_mariamoraan", icon: <FaTwitter /> },
  {
    href: "https://www.linkedin.com/in/maria-moran-luaces/",
    icon: <FaLinkedin />,
  },
];

export const HeroComponent = () => {
  const classNames = new ClassNames(styles);
  return (
    <div className={styles.about} id="#home">
      <Image
        src="/images/avatar.jpeg"
        height={300}
        width={300}
        alt="AI picture of myself"
        className={classNames.join("image")}
      />
      <h1 className={styles.title}>Hola! Soy Maria</h1>
      <p className={styles.description}>
        Soy Software Engineer, pricipalmente en el lado del frontend.
      </p>
      <p className={styles.description}>
        Creo productos eficientes, mantenibles y testeables.
      </p>
      <div className={styles.links}>
        {socialLinks.map(({ href, icon }) => (
          <CustomLink
            key={href}
            href={href}
            external
            target="_blank"
            type="icon"
          >
            {icon}
          </CustomLink>
        ))}
      </div>
      <div className={classNames.join("bottom-links")}>
        <CustomLink href="#about">Sobre mi</CustomLink>
        <CustomLink href="/blog">Blog</CustomLink>
      </div>
      <BoxesPatternComponent
        className={`${styles.pattern} ${styles.pattern1}`}
      />
      <BoxesPatternComponent
        className={`${styles.pattern} ${styles.pattern2}`}
      />
    </div>
  );
};
