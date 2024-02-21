import AboutUs from "./aboutus/page";
import HeroDesktop from "./components/hero/desktop";
import HeroMobile from "./components/hero/mobile";
import HeroTablet from "./components/hero/tablet";
import CuttingEdge from "./cuttingedge/page";
import OurImpact from "./ourimpact/page";
import styles from "./page.module.css";
import Platforms from "./platforms/page";
import Spotlight from "./spotlight/page";
import Wedo from "./wedo/page";

export default function Home() {
  return (
    <main className="content">
      <div id="home" className={styles.main + " feature"}>
        <HeroDesktop />
        <HeroMobile />
        <HeroTablet />
      </div>
      <CuttingEdge />
      <AboutUs />
      <Wedo />
      <Spotlight />
      <OurImpact />
      <Platforms />
    </main>
  );
}
