import FounderCard from "@/app/components/cards/founder-card";
import CalloutTitle from "../../components/snippets/callout-title";
import IntervalBar from "../../components/snippets/intervalBar";
import SectionHeader from "../../components/snippets/section-header";
import styles from "./page.module.css";
import AssociateCard from "@/app/components/cards/associate-card";
import Associates from "@/app/components/associates";

export default function AboutUs() {
  return (
    <section id="aboutus" className={styles.aboutus + " full"}>
      <div className={styles.angle}></div>
      <SectionHeader title="About us" subtitle="" />
      <div className="content display-flex flex-justify-center flex-row font-color_white">
        <CalloutTitle
          title={"We believe work should go beyond the industrial model"}
          subtitle={[
            "At Studio DMLA, we do not do business as usual. We build a culture that empowers remote collaboration, autonomy, results, and a shared vision.",
            "We are a B2B marketing agency, partnering with the best in each field from Latin America and locally to deliver cutting-edge digital solutions to North American organizations while being responsible for the strategy, project management, and final product.",
            "Our digital boutique is an extension of our client’s teams, and we provide perspective and solutions for problems they did not know they had.",
          ]}
          image_url="laptop-heart.svg"
          image_alt="Heart      on a screen mac or on a computer"
          side_image_alt="DMLA connecting the americas"
          side_image_url="DMLA connecting the americas.svg"
        />
        <IntervalBar />
        <div className={styles.subgrid}>
          <div className={styles.mission}>
            <img
              src={"/Our Mission.svg"}
              loading="lazy"
              alt={"Our Mission"}
              style={{
                width: "auto",
                height: "4.5rem",
              }}
            />
            <h4>
              Our <br /> MISSION
            </h4>
            <p>
              Design state-of-the-art digital marketing solutions for North
              American clients through B2B partnerships and remote collaboration
              in Latin America and locally
            </p>
          </div>
          <div className={styles.values}>
            <img
              src={"/Our Values.svg"}
              loading="lazy"
              alt={"Our values"}
              style={{
                width: "auto",
                height: "4.5rem",
              }}
            />
            <h4>
              Our <br /> VALUES
            </h4>
            <p>
              Working smart leads to better results. Trust is the basis of any
              (working) relationship. Be mindful of yourself, others, and the
              impact of your actions in the world. Remote work brings global
              talent together and empowers economic development. If you want to
              communicate, language isn’t a barrier. Life-work balance is
              sustainable. We believe in altruism and using our resources to
              help others.
            </p>
          </div>
        </div>
        <IntervalBar />
        <div className={styles.outteam}>
          <img
            src={"/ourteam.svg"}
            loading="lazy"
            alt={"Our team icon with 4 heads overlapped"}
            style={{
              width: "4.125rem",
              height: "auto",
            }}
          />
          <h3>Our Team</h3>
        </div>
        <FounderCard
          image={""}
          imageAlt={""}
          title={""}
          subTitle={""}
          description={""}
        />
        <FounderCard
          image={""}
          imageAlt={""}
          title={""}
          subTitle={""}
          description={""}
        />
        <IntervalBar />
        <div className={styles.outassociates}>
          <img
            src={"/ourteam.svg"}
            loading="lazy"
            alt={"Our team icon with 4 heads overlapped"}
            style={{
              width: "4.125rem",
              height: "auto",
            }}
          />
          <h3>Meet our Associates</h3>
          <p>
            At <b>Studio DMLA</b>, the well-being and development of our
            associates come first. Through these incredible collaborations
            locally and in Latin America, we can deliver first-class and timely
            services to our clients.
          </p>
        </div>
        <Associates />
      </div>
    </section>
  );
}
