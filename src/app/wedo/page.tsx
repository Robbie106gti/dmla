import CalloutTitle from "../components/snippets/callout-title";
import ExpertiseCard from "../components/snippets/expertise-card";
import SectionHeader from "../components/snippets/section-header";
import styles from "./page.module.css";

export default function Wedo() {
  return (
    <section
      id="wedo"
      className={styles.wedo + " full subgrid font-color_primary"}
    >
      <SectionHeader darker={true} title="WHAT WE DO" subtitle="" />
      <div className="content display-flex flex-justify-center flex-row font-color_white">
        <CalloutTitle
          title={"Handmade Digital Marketing"}
          title_color="primary"
          subtitle={
            "Our digital marketing services are tailored to your needs. This means it’s not just our work that’s customized; the way we do it is also designed to fit your goals and processes."
          }
          image_url="mac pc handmade charts.svg"
          image_alt="Charts on a screen mac or on a computer"
        />
        <div className="display-flex flex-align-center gap">
          <img
            src={"/looking-glass-check.svg"}
            loading="lazy"
            alt="looking glass with a checkmark"
            style={{
              width: "auto",
              height: "3.75rem",
            }}
          />
          <h3 className={styles.titleAreas + " font-color_primary"}>
            Our Areas of Expertise
          </h3>
        </div>
        <ExpertiseCard
          image={"mobile-desktop-ready.svg"}
          imageAlt={"Mobile and desktop ready websites icon"}
          image_subtitle="Web development, design & maintenance"
          subjects={[
            {
              title: "Web development",
              descriptions: [
                "We specialize in coding from scratch, implementing web components, Angular development, and WordPress template customization.",
                "Our services include:",
                "> Website development and revamp",
                "> Website migration package",
                "> Ongoing web updates",
                "> Web maintenance, including a monthly activity report",
              ],
            },
            {
              title: "Web design",
              descriptions: [
                "Our web design offerings span design thinking, lean UX/UI, interface design, and prototypes.",
              ],
            },
            {
              title: "Web maintenance",
              descriptions: [
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam",
              ],
            },
          ]}
        />
        <ExpertiseCard
          image={"compass-coge.svg"}
          imageAlt={"Navigate the digital word with SEO"}
          image_subtitle="Technical SEO (search engine optimization)"
          subjects={[
            {
              title: "Technical SEO",
              marginNormal: true,
              descriptions: [
                "If you are seeking a local SEO company, we have a full suite of services including:",
                "> Website and SEO audit, complete report along with errors and warning documents",
                "> Post-audit technical optimization to improve the performance and page speed of the website, especially on mobile devices",
                "> Monthly SEO ranking reports, with insights on how to improve your website content to position higher and increase market share against competitors",
              ],
            },
          ]}
        />
        <ExpertiseCard
          image={"digital-pen-tablet.svg"}
          imageAlt={"Mobile and desktop ready websites icon"}
          image_subtitle="Digital & graphic design"
          subjects={[
            {
              title: "Offline marketing",
              descriptions: [
                "Our skills include visual identity, brand manuals, logo design, corporate materials, online and print brochure design, and more.",
              ],
            },
            {
              title: "Paid media",
              descriptions: [
                "In addition to organic results, you may want to consider a well-calibrated strategy in Google Ads for your customer journey. If you are interested in learning more about Google Ads strategies, we would be happy to guide you.",
              ],
            },
            {
              title: "Copywriting",
              descriptions: [
                "We consider copywriting a key part of the process of designing marketing materials. Creative and polished copy highlights your product or service, which adds value to your brand.",
              ],
            },
          ]}
        />
        <ExpertiseCard
          image={"3d-laptop-configurar.svg"}
          imageAlt={"Mobile and desktop ready websites icon"}
          image_subtitle="3D rendering"
          subjects={[
            {
              title: "3D rendering",
              descriptions: [
                "Studio DMLA is now offering 3D rendering services. Marcelo Borges, our 3D rendering associate, specializes in marketing, scenography, and furniture creations for points of sale, store windows, and spaces. Get in touch with us to learn more about our 3D rendering offerings.",
              ],
            },
          ]}
        />
        <div className={styles.letsGetStarted}>
          <div className={styles.titleGetStarted}>
          <img
            src={"/hands-shaking.svg"}
            loading="lazy"
            alt="looking glass with a checkmark"
            style={{
              width: "auto",
              height: "2rem",
            }}
          />
          <h3 className={styles.titleAreas + " font-color_primary"}>Let's get started</h3>

          </div>
          <div className="display-flex half-gap">
            <img
              src={"/number1.svg"}
              loading="lazy"
              alt="decorative image of numbers"
              style={{
                width: "auto",
                height: "2rem",
              }}
            />
            <p className={styles.titleAreas}>
              Set up an initial call to discuss your digital marketing needs and
              goals.
            </p>
          </div>
          <div className="display-flex half-gap">
            <img
              src={"/number2.svg"}
              loading="lazy"
              alt="decorative image of numbers"
              style={{
                width: "auto",
                height: "2rem",
              }}
            />
            <p className={styles.titleAreas}>
              Choose the model of work: direct placement, the assigned team at
              DMLA, or per scope.
            </p>
          </div>
          <div className="display-flex half-gap">
            <img
              src={"/number3.svg"}
              loading="lazy"
              alt="decorative image of numbers"
              style={{
                width: "auto",
                height: "2rem",
              }}
            />
            <p className={styles.titleAreas}>
              We’ll create a strategy and source the best professionals globally
              to work on your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
