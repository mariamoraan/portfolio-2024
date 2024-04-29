import { ClassNames } from "@/core/utils/class";
import styles from "./experience.module.css";
import { FaICursor } from "react-icons/fa";
import { IconType } from "react-icons";
import { DateTime } from "@/core/datetime/datetime";
import { SectionHeading } from "@/core/components/headings/section-heading/section-heading.component";

interface Experience {
  from: DateTime;
  to?: DateTime;
  name: string;
  institution: string;
  icon: IconType;
  description: string;
}

const experiences: Experience[] = [
  {
    from: DateTime.fromISO("2024-01-01"),
    name: "Frontend Engineer",
    institution: "Autentia",
    icon: FaICursor,
    description: "Current",
  },
  {
    from: DateTime.fromISO("2023-01-01"),
    to: DateTime.fromISO("2024-01-01"),
    name: "Frontend Engineer",
    institution: "WOCU Monitoring",
    icon: FaICursor,
    description: `Migrated Django & JQuery app to React.`,
  },
  {
    from: DateTime.fromISO("2022-02-01"),
    to: DateTime.fromISO("2023-06-01"),
    name: "Frontend Engineer",
    institution: "Orca",
    icon: FaICursor,
    description: `Implemented new features related to authentication, user experience and support for new hardware and api features.
    Improved website flow and retention working closely with a design responsible and a marketing responsible .
    Led development of the new apple watch app, including authentication, bluetooth connectivity and UI.
    Migrated app to Typescript as part of a quality proposal plan created by me and other colleagues .
    Ensured a test coverage of 90% as part of a quality proposal plan created by me and other colleagues.`,
  },
  {
    from: DateTime.fromISO("2021-06-01"),
    to: DateTime.fromISO("2022-01-01"),
    name: "Software Engineer",
    institution: "Twilio",
    icon: FaICursor,
    description: `I took care of solving several pre-existing problems. It was an opportunity to understand how big teams work and to
    improve my skills. I used technologies such as: Nodejs, Java, Python, SQL, Git and Github.`,
  },
];

export const ExperienceComponent = () => {
  const classNames = new ClassNames(styles);
  const formatExperienceInterval = (experience: Experience) => {
    if (!experience.to) return `${experience.from.toString("LLL, yyyy")} - now`;
    else
      return `${experience.from.toString(
        "LLL, yyyy"
      )} - ${experience.to.toString("LLL, yyyy")}`;
  };
  return (
    <div id="experience" className={classNames.join("experience")}>
      <SectionHeading>Mi experiencia</SectionHeading>
      <div className={classNames.join("experiences")}>
        {experiences.map((experience) => (
          <div
            key={experience.from.toISO()}
            className={classNames.join("experience-card")}
          >
            <p className={classNames.join("dates")}>
              {formatExperienceInterval(experience)}
            </p>
            <div className={classNames.join("details")}>
              <p className={classNames.join("name")}>{experience.name}</p>
              <p className={classNames.join("institution")}>
                {experience.institution}
              </p>
              <p className={classNames.join("description")}>
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
