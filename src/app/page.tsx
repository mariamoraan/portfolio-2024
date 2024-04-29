import { AboutComponent } from "@/libs/home/delivery/server/about/about.component";
import { HeroComponent } from "@/libs/home/delivery/server/hero/hero.component";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Maria Moraan",
  description: "Portfolio de Maria Moran.",
};

const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
    </>
  );
};

export default HomePage;
